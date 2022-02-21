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
  if (e.propertyName !== "transform")return;
     e.target.classList.remove("transform");
     console.log(e.propertyName);
};

const keys = document.querySelectorAll("button");

keys.forEach((el) => el.addEventListener("transitionend", removeTransition));
