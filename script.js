function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random")

moveRandom.addEventListener("mouseenter", function(e) {
    setTimeout(moveRandomEl(e.target), 50);
});

moveRandom.addEventListener('click', function(e) {
    setTimeout(moveRandomEl(e.target), 50);
});

moveRandom.addEventListener('touchstart', function(e) {
    setTimeout(moveRandomEl(e.target), 50);
});

function forceReflow() {
    moveRandom.style.display = "none";
    setTimeout(() => moveRandom.style.display = "block", 10);
}