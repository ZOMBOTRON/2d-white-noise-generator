const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const button = document.querySelector('button');

canvas.width = canvas.height = 50;

function getColor() {
  return Math.round(Math.random() * 100);
}

function generateNoise() {
  for (let y = 0; y < canvas.height; y++) {
    for (let x = 0; x < canvas.width; x++) {
      const cor = getColor();
      ctx.fillStyle = `hsl(0,0%,${cor}%)`;
      ctx.fillRect(x, y, 1, 1);
    }
  }
}

generateNoise();

button.addEventListener('click', generateNoise);
