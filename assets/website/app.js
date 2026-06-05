import "./styles/app.css";
import './bootstrap.js';
import { initCarousels } from 'flowbite';
import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.data("clipboardBlock", () => ({
  copied: false,
  copyCode() {
    const codeBlock = this.$refs.codeBlock;
    const codeText = codeBlock.textContent;

    navigator.clipboard
      .writeText(codeText)
      .then(() => {
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  },
}));

Alpine.start();

document.addEventListener('input', function(e) {
    if (e.target.id === 'contact-message') {
        var len = e.target.value.length;
        var max = parseInt(e.target.getAttribute('maxlength') || '0', 10);
        var counter = document.getElementById('msg-counter');
        if (counter) {
            counter.textContent = len + ' / ' + max;
            counter.className = len > max ? 'text-red-500' : len > max * 0.83 ? 'text-amber-500' : 'text-gray-400';
        }
    }
});

document.addEventListener('blur', function(e) {
    if (e.target.id === 'contact-email' && e.target.value.length > 0) {
        var hint = document.getElementById('email-hint');
        if (hint) {
            hint.classList.toggle('hidden', e.target.checkValidity());
        }
    }
}, true);

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    initCarousels();
  }, 100);
});
