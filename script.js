let currentBackgroundIndex = 1; // Initial background image index
let x = 0;
let y = 0;
let xSpeed = 2;
let ySpeed = 2;

function getRandomBackgroundImage() {
  return `url('background-${currentBackgroundIndex}.jpg')`;
}

function moveLogo() {
  x += xSpeed;
  y += ySpeed;

  const windowWidth = window.innerWidth - 120; // Consider the logo width
  const windowHeight = window.innerHeight - 120; // Consider the logo height

  if (x >= windowWidth || x <= 0) {
    xSpeed = -xSpeed;
    x += xSpeed;
    currentBackgroundIndex = (currentBackgroundIndex % 4) + 1; // Loop between 1 to 4
    document.body.style.backgroundImage = getRandomBackgroundImage();
  }
  if (y >= windowHeight || y <= 0) {
    ySpeed = -ySpeed;
    y += ySpeed;
    currentBackgroundIndex = (currentBackgroundIndex % 4) + 1; // Loop between 1 to 4
    document.body.style.backgroundImage = getRandomBackgroundImage();
  }

  const dvdLogo = document.querySelector('.dvd-logo');
  dvdLogo.style.left = x + 'px';
  dvdLogo.style.top = y + 'px';

  requestAnimationFrame(moveLogo);
}

moveLogo();
