const faceColor = document.querySelector("#face-color");
const borderColor = document.querySelector("#border-color");
const numberLineColor = document.querySelector("#line-color");
const largeHand = document.querySelector("#large-hand-color");
const secondHandcolor = document.querySelector("#second-hand-color");

localStorage.setItem("faceColor", faceColor.value);
localStorage.setItem("borderColor", borderColor.value);
localStorage.setItem("numberLineColor", numberLineColor.value);
localStorage.setItem("largeHand ", largeHand.value);
localStorage.setItem("secondHandcolor", secondHandcolor.value);

faceColor.addEventListener("change", function () {
	localStorage.setItem("faceColor", this.value);
});

borderColor.addEventListener("change", function () {
	localStorage.setItem("borderColor", this.value);
});

numberLineColor.addEventListener("change", function () {
	localStorage.setItem("numberLineColor", this.value);
});

largeHand.addEventListener("change", function () {
	localStorage.setItem("largeHand", this.value);
});

secondHandcolor.addEventListener("change", function () {
	localStorage.setItem("secondHandcolor", this.value);
});

function clock() {
	const now = new Date();
	const canvas = document.getElementById("canvas");
	const ctx = canvas.getContext("2d");

	// Setup canvas
	ctx.save(); // save the default state
	ctx.clearRect(0, 0, 500, 500);
	ctx.translate(250, 250); // Put 0,0 in the middle
	ctx.rotate(-Math.PI / 2); // Rotate clock -90deg

	// Set default styles
	ctx.strokeStyle = "#000000";
	ctx.fillStyle = "#f4f4f4";
	ctx.lineWidth = 5;
	ctx.lineCap = "round";

	// Draw clock face/border
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth = 14;
	ctx.strokeStyle = borderColor.value;
	ctx.fillStyle = faceColor.value;
	ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
	ctx.stroke();
	ctx.fill();
	ctx.restore();

	// Draw hour lines
	ctx.save();
	for (let i = 0; i < 12; i++) {
		ctx.beginPath();
		ctx.rotate(Math.PI / 6);
		ctx.moveTo(100, 0);
		ctx.lineTo(120, 0);
		ctx.strokeStyle = numberLineColor.value;
		ctx.stroke();
	}
	ctx.restore();

	// Draw minute lines
	ctx.save();
	ctx.lineWidth = 4;
	for (let i = 0; i < 60; i++) {
		if (i % 5 !== 0) {
			ctx.beginPath();
			ctx.moveTo(117, 0);
			ctx.lineTo(120, 0);
			ctx.strokeStyle = numberLineColor.value;
			ctx.stroke();
		}
		ctx.rotate(Math.PI / 30);
	}
	ctx.restore();

	// Get current time
	const hr = now.getHours() % 12;
	const min = now.getMinutes();
	const sec = now.getSeconds();

	// console.log(`${hr}:${min}:${sec}`);

	// Draw hour hand
	ctx.save();
	ctx.rotate(
		(Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec
	);
	ctx.strokeStyle = largeHand.value;
	ctx.lineWidth = 14;
	ctx.beginPath();
	ctx.moveTo(-20, 0);
	ctx.lineTo(80, 0);
	ctx.stroke();
	ctx.restore();

	// Draw min hand
	ctx.save();
	ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
	ctx.strokeStyle = largeHand.value;
	ctx.lineWidth = 10;
	ctx.beginPath();
	ctx.moveTo(-28, 0);
	ctx.lineTo(112, 0);
	ctx.stroke();
	ctx.restore();

	// Draw sec hand
	ctx.save();
	ctx.rotate((sec * Math.PI) / 30);
	ctx.strokeStyle = secondHandcolor.value;
	ctx.fillStyle = secondHandcolor.value;
	ctx.lineWidth = 6;
	ctx.beginPath();
	ctx.moveTo(-30, 0);
	ctx.lineTo(100, 0);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
	ctx.fill();
	ctx.restore();

	ctx.restore(); // restore default state

	requestAnimationFrame(clock);
}

requestAnimationFrame(clock);

const saveButton = document.querySelector("#save-btn");
saveButton.addEventListener("click", () => {
	const dataURL = canvas.toDataURL("image/png");
	const link = document.createElement("a");
	link.download = "clock.png";
	link.href = dataURL;
	link.click();
});
