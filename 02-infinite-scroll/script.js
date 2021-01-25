// get ID or class from index.html where to put new picture - getelementbyid
const getAddPicture = document.getElementById('image-container');
const loader = document.getElementById('loader');

photosArray = [];

// Helper function

// Create elements for links, photos, add to DOM

function displayPhotos(photo) {
    photosArray.forEach((photo) => {
        // Create <a> to link to unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // Create <img for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
        item.appendChild(img);
        getAddPicture.appendChild(item);

    });
    
    
}

// function Fetch picture(s) from unsplash API
// https://source.unsplash.com/random /800x800


const count = 10;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=bcd45yySEi-_qos0fuA65t5QLPtMBqQcGdFCcDLke0c&count=${count}`;

async function getPicture() { 
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        console.log(photosArray);
        displayPhotos();

    } catch (error) {
        console.log('ups!', error);
    }
}   


getPicture();

// function check the place on the page and then... - some kind of event listener?

// function start loading new picture once the scroll is down

// function to push new loaded picture into index.html