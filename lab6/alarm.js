function startTimer() {
  const minInput = document.getElementById('min');
  const secInput = document.getElementById('sec');

  let seconds = +(minInput.value * 60) + +secInput.value;

  const timerId = setInterval(function () {
    if (seconds <= 0) {
      document.body.style.background = 'red';
      clearInterval(timerId);
    } else {
      seconds--;
      minInput.value = Math.floor(seconds / 60) ?? null;
      secInput.value = seconds % 60;
    }
  }, 1000);
}
