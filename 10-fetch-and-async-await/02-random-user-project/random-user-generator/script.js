const body = document.querySelector("body");
// const age = document.querySelcetor(".age");
// const cell = document.querySelector(".cell");
// const name = document.querySelector(".name");
// const location = document.querySelector(".location");
// const email = document.querySelector(".email");
const button = document.querySelector("button");
const spinner = document.querySelector(".spinner");

function fetchUser() {
	fetch("https://randomuser.me/api/")
		.then((res) => {
			showSpinner();
			return res.json();
		})
		.then((data) => {
			console.log(data);
			displayUser(data.results[0]);
			hideSpinner();
		});
}

function displayUser(user) {
	if (user.gender === "female") {
		body.style.backgroundColor = "rebeccapurple";
	} else {
		body.style.backgroundColor = "blue";
	}
	const userDisplay = document.querySelector("#user");
	userDisplay.innerHTML = `<div class="flex justify-between">
    <div class="flex">
        <img
            class="w-48 h-48 rounded-full mr-8"
            src="${user.picture.large}"
        />
        <div class="space-y-3">
            <p class="text-xl">
                <span class="font-bold name">Name: </span>${user.name.first} ${user.name.last} 
            </p>
            <p class="text-xl">
                <span class="font-bold email">Email: </span>
                ${user.email}
            </p>
            <p class="text-xl">
                <span class="font-bold cell">Phone: </span>
                ${user.cell}
            </p>
            <p class="text-xl">
                <span class="font-bold location"
                    >Location:
                </span>
                ${user.location.country}
            </p>
            <p class="text-xl age">
                <span class="font-bold">Age: </span> ${user.dob.age}
            </p>
        </div>
    </div>
</div>`;
}

function showSpinner() {
	spinner.style.display = "block";
}

function hideSpinner() {
	spinner.style.display = "none";
}
// fetchUser();
button.addEventListener("click", fetchUser);
document.addEventListener("DOMContentLoaded", fetchUser);
