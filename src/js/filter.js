$(document).ready(function(){
	$("#option_region").change(function(){
		$("#sucursales-printed").empty();
		$("#select-comuna-stgo").addClass("hide");
		$("#select-comuna-valpo").addClass("hide");
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
			$("#select-comuna-valpo").removeClass("hide");
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

		}
		else if(($("#option_region").val()) === "Región Metropolitana"){
			console.log(sucursales[12].nombre);			
			console.log(sucursales[42].nombre);

			$("#select-comuna-stgo").removeClass("hide");
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

});