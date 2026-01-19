const bodyElement = document.getElementById('body');
bodyElement.style.overflow = 'hidden';

window.addEventListener('load', () => {
    const loader = document.getElementById('loading-spinner');
    
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
        bodyElement.style.overflow = 'auto';
        bodyElement.style.overflowX = 'hidden';
    }, 500);

    AOS.init({
        duration: 600,
        once: true,
        offset: 50,
        mirror: false,
        anchorPlacement: 'top-bottom'
    });
    AOS.refresh();
});

const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const navbar = document.getElementById('navbar');

const closeMenu = () => {
    navbar.classList.remove('active');
    bodyElement.style.overflow = 'auto';
    bodyElement.style.overflowX = 'hidden';
};

menuOpen.onclick = () => {
    navbar.classList.add('active');
    bodyElement.style.overflow = 'hidden';
};

menuClose.onclick = closeMenu;

document.querySelectorAll('nav a').forEach(link => {
    link.onclick = closeMenu;
});

window.addEventListener('scroll', () => {
    const img = document.querySelector('.profile-img');
    const scrollPosition = window.scrollY;
    
    let grayscaleValue = 1 - (scrollPosition / 500);
    
    if (grayscaleValue < 0) grayscaleValue = 0;
    if (grayscaleValue > 1) grayscaleValue = 1;
    
    if (img) {
        img.style.filter = `grayscale(${grayscaleValue})`;
    }
});