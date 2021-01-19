let timerId = null;
let index = 0;
let moves = [];

function startAnimation() {
  switchButtonsDisabled();
  const animationSelector = document.getElementById('animation-selector');
  const animation = ANIMATIONS[animationSelector.value];
  document.getElementById('animation-area').value = animation;
  moves = animation.split('=====\n');
  index = 0;
  startAnimationInterval();
}

function startAnimationInterval( ) {
  timerId = setInterval(function () {
    if (index > moves.length - 1)
      index = 0;
    document.getElementById('animation-area').value = moves[index++];
  }, document.getElementById('speed-selector').checked ? 50 : 250);
}

function changeSpeed() {
   clearInterval(timerId);
   startAnimationInterval();
}

function stopAnimation() {
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

function changeSize() {
  document.getElementById('animation-area').style.fontSize = document.getElementById('size-selector').value;
}
