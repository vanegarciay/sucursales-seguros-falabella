function initMap(){
    $(document).ready(function() {
    	var map = new google.maps.Map(document.getElementById("map"), {
    		zoom: 8,
    		center:{lat:-33.4430, lng: -70.6619},
    		mapTypeControl: false,
    		zoomControl: false,
    		streetViewControl:false
    	});

        sucursales.forEach(function(element){
            console.log(element.nombre);
        });

});

}