function togglePlay(trackId) {
    const audio = document.getElementById(`audio-${trackId}`);
    const icon = document.getElementById(`icon-${trackId}`);
    const cover = document.getElementById(`cover-${trackId}`);
    
    if (audio.paused) {
        audio.play();
        icon.textContent = "⏸️";
        cover.style.opacity = "0.5";
    } else {
        audio.pause();
        icon.textContent = "▶️";
        cover.style.opacity = "1";
    }
}

document.querySelectorAll('audio').forEach(audio => {
    audio.addEventListener('ended', (event) => {
        const trackId = event.target.id.replace('audio-', '');
        const icon = document.getElementById(`icon-${trackId}`);
        const cover = document.getElementById(`cover-${trackId}`);

        icon.textContent = "▶️";
        cover.style.opacity = "1";
    });
});