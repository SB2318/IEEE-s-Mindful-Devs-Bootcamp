
// A simple, minimal function to show toast notifications.
// It creates a toast element, adds it to the container, and removes it after a delay.
function showToast(message, type = 'success', duration = 3000) {
    const container = document.querySelector('.toast-container');
    if (!container) {
        console.error('Toast container not found!');
        return;
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;

    container.appendChild(toast);

    // Remove the toast after the specified duration
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.5s forwards';
        toast.addEventListener('animationend', () => {
            toast.remove();
        });
    }, duration);
}
