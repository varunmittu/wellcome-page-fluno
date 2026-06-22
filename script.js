document.addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById('logo');
    const logoImage = document.getElementById('logoImage');
    const brandDescription = document.getElementById('brandDescription');
    const exploreBtn = document.getElementById('exploreBtn');

    setTimeout(() => {
        exploreBtn.classList.add('show-button');
    }, 3200);

    logoImage.addEventListener('mouseenter', () => {
        logoImage.style.animation = 'none';
        setTimeout(() => {
            logoImage.style.animation = '';
        }, 10);
    });

    exploreBtn.addEventListener('click', (e) => {
        exploreBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            exploreBtn.style.transform = '';
        }, 150);
    });

    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
    });
});
