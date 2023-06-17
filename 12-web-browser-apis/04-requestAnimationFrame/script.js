let start;
let done = false;
function step(timestamp) {
	if (start === undefined) {
		start = timestamp;
	}

	let elapsed = timestamp - start;

	if (elapsed > 5000) {
		done = true;
	}

	if (done) {
		return;
	}

	const img = document.querySelector("img");
	img.style.transform = `translateX(${elapsed / 20}px) translateY(${
		elapsed / 20
	}px) rotate(${elapsed / 5}deg)`;
	requestAnimationFrame(step);
}

requestAnimationFrame(step);
