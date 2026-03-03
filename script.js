document.addEventListener("DOMContentLoaded", () => {
    const logoLetters = document.querySelectorAll('#logo span');
    const exploreBtn = document.getElementById('exploreBtn');

    // Show explore button after logo + tagline
    setTimeout(() => {
        exploreBtn.classList.add('show-button');
    }, 3200);

    // Hover animation for letters
    logoLetters.forEach(letter => {
        letter.addEventListener('mouseenter', () => {
            letter.style.transition = 'transform 0.3s ease';
            letter.style.transform = 'scale(1.3) translateY(-5px)';
            setTimeout(() => { letter.style.transform = ''; }, 300);
        });
    });

    // Explore button click
    exploreBtn.addEventListener('click', () => {
        exploreBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            exploreBtn.style.transform = '';
            window.open('https://myfluno.wixsite.com/fluno-1', '_blank');
        }, 150);
    });
});
