// toggle theme
function toggleTheme() {
    const root = document.getElementById('app');
    const current = root.getAttribute('data-theme') || 'light';
    root.setAttribute('data-theme', current === 'light' ? 'dark' : 'light');
    // update button label
    document.getElementById('themeBtn').textContent = current === 'light' ? 'Light theme' : 'Dark theme';
}

// accessibility: match prefers-color-scheme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.getElementById('app').setAttribute('data-theme', 'light');
    document.getElementById('themeBtn').textContent = 'Dark theme';
} else {
    document.getElementById('themeBtn').textContent = 'Toggle theme';
}