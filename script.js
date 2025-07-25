document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const nextButtons = document.querySelectorAll('.next-btn');

    // Lock all but the first section at page load
    sections.forEach((section, idx) => {
        if (idx !== 0) {
            section.classList.add('locked');
        }
    });

    nextButtons.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            const nextSection = sections[idx + 1];
            if (nextSection) {
                nextSection.classList.remove('locked');
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
            btn.disabled = true; // disable current button to avoid repeated clicks
        });
    });
});
