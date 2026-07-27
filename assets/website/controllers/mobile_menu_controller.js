import { Controller } from '@hotwired/stimulus';

const LOCK_CLASS = 'is-locked';

export default class extends Controller {
    static targets = ['dialog', 'toggle'];

    open() {
        if (!this.hasDialogTarget) {
            return;
        }
        this.dialogTarget.showModal();
        if (this.hasToggleTarget) {
            this.toggleTarget.setAttribute('aria-expanded', 'true');
        }
        document.documentElement.classList.add(LOCK_CLASS);
        this.dialogTarget.addEventListener('click', this.boundHandleOutsideClick);
    }

    close() {
        if (!this.hasDialogTarget) {
            return;
        }
        if (this.dialogTarget.open) {
            this.dialogTarget.close();
        }
        if (this.hasToggleTarget) {
            this.toggleTarget.setAttribute('aria-expanded', 'false');
        }
        document.documentElement.classList.remove(LOCK_CLASS);
        if (this.hasDialogTarget) {
            this.dialogTarget.removeEventListener('click', this.boundHandleOutsideClick);
        }
    }

    closeOnLink() {
        this.close();
    }

    disconnect() {
        if (this.hasDialogTarget) {
            this.dialogTarget.removeEventListener('click', this.boundHandleOutsideClick);
            if (this.dialogTarget.open) {
                this.dialogTarget.close();
            }
        }
        document.documentElement.classList.remove(LOCK_CLASS);
    }

    boundHandleOutsideClick = (event) => {
        if (event.target === this.dialogTarget) {
            this.close();
        }
    };
}
