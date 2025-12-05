// ==============================
// ТЁМНАЯ / СВЕТЛАЯ ТЕМА
// ==============================

const themeToggle = document.createElement('button');
themeToggle.classList.add('toggle-btn');
themeToggle.textContent = '🌓 Сменить тему';
document.body.prepend(themeToggle);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'light') {
        document.body.setAttribute('data-theme', 'dark');
    } else {
        document.body.setAttribute('data-theme', 'light');
    }
});

// ==============================
// КНОПКА "НАВЕРХ"
// ==============================

const scrollTopBtn = document.createElement('button');
scrollTopBtn.id = 'scrollTopBtn';
scrollTopBtn.textContent = '⬆';
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// ==============================
// ПЛАВНЫЕ АНИМАЦИИ ПРИ НАВЕДЕНИИ
// ==============================

document.querySelectorAll('.tool-card, .card, .download-btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.transform = 'translateY(-5px)';
    });
    el.addEventListener('mouseleave', () => {
        el.style.transform = 'translateY(0)';
    });
});

