function numberReturn(num) {
	if (isNaN(num)) {
		throw new Error("Not a number");
	}
	return num * 2;
}

try {
	console.log(numberReturn("2"));
} catch (err) {
	console.log(err + " error");
}
