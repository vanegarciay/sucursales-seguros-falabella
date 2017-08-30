function initMap(){
    $(document).ready(function() {
        
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 8,
            center:{lat:-33.4430, lng: -70.6619},
            mapTypeControl: false,
            zoomControl: true,
            streetViewControl: false
        });

        marcarSucursalesEnMapa(sucursales);
        /*inputAutocompletado(map);*/
        listarSucursales(sucursales);

        /* Mi ubicación actual */
        $( "#encuentrame" ).click(function() {
            buscarMiUbicacion(map);
        });

        function marcarSucursalesEnMapa(sucursales) {
            sucursales.forEach(function(sucursal){
                var lat = sucursal.latitud;
                var lon = sucursal.longitud;

                marcarSucursal(sucursal);
            });
        }

        function marcarSucursal(sucursal) {
            var marker = crearMarcador(map);

            marker.setPosition(new google.maps.LatLng(sucursal.latitud,sucursal.longitud));
            marker.setVisible(true);

            var contentString = `<div>
                          <h4>`+ sucursal.nombre +`</h4>
                          <p>`+ sucursal.title +`</p>
                          <p>`+ sucursal.direccion +`</p>
                          <p>`+ sucursal.comuna +`, `+ sucursal.region +`</p>
                          <p><b>Horario:</b> `+ sucursal.horario +`</p>
                    </div>`;

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });
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
                title: 'Prueba de titulo',
                anchorPoint: new google.maps.Point(0, -29)
            });

            return marker;
        }

        function listarSucursales(sucursales) {
            sucursales.forEach(function(element){
                $("#sucursales-printed").append(
                    `<div class="cuadro-sucursal col-md-5 col-lg-5 col-xs-12">
                          <h4>`+ element.nombre +`</h4>
                          <p>`+ element.title +`</p>
                          <p>`+ element.direccion +`</p>
                          <p>`+ element.comuna +`, `+ element.region +`</p>
                          <p><b>Horario:</b> `+ element.horario +`</p>
                    </div>`
                );
            });
        }

        function buscarMiUbicacion(map) {
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(centrarUbicacion, errorCentrarUbicacion);
            } else {
                console.log("La geolocalización no es soportada por este navegador.");
            }
        }

        var centrarUbicacion = function(posicion) {
            var latitud,longitud;
            latitud = posicion.coords.latitude;
            longitud = posicion.coords.longitude;

            map.setCenter({lat:latitud,lng:longitud});
            map.setZoom(17);
        }

        var errorCentrarUbicacion = function(error) {
            alert("No podemos encontrar tu ubicación");
        }

        /*function inputAutocompletado(map,marker) {
            var inputBuscar = document.getElementById('origin');
            var autocompleteBuscar = new google.maps.places.Autocomplete(inputBuscar);
            autocompleteBuscar.bindTo('bounds', map);
            marcarSucursal(sucursal);
            crearMarcador(map);

            crearListener(autocompleteBuscar, marker, map);
        }

        function crearListener(autocomplete, marker) {
            autocomplete.addListener('place_changed', function() {
            var place = autocomplete.getPlace();
            centrarUbicacion(...args);
        });
    }*/
    });

}