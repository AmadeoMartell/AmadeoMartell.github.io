const themeToggleButton = document.getElementById("theme-toggle");
const logo = document.getElementById("logo");

window.onload = () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        logo.src = "media/aitu-logo-dark.png";
    } else {
        document.body.classList.remove("dark-theme");
        logo.src = "media/aitu-logo.png";
    }
};

themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        logo.src = "media/aitu-logo-dark.png";
        localStorage.setItem("theme", "dark");
    } else {
        logo.src = "media/aitu-logo.png";
        localStorage.setItem("theme", "light");
    }
});