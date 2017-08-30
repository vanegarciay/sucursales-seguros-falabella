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
			console.log(sucursales[8].nombre);
			console.log(sucursales[9].nombre);
			console.log(sucursales[10].nombre);			
			console.log(sucursales[11].nombre);

			for(var i= 6; i<12;i++){
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
	            	<option value="Quilpué">Quilpué</option>	            	
	            	<option value="San Felipe">San Felipe</option>
	            	<option value="Valparaíso">Valparaíso</option>
	            	<option value="Viña del Mar">Viña del Mar</option>
	        	</select>
				`)

		}
		else if(($("#option_region").val()) === "Región Metropolitana"){
			console.log(sucursales[12].nombre);			
			console.log(sucursales[42].nombre);


			for(var i= 12; i<43;i++){
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
	            	<option value="Cerrillos">Cerrillos</option>
	            	<option value="Estación Central">Estación Central</option>	            	
	            	<option value="Huechuraba">Huechuraba</option>
	            	<option value="La Florida">La Florida</option>
	            	<option value="La Reina">La Reina</option>
	            	<option value="Las Condes">Las Condes</option>
	            	<option value="Lo Barnechea">Lo Barnechea</option>
	            	<option value="Maipú">Maipú</option> 
	            	<option value="Ñuñoa">Ñuñoa</option>
	            	<option value="Providencia">Providencia</option>
	            	<option value="Puente Alto">Puente Alto</option>	            	
	            	<option value="Quilicura">Quilicura</option>
	            	<option value="San Miguel">San Miguel</option>
	            	<option value="Santiago">Santiago</option>
	            	<option value="San Bernardo">San Bernardo</option>      	         	      	           	
	        	</select>
				`);

		}
		else if(($("#option_region").val())==="Region de O'Higgins"){
			console.log(sucursales[43].nombre)
			$("#sucursales-printed").append(`
			<div class="cuadro-sucursal col-md-5 col-lg-5 col-xs-12 id=`+ sucursales[43].id +`">
                  <h4>`+ sucursales[43].nombre +`</h4>
                  <p>`+ sucursales[43].title +`</p>
                  <p>`+ sucursales[43].direccion +`</p>
                  <p>`+ sucursales[43].comuna +`, `+ sucursales[43].region +`</p>
                  <p><b>Horario:</b> `+ sucursales[43].horario +`</p>
            </div>
				`)			
		}
		else if(($("#option_region").val())=== "Región del Maule"){
			console.log(sucursales[44].nombre);
			console.log(sucursales[45].nombre);
			for(var i= 44; i<46;i++){
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
		else if(($("#option_region").val())=== "Región del Biobío"){
			console.log(sucursales[46].nombre);
			console.log(sucursales[49].nombre);
			for(var i= 46; i<50;i++){
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
		else if(($("#option_region").val())==="Región de la Araucanía"){
			console.log(sucursales[50].nombre)
			$("#sucursales-printed").append(`
			<div class="cuadro-sucursal col-md-5 col-lg-5 col-xs-12 id=`+ sucursales[50].id +`">
                  <h4>`+ sucursales[50].nombre +`</h4>
                  <p>`+ sucursales[50].title +`</p>
                  <p>`+ sucursales[50].direccion +`</p>
                  <p>`+ sucursales[50].comuna +`, `+ sucursales[50].region +`</p>
                  <p><b>Horario:</b> `+ sucursales[50].horario +`</p>
            </div>
				`)			
		}
		else if(($("#option_region").val())=== "Región de los Ríos"){
			console.log(sucursales[51].nombre);
			console.log(sucursales[52].nombre);
			for(var i= 51; i<53;i++){
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
		else if(($("#option_region").val())=== "Región de los Lagos"){
			console.log(sucursales[53].nombre);
			console.log(sucursales[54].nombre);
			for(var i= 53; i<55;i++){
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
	$("#option_comuna").change(function(){
		alert("work in progress")
		$("#sucursales-printed").empty();		
		if(($("#option-comuna").val())==="La Calera"){
			alert("wena")
		}
		else if(($("#option-comuna").val())==="Quilpué"){
			alert("no")
			$("#sucursales-printed").append(`
			<div class="cuadro-sucursal col-md-5 col-lg-5 col-xs-12 id=`+ sucursales[11].id +`">
              	<h4>`+ sucursales[11].nombre +`</h4>
              	<p>`+ sucursales[11].title +`</p>
              	<p>`+ sucursales[11].direccion +`</p>
              	<p>`+ sucursales[11].comuna +`, `+ sucursales[11].region +`</p>
              	<p><b>Horario:</b> `+ sucursales[11].horario +`</p>
        	</div>
			`)			
		}
		else if(($("#option_region").val()) ==="San Felipe"){
			alert("work damn it")
			$("#sucursales-printed").append(`
			<div class="cuadro-sucursal col-md-5 col-lg-5 col-xs-12 id=`+ sucursales[10].id +`">
              	<h4>`+ sucursales[10].nombre +`</h4>
              	<p>`+ sucursales[10].title +`</p>
              	<p>`+ sucursales[10].direccion +`</p>
              	<p>`+ sucursales[10].comuna +`, `+ sucursales[10].region +`</p>
              	<p><b>Horario:</b> `+ sucursales[10].horario +`</p>
        	</div>
			`)			
		}
		else{
			alert("none")
		}		
	});
});