async function getData(num) {
	try {
		const getRes = await fetch("http://httpstat.us/404");
		if (!getRes.ok) {
			throw new Error("Bad Request");
		}
		console.log("JAI SHREE RAM");
	} catch (err) {
		console.log(err);
	}
}

getData(200);
