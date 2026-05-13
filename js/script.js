const mobileToggle = document.getElementById('mobileToggle');
const menu = document.getElementById('menu');

mobileToggle.addEventListener('click', () => {
    const opened = menu.style.display === 'flex';
    if (opened) {
        menu.style.display = '';
        mobileToggle.textContent = '☰';
    } else {
        menu.style.display = 'flex';
        menu.style.position = 'absolute';
        menu.style.top = '82px';
        menu.style.right = '16px';
        menu.style.flexDirection = 'column';
        menu.style.padding = '18px';
        menu.style.background = 'rgba(255,255,255,.98)';
        menu.style.border = '1px solid rgba(0,0,0,.06)';
        menu.style.borderRadius = '20px';
        menu.style.boxShadow = '0 18px 40px rgba(0,0,0,.12)';
        mobileToggle.textContent = '✕';
    }
});