console.log("💿");

// RANDOM SONG

window.onload = function () {
  chooseSomeone();
};

// RANDOM SONG
const people = [
  "jaouen",
  "lois",
  "lucas",
  "mathis",
  "michael",
  "romain",
  "sam",
];

function chooseSomeone() {
  const random = Math.floor(Math.random() * people.length);
  console.log(people[random]);
  face.src = "people/" + people[random] + ".png";
  audio.src = "people/" + people[random] + ".mp3";
}

//ENTER
const enter = document.getElementById("enter");
const cibleScreen = document.getElementById("cibleScreen");

function cibleOpen() {
  if (cibleScreen.classList.contains("cibleOpen")) {
    document.querySelector(".fond").style.display = "block";
    cibleScreen.classList.remove("cibleOpen");
    cible.style.height = "70%";
  } else {
    document.querySelector(".fond").style.display = "none";
    cibleScreen.classList.add("cibleOpen");
    cible.style.height = "100%";
  }
}
// enter.addEventListener("click", cibleOpen);

// PLAY AUDIO
const audio = document.getElementById("audio");
const cible = document.getElementById("cible");

var rotate = false;
var runner;
var degrees = 0;

function startRotating() {
  runner = setInterval(function () {
    degrees++;
    cible.style.transform = "rotate(" + degrees + "deg)";
  }, 50);
}

function stopRotating() {
  clearInterval(runner);
}

function playPauseAudio() {
  //   console.log(click);
  if (audio.paused) {
    cible.classList.add("cibleBounce");
    setTimeout(function () {
      cible.classList.remove("cibleBounce");
    }, 100);

    audio.play();
    startRotating();
  } else {
    cible.classList.add("cibleBounce");
    setTimeout(function () {
      cible.classList.remove("cibleBounce");
    }, 100);

    audio.pause();
    stopRotating();
  }
}

cible.addEventListener("click", playPauseAudio);

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    event.preventDefault();
    playPauseAudio();
  }
});
