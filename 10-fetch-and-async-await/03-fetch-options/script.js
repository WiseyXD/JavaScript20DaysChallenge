function postData(post) {
	fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		body: JSON.stringify({
			body: post.body,
			title: post.title,
		}),
		headers: {
			"content-type": "application/json",
			token: "abc123",
		},
	})
		.then((res) => {
			return res.json();
		})
		.then((data) => console.log(data));
}

postData({
	body: "Aryan's Body",
	title: "Aryan's Title",
});
