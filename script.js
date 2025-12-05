// Переключение темы
const toggleBtn = document.querySelector('.toggle-btn');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    if (body.dataset.theme === 'dark') {
        body.dataset.theme = 'light';
    } else {
        body.dataset.theme = 'dark';
    }
});

// Плавный скролл меню
const navLinks = document.querySelectorAll('.topnav a');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetID = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Neon hover effect on nav links
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.textShadow = '0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff';
    });
    link.addEventListener('mouseout', () => {
        link.style.textShadow = '';
    });
});



