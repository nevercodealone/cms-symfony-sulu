import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['popup', 'item', 'counter'];

    connect() {
        this.current = 0;
        this.visibleNeighbors = 3;
        this.touchStartX = 0;
        this.touchStartY = 0;
    }

    open(event) {
        event.preventDefault();
        event.stopPropagation();

        this.current = Number(event.params.index) || 0;
        this.popupTarget.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
        document.documentElement.setAttribute('data-coverflow-open', '1');

        this.boundOnKeydown = (event) => this.onKeydown(event);
        window.addEventListener('keydown', this.boundOnKeydown);

        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.popupTarget.addEventListener('touchstart', this.onTouchStart, { passive: true });
        this.popupTarget.addEventListener('touchend', this.onTouchEnd, { passive: true });

        this.render();
    }

    close() {
        this.popupTarget.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
        document.documentElement.removeAttribute('data-coverflow-open');

        window.removeEventListener('keydown', this.boundOnKeydown);
        this.popupTarget.removeEventListener('touchstart', this.onTouchStart);
        this.popupTarget.removeEventListener('touchend', this.onTouchEnd);
    }

    backdropClose(event) {
        if (event.target === this.popupTarget || (this.hasStageTarget && event.target === this.stageTarget)) {
            this.close();
        }
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
        const count = this.itemTargets.length;
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
        event.stopPropagation();
        this.touchStartX = event.touches[0].clientX;
        this.touchStartY = event.touches[0].clientY;
    }

    onTouchEnd(event) {
        event.stopPropagation();
        const deltaX = event.changedTouches[0].clientX - this.touchStartX;
        const deltaY = event.changedTouches[0].clientY - this.touchStartY;

        if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX < 0) {
                this.next();
            } else {
                this.prev();
            }
        }
    }

    render() {
        const count = this.itemTargets.length;
        if (!count) {
            return;
        }

        this.itemTargets.forEach((item, index) => {
            let offset = index - this.current;
            if (offset > count / 2) {
                offset -= count;
            }
            if (offset < -count / 2) {
                offset += count;
            }

            const absOffset = Math.abs(offset);
            const visible = absOffset <= this.visibleNeighbors;

            item.style.opacity = visible ? String(Math.max(0.15, 1 - absOffset * 0.25)) : '0';
            item.style.pointerEvents = 'none';
            item.style.zIndex = String(100 - absOffset);

            let transform = 'translate(-50%, -50%)';
            if (offset === 0) {
                transform += ' translateX(0) translateZ(160px)';
            } else {
                const direction = offset > 0 ? 1 : -1;
                const distance = 55 + Math.min(absOffset, this.visibleNeighbors) * 12;
                transform += ` translateX(${direction * distance}%) translateZ(-260px) rotateY(${direction * 40}deg)`;
            }
            item.style.transform = transform;
        });

        if (this.hasCounterTarget) {
            this.counterTarget.textContent = `${this.current + 1} / ${count}`;
        }
    }
}
