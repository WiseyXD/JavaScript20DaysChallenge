const title = document.getElementById("title");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const musicContainer = document.getElementById("music-container");
const prev = document.getElementById("prev");
const play = document.getElementById("play");
const next = document.getElementById("next");

const songs = ["hey", "summer", "ukulele"];

let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song) {
	title.innerHTML = `<strong>${song}</strong>`;
	cover.src = `images/${song}.jpg`;
	audio.src = `music/${song}.mp3`;
}

function playSong() {
	musicContainer.classList.add("play");
	const i = document.querySelector(".activeButton");
	if (i.classList.contains("fa-play")) {
		i.classList.replace("fa-play", "fa-pause");
	}
	audio.play();
}

function pauseSong() {
	musicContainer.classList.remove("play");
	const i = document.querySelector(".activeButton");
	if (i.classList.contains("fa-pause")) {
		i.classList.replace("fa-pause", "fa-play");
	}
	audio.pause();
}

function nextSong() {
	if (songIndex === songs.length - 1) {
		songIndex = 0;
	}
	songIndex++;
	loadSong(songs[songIndex]);
	audio.play();
	playSong();
}

function prevSong() {
	if (songIndex === 0) {
		songIndex = songs.length - 1;
	}
	songIndex--;
	loadSong(songs[songIndex]);
	audio.play();
	playSong();
}

function updateProgress(e) {
	const { duration, currentTime } = e.srcElement;
	const progressPercent = (currentTime / duration) * 100;
	progress.style.width = `${progressPercent}%`;
}

play.addEventListener("click", () => {
	const isPlaying = musicContainer.classList.contains("play");
	if (isPlaying) {
		pauseSong();
	} else {
		playSong();
	}
});

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

audio.addEventListener("timeupdate", updateProgress);
