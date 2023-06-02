function getPosts() {
	fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
		.then((res) => {
			return res.json();
		})
		.then((data) =>
			data.forEach((todo) => {
				addToDOM(todo);
			})
		);
}

function addToDOM(todo) {
	const div = document.createElement("div");
	const text = document.createTextNode(todo.title);
	div.appendChild(text);
	document.querySelector("#todo-list").appendChild(div);
	if (todo.completed) {
		div.classList.add("done");
	}
	div.classList.add("todoItems");
	div.setAttribute("data-id", todo.id);
}

function createTodo(e) {
	e.preventDefault();
	console.log(e.target.firstElementChild.value);
	const todo = {
		title: e.target.firstElementChild.value,
		completed: false,
	};

	fetch("https://jsonplaceholder.typicode.com/todos", {
		method: "POST",
		body: JSON.stringify(todo),
		headers: {
			"content-type": "application/json",
		},
	})
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			addToDOM(data);
		});
	e.target.firstElementChild.value = "";
}

function toggleCompleted(e) {
	if (e.target.classList.contains("todoItems")) {
		e.target.classList.toggle("done");
	}

	updateTodo(e.target.classList.contains("done"), e.target.dataset.id);
}

function updateTodo(completed, id) {
	fetch(`${"https://jsonplaceholder.typicode.com/todos"}/${id}`, {
		method: "PUT",
		body: JSON.stringify({ completed }),
		headers: {
			"Content-Type": "application.json",
		},
	})
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			console.log(data);
		});
}

function toDelete(e) {
	console.log(e.target);
	const removeTarget = e.target;
	removeTarget.remove();

	deletedTodo(e.target.dataset.id);
}

function deletedTodo(id) {
	fetch(`${"https://jsonplaceholder.typicode.com/todos"}/${id}`, {
		method: "DELETE",
		// body: "",
		// headers: {
		// 	"Content-Type": "application/json",
		// },
	})
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			console.log(data);
		});
}

document.addEventListener("DOMContentLoaded", getPosts);
document.querySelector("#todo-form").addEventListener("submit", createTodo);
document.querySelector("#todo-list").addEventListener("click", toggleCompleted);
document.querySelector("#todo-list").addEventListener("dblclick", toDelete);
