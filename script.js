function removeTransition(e) {
  if (e.propertyName !== "background-color") return;
  this.classList.remove("playing");
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const beat = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  beat.classList.add("playing");
  audio.currentTime = 0; // Starts audio from beginning
  audio.play();
}

const beats = Array.from(document.querySelectorAll(".beat"));
beats.forEach(beat => beat.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
