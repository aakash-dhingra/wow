function moveNoButton() {
  const noButton = document.querySelector('.no-btn');
  noButton.style.position = 'absolute';
  const randomX = Math.random() * (window.innerWidth - 100);
  const randomY = Math.random() * (window.innerHeight - 50);
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

document.querySelector('.yes-btn').addEventListener('click', function () {
  const celebrationOverlay = document.querySelector('.celebration-overlay');
  celebrationOverlay.style.display = 'flex';

  // Add balloons
  const balloons = document.querySelector('.balloons');
  for (let i = 0; i < 10; i++) {
      const balloon = document.createElement('div');
      balloon.className = 'balloon';
      balloon.style.left = Math.random() * 100 + 'vw';
      balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
      balloons.appendChild(balloon);
  }

  // Add confetti
  const confettiContainer = document.querySelector('.confetti-container');
  for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
      confettiContainer.appendChild(confetti);
  }

  setTimeout(function () {
      celebrationOverlay.style.display = 'none';
      balloons.innerHTML = '';
      confettiContainer.innerHTML = '';
  }, 5000); // Duration of celebration
});

function goToNextPage() {
  // Navigate to Page 2
  window.location.href = "date.html";
}
