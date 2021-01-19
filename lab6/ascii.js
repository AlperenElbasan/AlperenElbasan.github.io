let timerId = null;

function startAnimation() {
  switchButtonsDisabled();
  const animationSelector = document.getElementById('animation-selector');
  const animation = ANIMATIONS[animationSelector.value];
  document.getElementById('animation-area').value = animation;
  const moves = animation.split('=====\n');
  let index = 0;
  timerId = setInterval(function () {
    if (index > moves.length - 1)
      index = 0;
    document.getElementById('animation-area').value = moves[index++];
  }, 250);
}

async  function stopAnimation() {
  clearInterval(timerId);
  switchButtonsDisabled();
  const animationSelector = document.getElementById('animation-selector');
  document.getElementById('animation-area').value = ANIMATIONS[animationSelector.value];
}

function switchButtonsDisabled() {
  const startButton = document.getElementById('start-button');
  const stopButton = document.getElementById('stop-button');
  const animationSelector = document.getElementById('animation-selector');
  startButton.disabled = !startButton.disabled;
  stopButton.disabled = !stopButton.disabled;
  animationSelector.disabled = !animationSelector.disabled;
}
