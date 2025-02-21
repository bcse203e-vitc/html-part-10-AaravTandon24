document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById('textInput');
    const charCountSpan = document.getElementById('charCount');
    const wordCountSpan = document.getElementById('wordCount');
    const warningMessage = document.getElementById('warningMessage');

    textInput.addEventListener('input', () => {
        const text = textInput.value;

        const charCount = text.length;
        charCountSpan.textContent = charCount;

        const words = text.trim().split(/\s+/).filter(word => word.length > 0);
        const wordCount = words.length;
        wordCountSpan.textContent = wordCount;

        if (charCount > 200) {
            warningMessage.style.display = 'block';
        } else {
            warningMessage.style.display = 'none';
        }
    });
});
