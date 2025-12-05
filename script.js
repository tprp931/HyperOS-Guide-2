// Переключение темы
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    const html = document.documentElement;
    const dark = html.getAttribute("data-theme") === "dark";
    html.setAttribute("data-theme", dark ? "light" : "dark");
    themeToggle.textContent = dark ? "🌙" : "☀️";
});

// Плавный скролл
document.querySelectorAll('.topnav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.getElementById(link.getAttribute('href').substring(1));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Анимация появления карточек
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));


