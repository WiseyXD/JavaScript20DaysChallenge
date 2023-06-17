const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 2;

// Walls
ctx.moveTo(50, 30);
ctx.lineTo(50, 100);
ctx.moveTo(200, 30);
ctx.lineTo(200, 100);

// Roof
ctx.lineWidth = 2;
ctx.moveTo(50, 30);
ctx.lineTo(200, 30);

// Roof Triangle
// Left Line
ctx.moveTo(50, 30);
ctx.lineTo(125, 10);

// Right Line
ctx.moveTo(200, 30);
ctx.lineTo(125, 10);

// Bottom Base
ctx.moveTo(50, 100);
ctx.lineTo(200, 100);

// Door
ctx.moveTo(105, 100);
ctx.lineTo(105, 65);

ctx.moveTo(155, 100);
ctx.lineTo(155, 65);

ctx.moveTo(105, 65);
ctx.lineTo(155, 65);
ctx.stroke();

// add Image
const img = document.querySelector("img");
img.style.display = "none";

img.addEventListener("load", () => ctx.drawImage(img, 100, 100));
