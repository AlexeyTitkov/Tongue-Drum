const playSound = (e) => {
  const button = document.querySelector(`button[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!audio) return;
  button.classList.add("transform");
  audio.currentTime = 0;
  audio.play();

  console.log("BOOM");
};

window.addEventListener("keydown", playSound);
