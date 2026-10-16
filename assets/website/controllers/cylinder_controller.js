import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['popup', 'card', 'dot'];

    connect() {
        this.current = 0;
        this.touchStartX = 0;
    }

    open(event) {
        event.preventDefault();
        event.stopPropagation();

        this.current = Number(event.params.index) || 0;

        this.popupTarget.classList.remove('hidden');
        setTimeout(() => {
            this.popupTarget.classList.remove('opacity-0');
            this.render();
        }, 10);

        document.body.classList.add('overflow-hidden');
        document.documentElement.setAttribute('data-cylinder-open', '1');

        this.boundOnKeydown = (event) => this.onKeydown(event);
        window.addEventListener('keydown', this.boundOnKeydown);

        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.popupTarget.addEventListener('touchstart', this.onTouchStart, { passive: true });
        this.popupTarget.addEventListener('touchend', this.onTouchEnd, { passive: true });
    }

    close() {
        this.popupTarget.classList.add('opacity-0');
        setTimeout(() => {
            this.popupTarget.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
            document.documentElement.removeAttribute('data-cylinder-open');
        }, 300);

        window.removeEventListener('keydown', this.boundOnKeydown);
        this.popupTarget.removeEventListener('touchstart', this.onTouchStart);
        this.popupTarget.removeEventListener('touchend', this.onTouchEnd);
    }

    backdropClose(event) {
        if (event.target === this.popupTarget) {
            this.close();
        }
    }

    next(event) {
        if (event) {
            event.preventDefault();
        }
        this.goToIndex(this.current + 1);
    }

    prev(event) {
        if (event) {
            event.preventDefault();
        }
        this.goToIndex(this.current - 1);
    }

    goTo(event) {
        event.preventDefault();
        this.goToIndex(Number(event.params.index) || 0);
    }

    goToIndex(index) {
        const count = this.cardTargets.length;
        if (!count) {
            return;
        }
        this.current = ((index % count) + count) % count;
        this.render();
    }

    onKeydown(event) {
        if (event.key === 'Escape') {
            this.close();
        } else if (event.key === 'ArrowRight') {
            this.next();
        } else if (event.key === 'ArrowLeft') {
            this.prev();
        }
    }

    onTouchStart(event) {
        this.touchStartX = event.touches[0].clientX;
    }

    onTouchEnd(event) {
        const diffX = event.changedTouches[0].clientX - this.touchStartX;

        if (Math.abs(diffX) > 50) {
            if (diffX < 0) {
                this.next();
            } else {
                this.prev();
            }
        }
    }

    render() {
        const count = this.cardTargets.length;
        if (!count) {
            return;
        }

        const stage = this.element.querySelector('.stage-viewport-3d');
        const carousel = this.element.querySelector('.cylinder-carousel-3d');
        const width = (carousel && carousel.offsetWidth) || 896;

        if (stage) {
            stage.style.perspective = `${Math.round(width * 1.6)}px`;
        }

        const sideOffset = width * 0.16;
        const sideDepth = width * 0.245;
        const farDepth = width * 0.5;

        this.cardTargets.forEach((card, index) => {
            let diff = index - this.current;
            if (diff > count / 2) {
                diff -= count;
            }
            if (diff < -count / 2) {
                diff += count;
            }

            if (diff === 0) {
                card.style.transform = 'translate3d(0px, 0px, 0px) rotateY(0deg) scale(1)';
                card.style.opacity = '1';
                card.style.filter = 'none';
                card.style.zIndex = '30';
                card.style.pointerEvents = 'auto';
            } else if (Math.abs(diff) === 1) {
                const direction = diff > 0 ? 1 : -1;
                card.style.transform = `translate3d(${direction * sideOffset}px, 0px, ${-sideDepth}px) rotateY(${direction * -22}deg) scale(0.92)`;
                card.style.opacity = '0.45';
                card.style.filter = 'blur(1px) brightness(0.7)';
                card.style.zIndex = '20';
                card.style.pointerEvents = 'auto';
            } else {
                card.style.transform = `translate3d(0px, 0px, ${-farDepth}px) rotateY(180deg) scale(0.8)`;
                card.style.opacity = '0';
                card.style.filter = 'blur(3px)';
                card.style.zIndex = '10';
                card.style.pointerEvents = 'none';
            }
        });

        this.dotTargets.forEach((dot, index) => {
            const isActive = index === this.current;
            dot.classList.toggle('bg-green-600', isActive);
            dot.classList.toggle('text-white', isActive);
            dot.classList.toggle('bg-white/10', !isActive);
            dot.classList.toggle('text-white/60', !isActive);
        });
    }
}
