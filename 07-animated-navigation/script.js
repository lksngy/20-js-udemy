const menuBars = document.querySelector('.menu-bars');
const nav = document.querySelector('nav');

function toggleChange () {
    for (let i=1; i<4; i++) {
    //console.log('change' + [i]);
    bar1.classList.toggle('change');
    }
}

function toggleMenu () {
    nav.classList.toggle('hide-menu');
    //go back to the top of the page
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

menuBars.addEventListener('click', toggleMenu);