$(document).ready(function(){
	$("#option_region").change(function(){
		$("#sucursales-printed").empty();
		$("#select-comuna").empty();
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
		else if(($("#option_region").val())=== "Región de Antofagasta"){
			console.log(sucursales[1].nombre);
			console.log(sucursales[2].nombre);
			for(var i= 1; i<3;i++){
				$("#sucursales-printed").append(`
				<div class="cuadro-sucursal col-md-5 col-lg-5 col-xs-12 id=`+ sucursales[i].id +`">
	                  <h4>`+ sucursales[i].nombre +`</h4>
	                  <p>`+ sucursales[i].title +`</p>
	                  <p>`+ sucursales[i].direccion +`</p>
	                  <p>`+ sucursales[i].comuna +`, `+ sucursales[i].region +`</p>
	                  <p><b>Horario:</b> `+ sucursales[i].horario +`</p>
	            </div>
				`)
			}
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
		else if(($("#option_region").val())=== "Región de Coquimbo"){
			console.log(sucursales[4].nombre);
			console.log(sucursales[5].nombre);
			for(var i= 4; i<6;i++){
				$("#sucursales-printed").append(`
				<div class="cuadro-sucursal col-md-5 col-lg-5 col-xs-12 id=`+ sucursales[i].id +`">
	                  <h4>`+ sucursales[i].nombre +`</h4>
	                  <p>`+ sucursales[i].title +`</p>
	                  <p>`+ sucursales[i].direccion +`</p>
	                  <p>`+ sucursales[i].comuna +`, `+ sucursales[i].region +`</p>
	                  <p><b>Horario:</b> `+ sucursales[i].horario +`</p>
	            </div>
				`)
			}
		}
		else if(($("#option_region").val())=== "Región de Valparaíso"){
			console.log(sucursales[6].nombre);
			console.log(sucursales[7].nombre);

			for(var i= 6; i<8;i++){
				$("#sucursales-printed").append(`
				<div class="cuadro-sucursal col-md-5 col-lg-5 col-xs-12 id=`+ sucursales[i].id +`">
	                  <h4>`+ sucursales[i].nombre +`</h4>
	                  <p>`+ sucursales[i].title +`</p>
	                  <p>`+ sucursales[i].direccion +`</p>
	                  <p>`+ sucursales[i].comuna +`, `+ sucursales[i].region +`</p>
	                  <p><b>Horario:</b> `+ sucursales[i].horario +`</p>
	            </div>
				`)
			}
			$("#select-comuna").append(`
	        	<label for="option_comuna">¿En cuál comuna buscas sucursal?</label>
	        	<select class="form-control" id="option_comuna">
	            	<option value="" disabled selected>Buscar por comuna</option>          
	            	<option value="La Calera">La Calera</option>
	            	<option value="San Felipe">San Felipe</option>
	            	<option value="Valparaíso">Valparaíso</option>
	            	<option value="Viña del Mar">Viña del Mar</option>
	        	</select>
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