const map = L.map("map").setView([0, 0], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
const marker = L.marker([0, 0]).addTo(map);

function success(pos) {
	const coords = pos.coords;
	const lat = coords.latitude;
	const long = coords.longitude;
	marker.setLatLng([lat, long]).update();
	map.setView([lat, long], 15);
	marker.bindPopup(
		"<strong>Hello World</strong><br><p>My location is in Juinagar</p>"
	);
}

function error(err) {
	console.log(err);
}

function options() {}
navigator.geolocation.getCurrentPosition(success, error, options);
