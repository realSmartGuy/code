const ball = document.getElementById("ball") // you need to have a div with ID of ball in your body
document.addEventListener("keydown", handleKeyPress)
let position = 0;

function handleKeyPress(e) {
    if (e.code === "ArrowLeft") {
        position = position -30;
    }
    if (e.code === "ArrowRight") {
        position = position +30;
    }
    if (position <0) {
        position = 0;
    }
    refresh();
}

function refresh() {
    ball.style.top = position + "px"
}