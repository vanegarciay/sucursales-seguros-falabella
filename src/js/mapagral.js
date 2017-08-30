function initMap(){
    $(document).ready(function() {
        
    	var map = new google.maps.Map(document.getElementById("map"), {
    		zoom: 8,
    		center:{lat:-33.4430, lng: -70.6619},
    		mapTypeControl: false,
    		zoomControl: false,
    		streetViewControl:false
    	});

        marcarSucursalesEnMapa(sucursales);

        function marcarSucursalesEnMapa(sucursales) {

            sucursales.forEach(function(element){
                var lat = element.latitud;
                var lon = element.longitud;
            console.log(lat);
            console.log(lon);
            marcarSucursal(lat, lon);
            });
        }

        function marcarSucursal(lat, lon) {
            var marker = crearMarcador(map);

            marker.setPosition(new google.maps.LatLng(lat,lon));
            marker.setVisible(true);
        }

        function crearMarcador(map) {
            var icono = {
                url: 'http://www.myiconfinder.com/uploads/iconsets/82a679a558f2fe4c3964c4123343f844.png',
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(35, 35)
            };

            var marker = new google.maps.Marker({
                map: map,
                animation: google.maps.Animation.DROP,
                icon: icono,
                anchorPoint: new google.maps.Point(0, -29)
            });

            return marker;
        }

});

}