function clock() {
	const canvas = document.querySelector("canvas");
	const ctx = canvas.getContext("2d");
	const now = new Date();
	ctx.save();

	// Setup Canvas
	ctx.clearRect(0, 0, 500, 500);
	ctx.translate(250, 250);
	ctx.rotate(-Math.PI / 2);

	// Setup default styles
	ctx.strokeStyle = "black";
	ctx.fillStyle = "#f4f4f4";
	ctx.lineWidth = 5;
	ctx.lineCap = "round";

	// Draw Circle
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth = 13;
	ctx.strokeStyle = "red";
	ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
	ctx.stroke();
	ctx.restore();

	// Draw Hour Marks
	ctx.save();
	for (let i = 0; i < 12; i++) {
		ctx.beginPath();
		ctx.rotate(Math.PI / 6);
		ctx.moveTo(100, 0);
		ctx.lineTo(120, 0);
		ctx.stroke();
	}
	ctx.restore();

	// Draw Minute Marks
	ctx.save();
	for (let i = 0; i < 60; i++) {
		if (i % 5 !== 0) {
			ctx.beginPath();
			ctx.lineWidth = 3;
			ctx.moveTo(100, 0);
			ctx.lineTo(110, 0);
			ctx.stroke();
		}
		ctx.rotate(Math.PI / 30);
	}
	ctx.restore();

	// Get current time
	const hr = now.getHours() % 12;
	const min = now.getMinutes();
	const sec = now.getSeconds();

	// Make Hour Hand
	ctx.save();
	ctx.beginPath();
	ctx.rotate(
		(Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec
	);
	ctx.strokeStyle = "purple";
	ctx.moveTo(0, 0);
	ctx.lineTo(60, 0);
	ctx.lineWidth = 8;
	ctx.stroke();
	ctx.restore();

	// Make Min Hand
	ctx.save();
	ctx.beginPath();
	ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
	ctx.strokeStyle = "purple";
	ctx.moveTo(0, 0);
	ctx.lineTo(90, 0);
	ctx.lineWidth = 4;
	ctx.stroke();
	ctx.restore();

	// Make Sec Hand
	ctx.save();
	ctx.beginPath();
	ctx.rotate(sec * (Math.PI / 30));
	ctx.strokeStyle = "orange";
	ctx.moveTo(0, 0);
	ctx.lineTo(90, 0);
	ctx.lineWidth = 2;
	ctx.stroke();
	ctx.restore();

	// Make disc in the middle
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.arc(0, 0, 7, 0, Math.PI * 2, true);
	ctx.fillStyle = "orange";
	ctx.fill();
	ctx.restore();

	ctx.restore();

	requestAnimationFrame(clock);
}

requestAnimationFrame(clock);
