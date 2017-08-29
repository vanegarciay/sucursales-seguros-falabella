$(document).ready(function($) {
		$(document).ready(function() {
		
		// get location button functionality
		$("#inputgroup_encuentrame").click(function(event){
			event.preventDefault();
			// check if browser supports the geolocation api
			if(navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(success);			// if geolocation supported, call function
			} else {
				alert('Tu navegador no soporta la geolocalizacion.');
			}
		
		});

});
