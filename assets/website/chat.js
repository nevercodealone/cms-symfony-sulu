/**
 * Chat markdown formatter and message handler
 */
export class ChatMarkdown {
    /**
     * Format markdown text to HTML
     * @param {string} text - Markdown text to format
     * @returns {string} HTML formatted text
     */
    static format(text) {
        let html = text;

        // Process headers
        html = html.replace(/^### (.*?)$/gm, '<h3 class="font-bold text-lg mt-2 mb-1 text-gray-800">$1</h3>');
        html = html.replace(/^## (.*?)$/gm, '<h2 class="font-bold text-xl mt-2 mb-1 text-gray-800">$1</h2>');
        html = html.replace(/^# (.*?)$/gm, '<h1 class="font-bold text-2xl mt-2 mb-1 text-gray-800">$1</h1>');

        // Handle incomplete markdown links
        html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^)]*$)/gm, '$1');
        html = html.replace(/\[([^\]]+)\]\((https?:\/\/$)/gm, '$1');
        html = html.replace(/\[([^\]]+)\]\(([^)]*$)/gm, '$1');

        // Process complete links with YouTube special handling
        html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => {
            if (!url || url === 'https://' || url === 'http://' || url.endsWith('://')) {
                return text;
            }
            if (url.includes('youtube.com') || url.includes('youtu.be')) {
                return `<a href="${url}" target="_blank" class="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 underline font-medium">📺 ${text}</a>`;
            }
            return `<a href="${url}" target="_blank" class="text-blue-600 hover:text-blue-800 underline">${text}</a>`;
        });

        // Bold and italic
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>');
        html = html.replace(/\*([^*\n]+)\*/g, '<em class="italic">$1</em>');

        // Code blocks
        html = html.replace(/```(.*?)```/gs, '<pre class="bg-gray-100 rounded p-3 my-2 overflow-x-auto"><code>$1</code></pre>');
        html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm">$1</code>');

        // Process lists
        html = this.processLists(html);

        // Convert line breaks
        html = html.replace(/\n\n+/g, '</p><p class="mb-2">');
        html = html.replace(/\n/g, ' ');

        // Wrap in paragraphs
        if (!html.startsWith('<')) {
            html = `<p class="mb-2">${html}</p>`;
        }

        // Clean up
        html = html.replace(/<p class="mb-2"><\/p>/g, '');
        html = html.replace(/<p><\/p>/g, '');
        html = html.replace(/\s+/g, ' ');

        return html;
    }

    /**
     * Process ordered and unordered lists
     * @private
     */
    static processLists(html) {
        const lines = html.split('\n');
        const processedLines = [];
        let currentListItems = [];
        let listType = null;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const orderedMatch = line.match(/^(\d+)\.\s+(.*)$/);
            const unorderedMatch = line.match(/^[-*]\s+(.*)$/);
            const indentedLine = line.match(/^\s{2,}[-*]\s+(.*)$/);

            if (orderedMatch) {
                if (currentListItems.length > 0 && listType === 'unordered') {
                    processedLines.push(`<ul class="list-disc list-inside space-y-1 my-2">${currentListItems.join('')}</ul>`);
                    currentListItems = [];
                }

                listType = 'ordered';
                let itemContent = orderedMatch[2];

                // Look for description lines
                let j = i + 1;
                const descriptionLines = [];
                while (j < lines.length) {
                    const nextLine = lines[j];
                    if (nextLine.match(/^\s{2,}/) && !nextLine.match(/^\s*\d+\./)) {
                        descriptionLines.push(nextLine.trim());
                        j++;
                    } else if (nextLine.trim() === '') {
                        j++;
                        if (j < lines.length && lines[j].match(/^\s{2,}/)) {
                            continue;
                        } else {
                            break;
                        }
                    } else {
                        break;
                    }
                }

                if (descriptionLines.length > 0) {
                    itemContent += `<div class="mt-1 ml-4 text-sm text-gray-600">${descriptionLines.join('<br>')}</div>`;
                    i = j - 1;
                }

                currentListItems.push(`<li class="mb-1">${itemContent}</li>`);
            } else if (unorderedMatch && !indentedLine) {
                if (currentListItems.length > 0 && listType === 'ordered') {
                    processedLines.push(`<ol class="list-decimal list-inside space-y-1 my-2">${currentListItems.join('')}</ol>`);
                    currentListItems = [];
                }

                listType = 'unordered';
                currentListItems.push(`<li>${unorderedMatch[1]}</li>`);
            } else if (indentedLine) {
                if (currentListItems.length > 0) {
                    const lastIndex = currentListItems.length - 1;
                    currentListItems[lastIndex] = currentListItems[lastIndex].replace('</li>', `<br><span class="ml-4 text-sm">• ${indentedLine[1]}</span></li>`);
                }
            } else {
                if (currentListItems.length > 0 && listType) {
                    const tag = listType === 'ordered' ? 'ol' : 'ul';
                    const listClass = listType === 'ordered' ? 'list-decimal' : 'list-disc';
                    processedLines.push(`<${tag} class="${listClass} list-inside space-y-1 my-2">${currentListItems.join('')}</${tag}>`);
                    currentListItems = [];
                    listType = null;
                }

                if (line.trim()) {
                    processedLines.push(line);
                } else if (i > 0 && i < lines.length - 1) {
                    processedLines.push('');
                }
            }
        }

        // Close remaining list
        if (currentListItems.length > 0 && listType) {
            const tag = listType === 'ordered' ? 'ol' : 'ul';
            const listClass = listType === 'ordered' ? 'list-decimal' : 'list-disc';
            processedLines.push(`<${tag} class="${listClass} list-inside space-y-1 my-2">${currentListItems.join('')}</${tag}>`);
        }

        return processedLines.join('\n');
    }
}

/**
 * Chat message handler
 */
export class ChatHandler {
    constructor(chatBody, chatInput, chatSubmit, loadingMessage, robotImage) {
        this.chatBody = chatBody;
        this.chatInput = chatInput;
        this.chatSubmit = chatSubmit;
        this.loadingMessage = loadingMessage;
        this.robotImage = robotImage;
    }

    /**
     * Initialize chat functionality
     */
    init() {
        this.loadChatHistory();
        this.chatSubmit.addEventListener('click', (e) => {
            e.preventDefault();
            this.sendMessage();
        });
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.sendMessage();
            }
        });
    }

    /**
     * Load chat history from API
     */
    async loadChatHistory() {
        try {
            const response = await fetch('/api/chat/history');
            const data = await response.json();

            if (data.success && data.messages && data.messages.length > 0) {
                const welcome = document.getElementById('welcome');
                if (welcome) welcome.remove();

                data.messages.forEach(msg => {
                    this.appendUserMessage(msg.question);
                    this.appendBotMessage(msg.answer);

                    if (msg.answer.includes('schlafen komm morgen wieder')) {
                        this.setRateLimited();
                    }
                });

                const separator = document.createElement('div');
                separator.className = 'chat-history-separator text-center text-xs text-gray-400 my-3';
                separator.innerHTML = '<hr class="border-gray-200 mb-2"><span class="bg-white px-2">Chat-Verlauf geladen</span>';
                this.chatBody.appendChild(separator);

                this.scrollToBottom();
            }
        } catch (error) {
            console.error('Error loading chat history:', error);
        }
    }

    /**
     * Send message to API
     */
    async sendMessage() {
        const message = this.chatInput.value.trim();
        if (!message) return;

        const welcome = document.getElementById('welcome');
        if (welcome) welcome.remove();

        const separator = document.querySelector('.chat-history-separator');
        if (separator) separator.remove();

        this.appendUserMessage(message);
        const loadingDiv = this.showLoadingMessage();
        this.chatInput.value = '';

        try {
            const response = await fetch('/api/chat/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message })
            });

            const data = await response.json();

            if (data.success) {
                this.replaceLoadingWithMessage(loadingDiv, data.response);

                if (data.response.includes('schlafen komm morgen wieder')) {
                    this.setRateLimited();
                }
            } else {
                this.showError(loadingDiv);
            }
        } catch (error) {
            console.error('Error:', error);
            this.showNetworkError(loadingDiv);
        }
    }

    /**
     * Append user message to chat
     */
    appendUserMessage(text) {
        const div = document.createElement('div');
        div.className = 'flex justify-end gap-3 mb-4';
        div.innerHTML = `
            <div class="max-w-xs md:max-w-md">
                <div class="bg-blue-600 text-white px-4 py-3 rounded-lg">${text}</div>
            </div>
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">👤</div>
        `;
        this.chatBody.appendChild(div);
    }

    /**
     * Append bot message to chat
     */
    appendBotMessage(content) {
        const div = document.createElement('div');
        div.className = 'flex items-start gap-3 mb-4';
        div.innerHTML = `
            <img src="/robot.png" alt="Robot Golla" class="w-10 h-10 object-contain rounded-full bg-blue-100 p-1 flex-shrink-0">
            <div class="flex-1 bg-gray-50 rounded-lg p-4 max-w-2xl">
                <div class="text-gray-700 leading-relaxed">${ChatMarkdown.format(content)}</div>
            </div>
        `;
        this.chatBody.appendChild(div);
    }

    /**
     * Show loading message
     */
    showLoadingMessage() {
        const div = document.createElement('div');
        div.className = 'flex items-start gap-3 mb-4';
        div.id = 'current-loading';
        div.innerHTML = `
            <img src="/robot.png" alt="Robot Golla" class="w-10 h-10 object-contain rounded-full bg-blue-100 p-1 flex-shrink-0">
            <div class="bg-gray-50 rounded-lg p-4">
                <div class="flex items-center gap-2">
                    <div class="animate-pulse flex gap-1">
                        <div class="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <div class="w-2 h-2 bg-gray-400 rounded-full animation-delay-200"></div>
                        <div class="w-2 h-2 bg-gray-400 rounded-full animation-delay-400"></div>
                    </div>
                    <span class="text-gray-500 text-sm">Robot Golla denkt nach...</span>
                </div>
            </div>
        `;
        this.chatBody.appendChild(div);
        this.scrollToBottom();
        return div;
    }

    /**
     * Replace loading message with actual response
     */
    replaceLoadingWithMessage(loadingDiv, content) {
        loadingDiv.innerHTML = `
            <img src="/robot.png" alt="Robot Golla" class="w-10 h-10 object-contain rounded-full bg-blue-100 p-1 flex-shrink-0">
            <div class="flex-1 bg-gray-50 rounded-lg p-4 max-w-2xl">
                <div class="text-gray-700 leading-relaxed">${ChatMarkdown.format(content)}</div>
            </div>
        `;
        loadingDiv.removeAttribute('id');
        this.scrollToBottom();
    }

    /**
     * Show error message
     */
    showError(loadingDiv) {
        loadingDiv.innerHTML = `
            <img src="/robot.png" alt="Robot Golla" class="w-10 h-10 object-contain rounded-full bg-red-100 p-1 flex-shrink-0">
            <div class="flex-1 bg-red-50 border border-red-200 rounded-lg p-4 max-w-2xl">
                <div class="text-red-700">Entschuldigung, es ist ein Fehler aufgetreten. Bitte versuche es später erneut.</div>
            </div>
        `;
        loadingDiv.removeAttribute('id');
    }

    /**
     * Show network error
     */
    showNetworkError(loadingDiv) {
        loadingDiv.innerHTML = `
            <img src="/robot.png" alt="Robot Golla" class="w-10 h-10 object-contain rounded-full bg-red-100 p-1 flex-shrink-0">
            <div class="flex-1 bg-red-50 border border-red-200 rounded-lg p-4 max-w-2xl">
                <div class="text-red-700">Netzwerkfehler: Bitte überprüfe deine Internetverbindung und versuche es erneut.</div>
            </div>
        `;
        loadingDiv.removeAttribute('id');
    }

    /**
     * Set rate limited state
     */
    setRateLimited() {
        if (this.robotImage) {
            this.robotImage.src = '/robot-sleeping.png';
        }

        const inputContainer = document.querySelector('.border-t.border-gray-200.bg-gray-50');
        if (inputContainer) {
            inputContainer.style.display = 'none';
        }
    }

    /**
     * Scroll chat to bottom (only scrolls the chat container, not the page)
     */
    scrollToBottom() {
        this.chatBody.scrollTop = this.chatBody.scrollHeight;
    }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const chatInput = document.getElementById('chat-message');
    const chatSubmit = document.getElementById('chat-submit');
    const chatBody = document.getElementById('chat-body');
    const loadingMessage = document.getElementById('loading-message');
    const robotImage = document.getElementById('robot-image');

    // Only initialize if chat elements exist on the page
    if (chatBody && chatInput && chatSubmit) {
        const chat = new ChatHandler(chatBody, chatInput, chatSubmit, loadingMessage, robotImage);
        chat.init();
    }
});
