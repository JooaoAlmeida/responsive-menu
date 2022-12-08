const btnMenu = document.querySelector('.menu');
const menu = document.querySelector('.menuList');
const l1 = document.querySelector('.-l1');
const l2 = document.querySelector('.-l2');
const l3 = document.querySelector('.-l3');
const page = document.querySelector('.main');
const prod = document.querySelector('#products');
const subList = document.querySelector('.subList');

let open = false;

function animateMenu() {
    menu.style.transform = open ? 'translateX(-200px)' : 'translateX(200px)';
    l1.style.transform = open ? 'rotate(45deg) translateY(11px)' : 'rotate(0deg)';
    l3.style.transform = open ? 'rotate(-45deg) translateY(-11px)' : 'rotate(0deg)';
    l2.style.opacity = open ? 0 : 1;
}

function toggleMenu() {
    open = !open
    animateMenu();
    if (open) {
        page.addEventListener('mouseover', toggleMenu)
        return;
    }
    page.removeEventListener('mouseover', toggleMenu);
}

btnMenu.addEventListener('click', toggleMenu)