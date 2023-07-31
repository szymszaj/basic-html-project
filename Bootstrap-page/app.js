// const confettiContainer = document.createElement('div');
// confettiContainer.id = 'confettiContainer';
// document.body.appendChild(confettiContainer);

// document.getElementById('specialEffectsButton').addEventListener('click', () => {
//   createConfettiEffect();
// });

// function createConfettiEffect() {
//   for (let i = 0; i < 100; i++) {
//     const confetti = document.createElement('div');
//     confetti.classList.add('confetti');

//     const x = Math.random() * window.innerWidth;
//     const y = Math.random() * window.innerHeight;

//     confetti.style.left = `${x}px`;
//     confetti.style.top = `${y}px`;

//     confettiContainer.appendChild(confetti);

//     // Usuń konfetti po zakończeniu animacji
//     confetti.addEventListener('animationend', () => {
//       confettiContainer.removeChild(confetti);
//     });
//   }
// }

const confettiContainer = document.createElement('div');
confettiContainer.id = 'confettiContainer';
document.body.appendChild(confettiContainer);

document.querySelector('[data-bs-target="#enroll"]').addEventListener('click', () => {
  createConfettiEffect();
});

function createConfettiEffect() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    confetti.style.left = `${x}px`;
    confetti.style.top = `${y}px`;

    confettiContainer.appendChild(confetti);

    // Usuń konfetti po zakończeniu animacji
    confetti.addEventListener('animationend', () => {
      confettiContainer.removeChild(confetti);
    });
  }
}