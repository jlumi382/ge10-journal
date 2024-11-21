document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('img').forEach(image => {
        image.addEventListener('contextmenu', (event) => {
            event.preventDefault(); // Prevent the context menu
        });
    });
});