const playSound = (e) => {
  const button = document.querySelector(`button[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!audio) return;
  button.classList.add("transform");
  audio.currentTime = 0;
  audio.play();
};

window.addEventListener("keydown", playSound);

const removeTransition = (e) => {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("transform");
};

const keys = document.querySelectorAll("button");

keys.forEach((el) => el.addEventListener("transitionend", removeTransition));

const playClickSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.target.getAttribute("data-key")}"]`);

  if (!audio) return;
  e.target.classList.add("transform");
  audio.currentTime = 0;
  audio.play();
};

keys.forEach((el) => el.addEventListener("click", playClickSound));
