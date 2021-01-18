

async function startAnimation() {
  const ANIMATIONS = (await import('./animations.js')).default;
  const startButton = document.getElementById('start-button')
  const stopButton = document.getElementById('stop-button')
  startButton.disabled = true;
  stopButton.disabled = false;
  const whichOne = 'JUGGLER';
  document.getElementById('animation-area').value = ANIMATIONS[whichOne];
}

function stopAnimation() {
  const startButton = document.getElementById('start-button')
  const stopButton = document.getElementById('stop-button')
  startButton.disabled = false;
  stopButton.disabled = true;
}
