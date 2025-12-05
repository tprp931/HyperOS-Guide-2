// THEME TOGGLE + AUTO
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
if(window.matchMedia('(prefers-color-scheme: light)').matches){
    html.setAttribute('data-theme','light'); themeToggle.textContent = '☀️';
}
themeToggle.addEventListener('click', ()=>{
    const current = html.getAttribute('data-theme')||'dark';
    const next = current==='dark'?'light':'dark';
    html.setAttribute('data-theme',next);
    themeToggle.textContent = next==='dark'?'🌙':'☀️';
});

// REVEAL ON SCROLL
const reveals = document.querySelectorAll('.fade');
const revealOnScroll = ()=>{
    const windowH = window.innerHeight;
    reveals.forEach(el=>{
        const rect = el.getBoundingClientRect();
        if(rect.top<windowH-60){ el.style.opacity=1; el.style.transform='translateY(0)'; }
    });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load',()=>{
    reveals.forEach(el=>{
        el.style.opacity=0;
        el.style.transform='translateY(18px)';
        el.style.transition='opacity 0.6s ease, transform 0.6s ease';
    });
    revealOnScroll();
});

// SCROLL TOP BUTTON
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll',()=>{scrollBtn.style.display=window.scrollY>300?'block':'none';});
scrollBtn.addEventListener('click',()=>{window.scrollTo({top:0, behavior:'smooth'});});

// BURGER MENU
const burgerBtn = document.getElementById('burgerBtn');
const nav = document.querySelector('.topnav');
burgerBtn.addEventListener('click',()=>{nav.classList.toggle('active');});

// ACTIVE NAV LINK
const navLinks = document.querySelectorAll('.topnav a');
const sections = Array.from(navLinks).map(a=>document.querySelector(a.getAttribute('href')));
const highlight=()=>{
    const pos = window.scrollY+120;
    sections.forEach((sec,i)=>{
        if(!sec) return;
        const top = sec.offsetTop, bottom=top+sec.offsetHeight;
        if(pos>=top && pos<bottom){ navLinks.forEach(n=>n.classList.remove('active')); navLinks[i].classList.add('active'); }
    });
};
window.addEventListener('scroll',highlight);
window.addEventListener('load',highlight);
