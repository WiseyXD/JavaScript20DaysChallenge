const video = document.querySelector("#video");
const play = document.querySelector("#play");
const stop = document.querySelector("#stop");
const progressBar = document.querySelector(".progress");
const timeStamp = document.querySelector(".timestamp");

function isPlaying() {
	if (document.querySelector(".activeButton").classList.contains("fa-play")) {
		document.querySelector(".activeButton").classList.remove("fa-play");
		document.querySelector(".activeButton").classList.add("fa-pause");
		video.play();
	} else {
		document.querySelector(".activeButton").classList.remove("fa-pause");
		document.querySelector(".activeButton").classList.add("fa-play");
		video.pause();
	}
}

play.addEventListener("click", isPlaying);

stop.addEventListener("click", () => {
	video.pause();
	video.currentTime = 0;
	document.querySelector(".activeButton").classList.remove("fa-pause");
	document.querySelector(".activeButton").classList.add("fa-play");
});

video.addEventListener("timeupdate", () => {
	timeStamp.innerText = video.currentTime.toFixed(2);
	progressBar.value = (video.currentTime / video.duration) * 100;
});

progressBar.addEventListener("click", () => {
	video.currentTime = (parseInt(progressBar.value) * video.duration) / 100;
});
