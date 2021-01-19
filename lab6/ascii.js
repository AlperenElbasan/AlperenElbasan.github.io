
async function startAnimation() {
  const ANIMATIONS = (await import('./animations.js')).default;
  switchButtonDisabled();

  const whichOne = document.getElementById('animation-selector').value;
  const animation = ANIMATIONS[whichOne];
  document.getElementById('animation-area').value = animation;
  const moves = animation.split('=====\n');
  let index = 0;
  document.getElementById('timer-id-container').value = setInterval(function () {
    if (index >= moves.length - 1) {
      index = 0;
    }
    document.getElementById('animation-area').value = moves[index++];
  }, 250);
}

async  function stopAnimation() {
  clearInterval(document.getElementById('timer-id-container').value);
  switchButtonDisabled();
  const ANIMATIONS = (await import('./animations.js')).default;
  const whichOne = 'JUGGLER';
  document.getElementById('animation-area').value = ANIMATIONS[whichOne];
}

function switchButtonDisabled() {
  const startButton = document.getElementById('start-button')
  const stopButton = document.getElementById('stop-button')
  startButton.disabled = !startButton.disabled;
  stopButton.disabled = !stopButton.disabled;
}
