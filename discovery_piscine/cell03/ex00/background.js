const button = document.getElementById("button");

button.addEventListener("click", function() {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + color;
});