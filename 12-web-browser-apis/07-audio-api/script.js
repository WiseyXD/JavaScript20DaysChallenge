const audio = document.querySelector(".audio");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const stop = document.querySelector(".stop");
const currentTime = document.querySelector(".current-time");
const volume = document.querySelector("#volume");
play.addEventListener("click", () => {
	audio.play();
});

pause.addEventListener("click", () => {
	audio.pause();
});

stop.addEventListener("click", () => {
	audio.pause();
	audio.currentTime = 0;
});

volume.addEventListener("change", () => {
	audio.volume = volume.value;
});

audio.addEventListener("timeUpdate", () => {
	currentTime.innerHTML = `<p>${audio.currentTime} / ${audio.duration}</p>`;
});
