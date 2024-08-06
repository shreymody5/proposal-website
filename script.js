document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const messageDiv = document.getElementById('message');
    const responseMessage = document.getElementById('responseMessage');
    const surpriseVideo = document.getElementById('surpriseVideo');
    
    yesBtn.addEventListener('click', () => {
        messageDiv.classList.remove('hidden');
        responseMessage.textContent = "I knew it!";
        surpriseVideo.classList.remove('hidden');
        playSong();
    });
    
    noBtn.addEventListener('click', () => {
        alert('Please think again!');
        noBtn.disabled = true;
    });
});

function playSong() {
    const audio = new Audio('romantic_song.mp3');
    audio.play();
}
