function showMoreBhajans() {
    document.getElementById("more-bhajans").style.display = "block";
}
// Get all audio elements
const audios = document.querySelectorAll(".bhajan-audio");

audios.forEach(audio => {
    audio.addEventListener("play", function() {

        audios.forEach(otherAudio => {
            if (otherAudio !== audio) {
                otherAudio.pause();
                otherAudio.currentTime = 0;
            }
        });

    });
});