fetch("./movies.json")
	.then((res) => {
		console.log(res);
		return res.json();
	})

	.then((data) => {
		console.log(data);
		return data;
	})
	.then((data) => {
		console.log(data.title);
	});
