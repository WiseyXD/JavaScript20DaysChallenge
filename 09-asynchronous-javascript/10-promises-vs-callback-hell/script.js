function getData(endpoint) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.open("GET", endpoint);

		xhr.onreadystatechange = function () {
			if (this.readyState === 4 && this.status === 200) {
				resolve(JSON.parse(this.responseText));
			} else {
				reject("Something went wrong");
			}
		};

		setTimeout(() => {
			xhr.send();
		}, Math.floor(Math.random() * 3000) + 1000);
	});
}

getData("./movies.json")
	.then((movies) => {
		console.log(movies);
		return getData("./actors.json");
	})
	.then((actors) => {
		console.log(actors);
		return getData("./directors.json");
	})
	.then(() => {
		console.log(directors);
	})
	.catch((err) => {
		console.log(err);
	});
