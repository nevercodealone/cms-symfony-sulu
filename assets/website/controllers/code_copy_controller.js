import { Controller } from '@hotwired/stimulus';

const REVERT_DELAY = 2000;

export default class extends Controller {
    static targets = ['code', 'label', 'button'];

    connect() {
        this.revertTimer = null;
        if (!navigator.clipboard && this.hasButtonTarget) {
            this.buttonTarget.hidden = true;
        }
    }

    copy() {
        if (!navigator.clipboard || !this.hasCodeTarget) {
            return;
        }

        const text = this.codeTarget.textContent.trim();
        const previousText = this.hasLabelTarget ? this.labelTarget.textContent : null;

        navigator.clipboard.writeText(text).then(() => {
            if (this.hasLabelTarget) {
                this.labelTarget.textContent = 'Copied!';
            }
            if (this.revertTimer) {
                clearTimeout(this.revertTimer);
            }
            this.revertTimer = setTimeout(() => {
                if (this.hasLabelTarget && previousText !== null) {
                    this.labelTarget.textContent = previousText;
                }
                this.revertTimer = null;
            }, REVERT_DELAY);
        }).catch(() => {
            // Silently ignore rejection — label stays in default state.
        });
    }

    disconnect() {
        if (this.revertTimer) {
            clearTimeout(this.revertTimer);
            this.revertTimer = null;
        }
    }
}
