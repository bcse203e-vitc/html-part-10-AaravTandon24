document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.image');

    images.forEach(image => {
        image.addEventListener('click', () => {
            images.forEach(img => img.style.zIndex = 1);

            image.style.zIndex = 10;
        });
    });
});
