function moveNoButton() {
    const noButton = document.querySelector('.no-btn');
    noButton.style.position = 'absolute';
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 50);
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

function showCelebration() {
    const overlay = document.querySelector('.celebration-overlay');
    overlay.style.display = 'flex';

    const balloons = document.querySelector('.balloons');
    for (let i = 0; i < 50; i++) { // More balloons
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDelay = `${Math.random() * 5}s`;
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        balloons.appendChild(balloon);
    }

    const confettiContainer = document.querySelector('.confetti-container');
    for (let i = 0; i < 150; i++) { // More confetti for intense effect
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
        confettiContainer.appendChild(confetti);
    }
}
