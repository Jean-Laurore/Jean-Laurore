// Get the dynamic PNG element
const dynamicPng = document.querySelector('.dynamic-png');

// Array of image sources with different color variations
const imageSources = [
  '/src/images/image-white.png',
  '/src/images/image-black.png',
  '/src/images/image-red.png',
];

let currentIndex = 0;

function changeImage() {
  dynamicPng.src = imageSources[currentIndex];
  currentIndex = (currentIndex + 1) % imageSources.length;
}

// Change the image every 2 seconds
setInterval(changeImage, 2000);
