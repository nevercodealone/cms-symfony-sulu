/* stimulusFetch: 'lazy' */
import { Controller } from '@hotwired/stimulus';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

const TEXT = {
    empty: 'Bitte gib eine Frage ein.',
    thinking: 'Die Suche läuft …',
    progress: {
        preparing: 'Die Suche wird vorbereitet …',
        searching: 'Die Inhalte werden durchsucht. Das kann bis zu einer Minute dauern …',
        streaming: 'Die Antwort wird geschrieben …',
    },
    done: 'Antwort fertig.',
    submitIdle: 'Frage stellen',
    submitBusy: 'Suche läuft …',
    rateLimit: 'Das waren viele Fragen in kurzer Zeit. Warte bitte eine Minute und versuch es dann noch einmal.',
    upstream: 'Die Suche konnte gerade keine Antwort erzeugen. Versuch es bitte gleich noch einmal.',
    network: 'Die Verbindung ist abgebrochen. Prüf deine Internetverbindung und versuch es noch einmal.',
    noAnswer: 'Dazu habe ich auf dieser Website nichts gefunden. Formulier die Frage gern anders.',
    feedbackSending: 'Feedback wird gesendet …',
    feedbackThanks: 'Danke für dein Feedback.',
    feedbackFailed: 'Das Feedback konnte nicht gesendet werden. Versuch es bitte noch einmal.',
    sourceFallback: 'Quelle',
};

/**
 * Visitor-facing form for the Sulu AI Platform intelligent search.
 * Streams GET /api/intelligent-search (SSE over fetch) and posts feedback.
 */
export default class extends Controller {
    static targets = [
        'form', 'question', 'error', 'submit', 'examples', 'status', 'result', 'asked', 'heading',
        'answer', 'sourcesWrap', 'sources', 'feedback', 'feedbackButton', 'feedbackDown',
        'feedbackComment', 'feedbackText', 'feedbackStatus',
    ];

    static values = {
        endpoint: String,
        feedbackEndpoint: String,
        locale: String,
        webspace: String,
    };

    connect() {
        this.abortController = null;
        this.searchUuid = null;

        if (this.questionTarget.value.trim() !== '') {
            this.search();
        }
    }

    disconnect() {
        this.abort();
    }

    submit(event) {
        event.preventDefault();
        this.search();
    }

    submitOnEnter(event) {
        if (event.key !== 'Enter' || event.shiftKey || event.isComposing) {
            return;
        }

        event.preventDefault();
        this.search();
    }

    useExample(event) {
        this.questionTarget.value = event.params.question;
        this.clearError();
        this.search();
    }

    clearError() {
        this.errorTarget.hidden = true;
        this.errorTarget.textContent = '';
        this.questionTarget.removeAttribute('aria-invalid');
    }

    async search() {
        const question = this.questionTarget.value.trim();

        if (question === '') {
            this.errorTarget.textContent = TEXT.empty;
            this.errorTarget.hidden = false;
            this.questionTarget.setAttribute('aria-invalid', 'true');
            this.questionTarget.focus();

            return;
        }

        this.clearError();
        this.abort();
        this.resetResult(question);
        this.setBusy(true);
        this.rememberQuestion(question);

        const params = new URLSearchParams({ q: question, locale: this.localeValue, format: 'sse' });
        if (this.webspaceValue !== '') {
            params.set('webspace', this.webspaceValue);
        }

        const abortController = new AbortController();
        this.abortController = abortController;
        const state = { answer: '', finished: false, failed: false };

        try {
            const response = await fetch(this.endpointValue + '?' + params.toString(), {
                headers: { Accept: 'text/event-stream' },
                signal: abortController.signal,
            });

            if (!response.ok || !response.body) {
                this.fail(response.status === 429 ? TEXT.rateLimit : TEXT.upstream);

                return;
            }

            await this.readStream(response.body, state);

            if (!state.finished && !state.failed) {
                // Stream closed without a "done" event.
                if (state.answer.trim() === '') {
                    this.fail(TEXT.upstream);
                } else {
                    this.finish(state);
                }
            }
        } catch (error) {
            if (error.name !== 'AbortError') {
                this.fail(TEXT.network);
            }
        } finally {
            if (this.abortController === abortController) {
                this.abortController = null;
                this.setBusy(false);
            }
        }
    }

    async readStream(body, state) {
        const reader = body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';
        let eventName = null;

        for (;;) {
            const { done, value } = await reader.read();
            if (done) {
                break;
            }

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop();

            for (const rawLine of lines) {
                const line = rawLine.replace(/\r$/, '');

                if (line.startsWith('event:')) {
                    eventName = line.slice(6).trim();
                } else if (line.startsWith('data:') && eventName !== null) {
                    this.handleEvent(eventName, line.slice(5).trim(), state);
                    eventName = null;
                } else if (line === '') {
                    eventName = null;
                }
            }
        }
    }

    handleEvent(name, data, state) {
        let payload;
        try {
            payload = JSON.parse(data);
        } catch (error) {
            return;
        }

        if (state.failed) {
            return;
        }

        switch (name) {
            case 'metadata':
                if (payload && typeof payload.uuid === 'string' && payload.uuid.trim() !== '') {
                    this.searchUuid = payload.uuid;
                }
                break;
            case 'progress':
                if (payload && TEXT.progress[payload.step]) {
                    this.statusTarget.textContent = TEXT.progress[payload.step];
                    if (state.answer === '') {
                        this.answerTarget.textContent = TEXT.progress[payload.step];
                    }
                }
                break;
            case 'chunk':
                if (typeof payload === 'string') {
                    state.answer += payload;
                    this.renderAnswer(state.answer);
                }
                break;
            case 'sources':
                this.renderSources(payload && Array.isArray(payload.sources) ? payload.sources : []);
                break;
            case 'done':
                this.finish(state);
                break;
            case 'error':
                state.failed = true;
                this.fail(payload && Number(payload.code) === 429 ? TEXT.rateLimit : TEXT.upstream);
                break;
            default:
                break;
        }
    }

    finish(state) {
        state.finished = true;
        this.answerTarget.setAttribute('aria-busy', 'false');

        if (state.answer.trim() === '') {
            this.answerTarget.textContent = TEXT.noAnswer;
        }

        this.statusTarget.textContent = TEXT.done;
        this.feedbackTarget.hidden = this.searchUuid === null;

        // Bring keyboard and screen-reader users to the answer, unless they already moved on.
        if (this.formTarget.contains(document.activeElement) || document.activeElement === document.body) {
            this.headingTarget.focus({ preventScroll: true });
        }
    }

    fail(message) {
        this.searchUuid = null;
        this.answerTarget.setAttribute('aria-busy', 'false');
        this.resultTarget.hidden = true;
        this.statusTarget.textContent = '';
        this.errorTarget.textContent = message;
        this.errorTarget.hidden = false;
        this.questionTarget.focus();
    }

    abort() {
        if (this.abortController) {
            this.abortController.abort();
            this.abortController = null;
        }
    }

    resetResult(question) {
        this.searchUuid = null;
        this.askedTarget.textContent = question;
        this.answerTarget.textContent = TEXT.thinking;
        this.answerTarget.setAttribute('aria-busy', 'true');
        this.sourcesTarget.replaceChildren();
        this.sourcesWrapTarget.hidden = true;
        this.feedbackTarget.hidden = true;
        this.feedbackCommentTarget.hidden = true;
        this.feedbackDownTarget.setAttribute('aria-expanded', 'false');
        this.feedbackTextTarget.value = '';
        this.feedbackStatusTarget.textContent = '';
        this.setFeedbackDisabled(false);
        this.resultTarget.hidden = false;
        this.statusTarget.textContent = TEXT.thinking;
    }

    setBusy(busy) {
        this.submitTarget.disabled = busy;
        this.submitTarget.textContent = busy ? TEXT.submitBusy : TEXT.submitIdle;
    }

    rememberQuestion(question) {
        const url = new URL(window.location.href);
        url.searchParams.set('q', question);
        window.history.replaceState(null, '', url);
    }

    renderAnswer(markdown) {
        const html = DOMPurify.sanitize(marked.parse(markdown), { USE_PROFILES: { html: true } });
        const fragment = document.createRange().createContextualFragment(html);

        this.adoptCitationLinks(fragment);
        this.linkCitations(fragment);
        fragment.querySelectorAll('a[href]').forEach((link) => {
            if (!link.dataset.citation) {
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
            }
        });

        this.answerTarget.replaceChildren(fragment);
    }

    /** The platform cites as markdown links "[[2]](url)": point those at the source card too. */
    adoptCitationLinks(fragment) {
        fragment.querySelectorAll('a').forEach((link) => {
            const match = link.textContent.trim().match(/^\[(\d+)\]$/);
            if (match) {
                this.markAsCitation(link, match[1]);
            }
        });
    }

    markAsCitation(link, number) {
        link.href = '#ai-search-source-' + number;
        link.dataset.citation = number;
        link.dataset.action = 'ai-search#showSource';
        link.className = 'mx-0.5 align-super text-xs font-bold';
        link.setAttribute('aria-label', 'Quelle ' + number);
        link.textContent = '[' + number + ']';
    }

    /** Turns "[2]" in answer text into links to the matching source card. */
    linkCitations(fragment) {
        const walker = document.createTreeWalker(fragment, NodeFilter.SHOW_TEXT);
        const textNodes = [];

        while (walker.nextNode()) {
            const node = walker.currentNode;
            if (!node.parentElement || !node.parentElement.closest('a, code, pre')) {
                textNodes.push(node);
            }
        }

        textNodes.forEach((node) => {
            const parts = node.nodeValue.split(/\[(\d+)\]/);
            if (parts.length === 1) {
                return;
            }

            const replacement = document.createDocumentFragment();
            parts.forEach((part, index) => {
                if (index % 2 === 0) {
                    replacement.append(part);

                    return;
                }

                const link = document.createElement('a');
                this.markAsCitation(link, part);
                replacement.append(link);
            });

            node.replaceWith(replacement);
        });
    }

    showSource(event) {
        const source = document.getElementById('ai-search-source-' + event.currentTarget.dataset.citation);
        if (!source) {
            return;
        }

        event.preventDefault();
        source.scrollIntoView({ behavior: 'smooth', block: 'center' });
        source.focus({ preventScroll: true });
    }

    renderSources(sources) {
        this.sourcesTarget.replaceChildren();

        sources.forEach((source, index) => {
            const number = source.citation_number || index + 1;
            const item = document.createElement('li');
            item.className = 'my-0';

            const link = document.createElement('a');
            link.id = 'ai-search-source-' + number;
            link.className = 'flex h-full gap-3 border-2 border-gray-200 bg-white p-3 text-gray-900 no-underline transition-colors duration-150 hover:border-green-700 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700';

            if (typeof source.url === 'string' && /^(https?:\/\/|\/)/i.test(source.url)) {
                link.href = source.url;
            }

            const badge = document.createElement('span');
            badge.className = 'text-sm font-black text-green-900';
            badge.textContent = '[' + number + ']';

            const title = document.createElement('span');
            title.className = 'text-sm font-bold break-words';
            title.textContent = source.title || source.url || TEXT.sourceFallback;

            link.append(badge, title);
            item.append(link);
            this.sourcesTarget.append(item);
        });

        this.sourcesWrapTarget.hidden = sources.length === 0;
    }

    feedbackUp() {
        this.sendFeedback('up', '');
    }

    feedbackDown() {
        this.feedbackCommentTarget.hidden = false;
        this.feedbackDownTarget.setAttribute('aria-expanded', 'true');
        this.feedbackTextTarget.focus();
    }

    cancelFeedbackComment() {
        this.feedbackCommentTarget.hidden = true;
        this.feedbackDownTarget.setAttribute('aria-expanded', 'false');
        this.feedbackTextTarget.value = '';
        this.feedbackDownTarget.focus();
    }

    sendFeedbackComment() {
        this.sendFeedback('down', this.feedbackTextTarget.value.trim());
    }

    async sendFeedback(feedback, comment) {
        if (this.searchUuid === null) {
            return;
        }

        this.setFeedbackDisabled(true);
        this.setFeedbackStatus(TEXT.feedbackSending, 'text-gray-700');

        try {
            const response = await fetch(this.feedbackEndpointValue, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    uuid: this.searchUuid,
                    feedback,
                    comment: comment !== '' ? comment : undefined,
                }),
            });
            const payload = await response.json().catch(() => null);

            if (!response.ok || !payload || payload.success !== true) {
                throw new Error(response.status === 429 ? TEXT.rateLimit : TEXT.feedbackFailed);
            }

            this.feedbackCommentTarget.hidden = true;
            this.feedbackDownTarget.setAttribute('aria-expanded', 'false');
            this.setFeedbackStatus(TEXT.feedbackThanks, 'text-green-800');
        } catch (error) {
            this.setFeedbackDisabled(false);
            this.setFeedbackStatus(
                error.message === TEXT.rateLimit ? TEXT.rateLimit : TEXT.feedbackFailed,
                'text-red-700',
            );
        }
    }

    setFeedbackDisabled(disabled) {
        this.feedbackButtonTargets.forEach((button) => {
            button.disabled = disabled;
        });
        this.feedbackTextTarget.disabled = disabled;
    }

    setFeedbackStatus(message, colorClass) {
        this.feedbackStatusTarget.classList.remove('text-gray-700', 'text-green-800', 'text-red-700');
        this.feedbackStatusTarget.classList.add(colorClass);
        this.feedbackStatusTarget.textContent = message;
    }
}
