// THIS WORKS ONLY IN GOOGLE CHROME

console.log('frenchie!');

const video = document.querySelector('#video');
const button = document.querySelector('.button');

// select media stream, then pass to video element, then play

async function selectStream () {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = mediaStream;
        video.onloadedmetadata = () => {
            video.play();
        }
    } catch (error) {
        console.log('whoops, error in selectStream function', error)
    }
}

button.addEventListener('click', async () => {
    button.disabled = true;
    await video.requestPictureInPicture();
    button.disabled = false;
})

selectStream();