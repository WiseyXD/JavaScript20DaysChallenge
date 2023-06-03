function getData(endpoint) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open("GET", endpoint);

		xhr.onreadystatechange = function () {
			if (this.readyState === 4) {
				if (this.status === 200) {
					resolve(JSON.parse(this.responseText));
				} else {
					reject("Error: Something went wrong");
				}
			}
		};

		setTimeout(() => {
			xhr.send();
		}, Math.floor(Math.random() * 3000) + 1000);
	});
}

// getData('./movies.json')
//   .then((movies) => {
//     console.log(movies);
//     return getData('./actors.json');
//   })
//   .then((actors) => {
//     console.log(actors);
//     return getData('./directors.json');
//   })
//   .then((directors) => {
//     console.log(directors);
//   })
//   .catch((error) => console.log(error));

async function getDataUsingFetch() {
	try {
		const resMovies = await fetch("./movies.json");
		const movieData = await resMovies.json();
		console.log(movieData);
		const resDirectors = await fetch("./directors.json");
		const directorsData = await resDirectors.json();
		console.log(directorsData);
	} catch (err) {}
}

getDataUsingFetch();
