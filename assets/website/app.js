import './styles/app.css';
import './bootstrap';
import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.data('clipboardBlock', () => ({
  copied: false,
  copyCode() {
    const codeBlock = this.$refs.codeBlock;
    const codeText = codeBlock.textContent;

    navigator.clipboard.writeText(codeText).then(() => {
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }
}))

Alpine.start()
