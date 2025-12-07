/* ========================= THEME SWITCH ========================= */
const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
    const html = document.documentElement;

    if (html.getAttribute("data-theme") === "dark") {
        html.setAttribute("data-theme", "light");
        themeBtn.textContent = "☀️";
    } else {
        html.setAttribute("data-theme", "dark");
        themeBtn.textContent = "🌙";
    }
});

/* ========================= SECTION SWITCHER ========================= */
function openSection(id) {
    document.querySelectorAll(".section").forEach(sec => {
        sec.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}

/* ========================= FILE DOWNLOAD ========================= */
function download(fileName) {
    window.location.href = "files/" + fileName;
}

/* ========================= REMOVE LOADER ========================= */
window.onload = () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2400);
};
