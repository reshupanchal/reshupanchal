const menu = document.querySelector('.menu');
const nav = document.querySelector('header nav');

// Mobile menu
if (menu && nav) {
    menu.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
}

// Close mobile menu after clicking navigation
document.querySelectorAll('header nav a').forEach(a => {
    a.addEventListener('click', () => {
        nav?.classList.remove('open');
    });
});

// Active navigation on scroll
const sections = [
    ...document.querySelectorAll('main section[id], #contact')
];

const links = [
    ...document.querySelectorAll(
        'header nav a[href^="#"]:not(.hire)'
    )
];

window.addEventListener('scroll', () => {
    let current = 'home';

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 130) {
            current = section.id;
        }
    });

    links.forEach(link => {
        link.classList.toggle(
            'active',
            link.getAttribute('href') === '#' + current
        );
    });
});