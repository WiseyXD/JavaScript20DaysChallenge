function fetchAPI() {
	fetch("http://httpstat.us/404")
		.then((result) => {
			if (result.status !== 200) {
				throw new Error("Failed request");
			}
			return result;
		})
		.then(() => {
			console.log("Success");
		})
		.catch((err) => {
			console.log(err);
		});
}

fetchAPI();
