import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['grid', 'actions', 'count'];

    static values = {
        step: { type: Number, default: 6 },
    };

    connect() {
        this.update();
    }

    reveal() {
        this.hiddenCards()
            .slice(0, this.stepValue)
            .forEach((card) => card.removeAttribute('hidden'));

        this.update();
    }

    update() {
        const cards = this.cards();
        const total = cards.length;
        const visible = total - this.hiddenCards().length;

        if (this.hasCountTarget) {
            this.countTarget.textContent = visible + '/' + total;
        }

        if (this.hasActionsTarget && visible >= total) {
            this.actionsTarget.classList.add('hidden');
        }
    }

    cards() {
        if (!this.hasGridTarget) {
            return [];
        }

        return Array.from(this.gridTarget.children);
    }

    hiddenCards() {
        return this.cards().filter((card) => card.hasAttribute('hidden'));
    }
}
