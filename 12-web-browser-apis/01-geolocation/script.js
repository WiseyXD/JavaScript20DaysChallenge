// getCurrentPosition
function success(pos) {
	const coords = pos.coords;

	console.log("Latitude : " + coords.latitude);
	console.log("Longitude : " + coords.longitude);
	console.log("Accuracy : " + coords.accuracy);
}

function err() {
	console.log("Error occured while retrieving your location");
}

function options() {}
navigator.geolocation.getCurrentPosition(success, err, options);

// watchPosition()

const target = {
	latitude: 19.0565,

	longitude: 73.0656,

	accuracy: 1,
};

function watchSuccess(pos) {
	const coords = pos.coords;
	console.log("Watch Latitude : " + coords.latitude);
	console.log("Watch Longitude : " + coords.longitude);
	console.log("Watch Accuracy : " + coords.accuracy);

	if (
		target.latitude === coords.latitude &&
		target.longitude === coords.longitude
	) {
		console.log("Reached Location");
		navigator.geolocation.clearWatch(id);
	} else {
		console.log("Follow the map");
	}
}

function watchError() {
	console.log("Error occured while retrieving your location");
}

const id = navigator.geolocation.watchPosition(
	watchSuccess,
	watchError,
	options
);
