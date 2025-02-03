document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio");
    const playButton = document.getElementById("play");
    const pauseButton = document.getElementById("pause");
    const currentSong = document.getElementById("current-song");

    
    const songTitle = "Ishq Hua 2024";

    
    playButton.addEventListener("click", () => {
        audio.play();
        currentSong.textContent = `Now Playing: ${songTitle}`;
    });

    
    pauseButton.addEventListener("click", () => {
        audio.pause();
        currentSong.textContent = `Now Playing: Paused`;
    });
});


