const menuBars = document.querySelector('.menu-bars');
const nav = document.querySelector('nav');



function toggleMenu () {
    nav.classList.toggle('hide-menu');
    menuBars.classList.toggle('change');
    //go back to the top of the page
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

menuBars.addEventListener('click', toggleMenu);