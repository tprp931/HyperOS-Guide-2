const themeBtn = document.getElementById("themeToggle");

themeBtn.onclick = () => {
    const html = document.documentElement;
    if (html.dataset.theme === "dark") {
        html.dataset.theme = "light";
        themeBtn.textContent = "☀️";
    } else {
        html.dataset.theme = "dark";
        themeBtn.textContent = "🌙";
    }
};

function openSection(id) {
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

function download(file) {
    window.location.href = "files/" + file;
}

window.onload = () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2000);
};
