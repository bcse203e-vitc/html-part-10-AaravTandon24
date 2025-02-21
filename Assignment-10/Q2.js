const redButton = document.getElementById("redButton");
const blueButton = document.getElementById("blueButton");

redButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "red";
});

blueButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "blue";
});
