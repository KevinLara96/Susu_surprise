document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const nextButtons = document.querySelectorAll('.next-btn');
    const prevButtons = document.querySelectorAll('.prev-btn');

    // Lock all but the first section at page load
    sections.forEach((section, idx) => {
        if (idx !== 0) {
            section.classList.add('locked');
        }
    });

    // Handle "next" buttons
    nextButtons.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            const nextSection = sections[idx + 1];
            if (nextSection) {
                nextSection.classList.remove('locked');
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    prevButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const currentSection = btn.closest('.section');
            const prevSection = currentSection.previousElementSibling;

            if (prevSection && prevSection.classList.contains('section')) {
                prevSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });


    // Enable flip on tap (for mobile)
    const flipCards = document.querySelectorAll('.flip-card-inner');

    flipCards.forEach(card => {
        card.parentElement.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

});
