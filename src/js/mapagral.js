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

            $("#sucursales-printed").append(
            `<div class="cuadro-sucursal col-md-5 col-lg-5 col-xs-12">
                  <h4>`+ element.nombre +`</h4>
                  <p>`+ element.title +`</p>
                  <p>`+ element.direccion +`</p>
                  <p>`+ element.comuna +`, `+ element.region +`</p>
                  <p>Horario: `+ element.horario +`</p>
            </div>`);
        });

});

}