$(document).ready(function(){
	$("#option_region").change(function(){
		$("#sucursales-printed").empty();
		var region =$("#option_region").val();
		if(($("#option_region").val())=== "Región de Tarapacá"){
			console.log(sucursales[0].nombre)
			$("#sucursales-printed").append(`
			<div class="cuadro-sucursal col-md-5 col-lg-5 col-xs-12 id=`+ sucursales[0].id +`">
                  <h4>`+ sucursales[0].nombre +`</h4>
                  <p>`+ sucursales[0].title +`</p>
                  <p>`+ sucursales[0].direccion +`</p>
                  <p>`+ sucursales[0].comuna +`, `+ sucursales[0].region +`</p>
                  <p><b>Horario:</b> `+ sucursales[0].horario +`</p>
            </div>
				`)
		}
		else if(($("#option_region").val())=== "Región de Atacama"){
			console.log(sucursales[3].nombre)
			$("#sucursales-printed").append(`
			<div class="cuadro-sucursal col-md-5 col-lg-5 col-xs-12 id=`+ sucursales[3].id +`">
                  <h4>`+ sucursales[3].nombre +`</h4>
                  <p>`+ sucursales[3].title +`</p>
                  <p>`+ sucursales[3].direccion +`</p>
                  <p>`+ sucursales[3].comuna +`, `+ sucursales[3].region +`</p>
                  <p><b>Horario:</b> `+ sucursales[3].horario +`</p>
            </div>
				`)
		}		
		else if(($("#option_region").val())=== "Región de Atacama"){
			console.log(sucursales[3].nombre)
			$("#sucursales-printed").append(`
			<div class="cuadro-sucursal col-md-5 col-lg-5 col-xs-12 id=`+ sucursales[3].id +`">
                  <h4>`+ sucursales[3].nombre +`</h4>
                  <p>`+ sucursales[3].title +`</p>
                  <p>`+ sucursales[3].direccion +`</p>
                  <p>`+ sucursales[3].comuna +`, `+ sucursales[3].region +`</p>
                  <p><b>Horario:</b> `+ sucursales[3].horario +`</p>
            </div>
				`)
		}
		else if(($("#option_region").val())=== "Región de Magallanes"){
			console.log(sucursales[55].nombre)
			$("#sucursales-printed").append(`
			<div class="cuadro-sucursal col-md-5 col-lg-5 col-xs-12 id=`+ sucursales[55].id +`">
                  <h4>`+ sucursales[55].nombre +`</h4>
                  <p>`+ sucursales[55].title +`</p>
                  <p>`+ sucursales[55].direccion +`</p>
                  <p>`+ sucursales[55].comuna +`, `+ sucursales[55].region +`</p>
                  <p><b>Horario:</b> `+ sucursales[55].horario +`</p>
            </div>
				`)
		}	
	});
});