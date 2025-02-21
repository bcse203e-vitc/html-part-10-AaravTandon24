const lightModeBtn = document.getElementById("lightModeBtn");
const darkModeBtn = document.getElementById("darkModeBtn");
const body = document.body;

lightModeBtn.addEventListener("click", () => {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    updateStyles("light");
});

darkModeBtn.addEventListener("click", () => {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    updateStyles("dark");
});

function updateStyles(theme) {
    if (theme === "light") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        body.style.fontSize = "16px";
    } else if (theme === "dark") {
        body.style.backgroundColor = "#333";
        body.style.color = "white";
        body.style.fontSize = "18px";
    }
}
