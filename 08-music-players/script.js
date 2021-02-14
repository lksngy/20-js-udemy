console.log('ahoj');

const previous = document.querySelector('.back');
const btnPlay = document.querySelector('#btnPlay');
const btnPause = document.querySelector('#btnPause');
const forward = document.querySelector('.forward');

function changePlay () {
    console.log('button changed');
    btnPause.classList.toggle('hidden');
    btnPlay.classList.toggle('hidden');

}

btnPlay.addEventListener('click', changePlay);
btnPause.addEventListener('click', changePlay);