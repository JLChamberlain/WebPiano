//To Stop the previous audio if another key is pressed
window.addEventListener("play", function (evt) {
    if (window.$_currentlyPlaying) {
        window.$_currentlyPlaying.pause();
    }
}, true);