import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['slide', 'tab'];

    static classes = ['tabActive', 'tabIdle'];

    connect() {
        this.current = 0;
        this.touchStartX = 0;
        this.touchStartY = 0;

        this.boundOnKeydown = (event) => this.onKeydown(event);
        window.addEventListener('keydown', this.boundOnKeydown);

        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.element.addEventListener('touchstart', this.onTouchStart, { passive: true });
        this.element.addEventListener('touchend', this.onTouchEnd, { passive: true });

        this.update();
    }

    disconnect() {
        window.removeEventListener('keydown', this.boundOnKeydown);
        this.element.removeEventListener('touchstart', this.onTouchStart);
        this.element.removeEventListener('touchend', this.onTouchEnd);
    }

    select(event) {
        event.preventDefault();
        this.goTo(this.tabTargets.indexOf(event.currentTarget));
    }

    show(event) {
        event.preventDefault();
        this.goTo(Number(event.params.index));
    }

    next(event) {
        if (event) {
            event.preventDefault();
        }
        this.goTo(this.current + 1);
    }

    prev(event) {
        if (event) {
            event.preventDefault();
        }
        this.goTo(this.current - 1);
    }

    goTo(index) {
        if (index < 0 || index >= this.slideTargets.length || index === this.current) {
            return;
        }
        this.current = index;
        this.update();
    }

    update() {
        this.slideTargets.forEach((slide, index) => {
            const active = index === this.current;
            slide.classList.toggle('hidden', !active);
            slide.setAttribute('aria-hidden', active ? 'false' : 'true');
        });

        this.tabTargets.forEach((tab, index) => {
            const active = index === this.current;
            tab.setAttribute('aria-selected', active ? 'true' : 'false');
            tab.setAttribute('tabindex', active ? '0' : '-1');
            if (this.hasTabActiveClass) {
                tab.classList.toggle(this.tabActiveClass, active);
            }
            if (this.hasTabIdleClass) {
                tab.classList.toggle(this.tabIdleClass, !active);
            }
        });
    }

    onKeydown(event) {
        if (['INPUT', 'TEXTAREA', 'SELECT', 'DETAILS'].includes(document.activeElement.tagName)) {
            return;
        }
        if (document.documentElement.hasAttribute('data-coverflow-open')) {
            return;
        }
        if (!this.isInViewport()) {
            return;
        }
        if (event.key === 'ArrowRight' || event.key === 'PageDown') {
            this.next();
        } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
            this.prev();
        }
    }

    onTouchStart(event) {
        this.touchStartX = event.changedTouches[0].screenX;
        this.touchStartY = event.changedTouches[0].screenY;
    }

    onTouchEnd(event) {
        const diffX = this.touchStartX - event.changedTouches[0].screenX;
        const diffY = this.touchStartY - event.changedTouches[0].screenY;

        if (Math.abs(diffX) > 60 && Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > 0) {
                this.next();
            } else {
                this.prev();
            }
        }
    }

    isInViewport() {
        const rect = this.element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }
}
