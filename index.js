function addNotification() {
  console.log('Я учу JavaScript!');
  return;
}

addNotification();

const image = document.getElementById('image');
console.log(image);

function showNextImage() {
  image.src = './image2.png';
}
function showPrevImage() {
  image.src = './2136.jpg';
}
