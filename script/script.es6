// ES6 can be broken into modules and loaded using `import "./sub/path.es6";`
console.log("JavaScript!");

// so the user has bought a ticket, and the day has come.
// Let's set up a notification to tell them that today is the day, and here's a Google maps link that will get them there.
document.getElementById("directions").addEventListener("click", function() {
	var notification_object = {
		"trigger": "now",
		"title": "This is how to get there",
		"subtitle": "And here's a map's link with some directions on how to get there"
	}

	parent.postMessage(notification_object, "*");
});

// Do they want particular infomation when they arrive?
// Let's set up a cordova notification that will trigger via a geofence
document.getElementById("geofence").addEventListener("click", function() {
	// var lat = 52.92833356956197;
	// var long = -1.48037211229856;
	var lat = 51.49787778087621;
	var long = -0.13504067359789937;
	var radius = 1;

	var data = {
		"type": "notification",
		"subtype": "geofence",
		"title": "You have arrived",
		"subtitle": "Welcome! Click on me to see where to queue and where facilities are located.",
		"lat": lat,
		"long": long,
		"radius": radius
	}
	parent.postMessage(data, "*");
});

document.getElementById("geolocation").addEventListener("click", function() {
	var data = {
		"type": "debug",
		"subtype": "geolocation",
		"payload": {}
	}
	parent.postMessage(data, "*"); //TODO: Change this to origin of corodova window. Probably is `https://localhost`.
});