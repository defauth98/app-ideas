const html = {
  one: document.querySelector('#one'),
  two: document.querySelector('#two'),
  three: document.querySelector('#three'),
  four: document.querySelector('#four'),
  leftButton: document.querySelectorAll('.left'),
  downButton: document.querySelectorAll('.down'),
  rightButton: document.querySelectorAll('.right'),
  upButton: document.querySelectorAll('.up'),
  urlInput: document.querySelector('#image-url'),
  displayButton: document.querySelector('#display-button'),
  image: document.querySelectorAll('.image'),
};

const leftButtons = html.leftButton;
const downButtons = html.downButton;
const rightButtons = html.rightButton;
const upButtons = html.upButton;
const displayButton = html.displayButton;

function rotateImage(imageClass, degs) {
  const image = html[imageClass];

  image.style.transform = `rotate(${degs}deg)`;
}

function findImageClass(button) {
  const imageClass = button.className.split(' ')[1];

  return imageClass;
}

function verificarStatusImagem(imageUrl) {
  let img = new Image();

  img.src = imageUrl;

  if (img.height > 0) alert('Url inválida');

  return;
}

function changeImage() {
  const url = html.urlInput.value;

  verificarStatusImagem(url);

  html.image.forEach((image) => (image.src = url));
}

leftButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const imageName = findImageClass(button);

    rotateImage(imageName, 90);
  });
});

downButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const imageName = findImageClass(button);

    rotateImage(imageName, 180);
  });
});

rightButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const imageName = findImageClass(button);

    rotateImage(imageName, 270);
  });
});

upButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const imageName = findImageClass(button);

    rotateImage(imageName, 360);
  });
});

displayButton.addEventListener('click', changeImage);
