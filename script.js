const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Event listener for window resizing
window.addEventListener('resize', resizeCanvas);

// Call resizeCanvas on load to set initial size
resizeCanvas();

const fontSize = 25;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#00ff00';
  ctx.font = `${fontSize}px monospace`;

  drops.forEach((y, x) => {
    const text = String.fromCharCode(0x30A0 + Math.random() * 96);
    ctx.fillText(text, x * fontSize, y * fontSize);

    drops[x] = y * fontSize > canvas.height && Math.random() > 0.95 ? 0 : y + 0.85;
  });

  setTimeout(() => requestAnimationFrame(drawMatrix), 60); // Slows down the effect
}

drawMatrix();