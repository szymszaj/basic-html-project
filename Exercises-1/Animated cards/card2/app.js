const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        cards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.style.opacity = 0;
            }
        });
    });

    card.addEventListener('mouseout', () => {
        cards.forEach(otherCard => {
            otherCard.style.opacity = 1;
        });
    });
});