let imageIndex = 0;
const images = [
    'bagas.jpg',
    'onny.jpg',
    'ajus.jpg'
];

function changeImage() {
    imageIndex = (imageIndex + 1) % images.length;
    document.getElementById('main-image').src = images[imageIndex];
}
