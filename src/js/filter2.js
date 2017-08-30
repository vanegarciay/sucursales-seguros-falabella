$(document).ready(function(){
	$("#option_comuna_valpo").change(function(){
		$("#sucursales-printed").empty();
	    if(($("#option_comuna_valpo").val())==="La Calera"){
	      $("#sucursales-printed").append(`
	      <div class="cuadro-sucursal col-md-5 col-lg-5 col-xs-12 id=`+ sucursales[9].id +`">
	                <h4>`+ sucursales[9].nombre +`</h4>
	                <p>`+ sucursales[9].title +`</p>
	                <p>`+ sucursales[9].direccion +`</p>
	                <p>`+ sucursales[9].comuna +`, `+ sucursales[9].region +`</p>
	                <p><b>Horario:</b> `+ sucursales[9].horario +`</p>
	          </div>
	      `)
	    }
	    else if(($("#option_comuna_valpo").val())==="Quilpué"){
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
	    else if(($("#option_comuna_valpo").val()) ==="San Felipe"){
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
	    else if(($("#option_comuna_valpo").val()) ==="Valparaíso"){
	      $("#sucursales-printed").append(`
	      <div class="cuadro-sucursal col-md-5 col-lg-5 col-xs-12 id=`+ sucursales[8].id +`">
	                <h4>`+ sucursales[8].nombre +`</h4>
	                <p>`+ sucursales[8].title +`</p>
	                <p>`+ sucursales[8].direccion +`</p>
	                <p>`+ sucursales[8].comuna +`, `+ sucursales[8].region +`</p>
	                <p><b>Horario:</b> `+ sucursales[8].horario +`</p>
	          </div>
	      `)      
	    }
	    else if(($("#option_comuna_valpo").val()) ==="Viña del Mar"){
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
	    }	    	    		
	});

	$("#option_comuna_stgo").change(function(){
		$("#sucursales-printed").empty();

	    if(($("#option_comuna_stgo").val()) ==="Quilicura"){
	    	console.log(($("#option_comuna_stgo").val()))
	    	$("#sucursales-printed").append(`
	      		<div class="cuadro-sucursal col-md-5 col-lg-5 col-xs-12 id=`+ sucursales[12].id +`">
	                <h4>`+ sucursales[12].nombre +`</h4>
	                <p>`+ sucursales[12].title +`</p>
	                <p>`+ sucursales[12].direccion +`</p>
	                <p>`+ sucursales[12].comuna +`, `+ sucursales[12].region +`</p>
	                <p><b>Horario:</b> `+ sucursales[12].horario +`</p>
	          </div>
	      `)
	    }
	    else if(($("#option_comuna_stgo").val()) ==="La Reina"){
	    	console.log(($("#option_comuna_stgo").val()))
	    	$("#sucursales-printed").append(`
	      		<div class="cuadro-sucursal col-md-5 col-lg-5 col-xs-12 id=`+ sucursales[13].id +`">
	                <h4>`+ sucursales[13].nombre +`</h4>
	                <p>`+ sucursales[13].title +`</p>
	                <p>`+ sucursales[13].direccion +`</p>
	                <p>`+ sucursales[13].comuna +`, `+ sucursales[13].region +`</p>
	                <p><b>Horario:</b> `+ sucursales[13].horario +`</p>
	          </div>
	      `)
	    }
	    else if(($("#option_comuna_stgo").val()) ==="Las Condes"){
	    	console.log(($("#option_comuna_stgo").val()))
	    	$("#sucursales-printed").append(`
	      		<div class="cuadro-sucursal col-md-5 col-lg-5 col-xs-12 id=`+ sucursales[14].id +`">
	                <h4>`+ sucursales[14].nombre +`</h4>
	                <p>`+ sucursales[14].title +`</p>
	                <p>`+ sucursales[14].direccion +`</p>
	                <p>`+ sucursales[14].comuna +`, `+ sucursales[14].region +`</p>
	                <p><b>Horario:</b> `+ sucursales[14].horario +`</p>
	          </div>
	      `)
	    }
	    else if(($("#option_comuna_stgo").val()) ==="Las Condes"){
	    	console.log(($("#option_comuna_stgo").val()))
	    	$("#sucursales-printed").append(`
	      		<div class="cuadro-sucursal col-md-5 col-lg-5 col-xs-12 id=`+ sucursales[21].id +`">
	                <h4>`+ sucursales[21].nombre +`</h4>
	                <p>`+ sucursales[21].title +`</p>
	                <p>`+ sucursales[21].direccion +`</p>
	                <p>`+ sucursales[21].comuna +`, `+ sucursales[21].region +`</p>
	                <p><b>Horario:</b> `+ sucursales[21].horario +`</p>
	          </div>
	      `)
	    	$("#sucursales-printed").append(`
	      		<div class="cuadro-sucursal col-md-5 col-lg-5 col-xs-12 id=`+ sucursales[14].id +`">
	                <h4>`+ sucursales[14].nombre +`</h4>
	                <p>`+ sucursales[14].title +`</p>
	                <p>`+ sucursales[14].direccion +`</p>
	                <p>`+ sucursales[14].comuna +`, `+ sucursales[14].region +`</p>
	                <p><b>Horario:</b> `+ sucursales[14].horario +`</p>
	          </div>
	      `)	      	    	
			for(var i= 23; i<25;i++){
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
	    else if(($("#option_comuna_stgo").val()) ==="Maipú"){
	    	$("#sucursales-printed").append(`
	      		<div class="cuadro-sucursal col-md-5 col-lg-5 col-xs-12 id=`+ sucursales[15].id +`">
	                <h4>`+ sucursales[15].nombre +`</h4>
	                <p>`+ sucursales[15].title +`</p>
	                <p>`+ sucursales[15].direccion +`</p>
	                <p>`+ sucursales[15].comuna +`, `+ sucursales[15].region +`</p>
	                <p><b>Horario:</b> `+ sucursales[15].horario +`</p>
	          </div>
	      `)
	    	$("#sucursales-printed").append(`
	      		<div class="cuadro-sucursal col-md-5 col-lg-5 col-xs-12 id=`+ sucursales[32].id +`">
	                <h4>`+ sucursales[32].nombre +`</h4>
	                <p>`+ sucursales[32].title +`</p>
	                <p>`+ sucursales[32].direccion +`</p>
	                <p>`+ sucursales[32].comuna +`, `+ sucursales[32].region +`</p>
	                <p><b>Horario:</b> `+ sucursales[32].horario +`</p>
	          </div>
	      `)	    	
	    }
	    else if(($("#option_comuna_stgo").val()) ==="La Florida"){
	    	$("#sucursales-printed").append(`
	      		<div class="cuadro-sucursal col-md-5 col-lg-5 col-xs-12 id=`+ sucursales[16].id +`">
	                <h4>`+ sucursales[16].nombre +`</h4>
	                <p>`+ sucursales[16].title +`</p>
	                <p>`+ sucursales[16].direccion +`</p>
	                <p>`+ sucursales[16].comuna +`, `+ sucursales[16].region +`</p>
	                <p><b>Horario:</b> `+ sucursales[16].horario +`</p>
	          </div>
	      `)
			for(var i= 37; i<39;i++){
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
	    else if(($("#option_comuna_stgo").val()) ==="Huechuraba"){
	    	$("#sucursales-printed").append(`
	      		<div class="cuadro-sucursal col-md-5 col-lg-5 col-xs-12 id=`+ sucursales[17].id +`">
	                <h4>`+ sucursales[17].nombre +`</h4>
	                <p>`+ sucursales[17].title +`</p>
	                <p>`+ sucursales[17].direccion +`</p>
	                <p>`+ sucursales[17].comuna +`, `+ sucursales[17].region +`</p>
	                <p><b>Horario:</b> `+ sucursales[17].horario +`</p>
	          </div>
	      `)
	    	$("#sucursales-printed").append(`
	      		<div class="cuadro-sucursal col-md-5 c28-lg-5 col-xs-12 id=`+ sucursales[28].id +`">
	                <h4>`+ sucursales[28].nombre +`</h4>
	                <p>`+ sucursales[28].title +`</p>
	                <p>`+ sucursales[28].direccion +`</p>
	                <p>`+ sucursales[28].comuna +`, `+ sucursales[28].region +`</p>
	              28<p><b>Horario:</b> `+ sucursales[28].horario +`</p>
	          </div>
	      `)	    	
	    }
	    else if(($("#option_comuna_stgo").val()) ==="Puente Alto"){
	    	$("#sucursales-printed").append(`
	      		<div class="cuadro-sucursal col-md-5 c28-lg-5 col-xs-12 id=`+ sucursales[18].id +`">
	                <h4>`+ sucursales[18].nombre +`</h4>
	                <p>`+ sucursales[18].title +`</p>
	                <p>`+ sucursales[18].direccion +`</p>
	                <p>`+ sucursales[18].comuna +`, `+ sucursales[18].region +`</p>
	              28<p><b>Horario:</b> `+ sucursales[18].horario +`</p>
	          </div>
	      `)
	    	$("#sucursales-printed").append(`
	      		<div class="cuadro-sucursal col-md-5 c28-lg-5 col-xs-12 id=`+ sucursales[20].id +`">
	                <h4>`+ sucursales[20].nombre +`</h4>
	                <p>`+ sucursales[20].title +`</p>
	                <p>`+ sucursales[20].direccion +`</p>
	                <p>`+ sucursales[20].comuna +`, `+ sucursales[20].region +`</p>
	              28<p><b>Horario:</b> `+ sucursales[20].horario +`</p>
	          </div>
	      `)
	    	$("#sucursales-printed").append(`
	      		<div class="cuadro-sucursal col-md-5 c28-lg-5 col-xs-12 id=`+ sucursales[28].id +`">
	                <h4>`+ sucursales[36].nombre +`</h4>
	                <p>`+ sucursales[36].title +`</p>
	                <p>`+ sucursales[36].direccion +`</p>
	                <p>`+ sucursales[36].comuna +`, `+ sucursales[36].region +`</p>
	              28<p><b>Horario:</b> `+ sucursales[36].horario +`</p>
	          </div>
	      `)	      	    	
	    } 
	    else if(($("#option_comuna_stgo").val()) ==="San Miguel"){
	    	$("#sucursales-printed").append(`
	      		<div class="cuadro-sucursal col-md-5 c28-lg-5 col-xs-12 id=`+ sucursales[19].id +`">
	                <h4>`+ sucursales[19].nombre +`</h4>
	                <p>`+ sucursales[19].title +`</p>
	                <p>`+ sucursales[19].direccion +`</p>
	                <p>`+ sucursales[19].comuna +`, `+ sucursales[19].region +`</p>
	              28<p><b>Horario:</b> `+ sucursales[19].horario +`</p>
	          </div>
	      `)	    	
	    }
	    else if(($("#option_comuna_stgo").val()) ==="Cerrillos"){
	    	$("#sucursales-printed").append(`
	      		<div class="cuadro-sucursal col-md-5 c28-lg-5 col-xs-12 id=`+ sucursales[22].id +`">
	                <h4>`+ sucursales[22].nombre +`</h4>
	                <p>`+ sucursales[22].title +`</p>
	                <p>`+ sucursales[22].direccion +`</p>
	                <p>`+ sucursales[22].comuna +`, `+ sucursales[22].region +`</p>
	              28<p><b>Horario:</b> `+ sucursales[22].horario +`</p>
	          </div>
	      `)	    	
			for(var i= 34; i<36;i++){
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
	    else if(($("#option_comuna_stgo").val()) ==="Lo Barnechea"){
	    	$("#sucursales-printed").append(`
	      		<div class="cuadro-sucursal col-md-5 c28-lg-5 col-xs-12 id=`+ sucursales[25].id +`">
	                <h4>`+ sucursales[25].nombre +`</h4>
	                <p>`+ sucursales[25].title +`</p>
	                <p>`+ sucursales[25].direccion +`</p>
	                <p>`+ sucursales[25].comuna +`, `+ sucursales[25].region +`</p>
	              28<p><b>Horario:</b> `+ sucursales[25].horario +`</p>
	          </div>
	      `)	    	
	    }
	    else if(($("#option_comuna_stgo").val()) ==="Providencia"){
	    	$("#sucursales-printed").append(`
	      		<div class="cuadro-sucursal col-md-5 c28-lg-5 col-xs-12 id=`+ sucursales[27].id +`">
	                <h4>`+ sucursales[27].nombre +`</h4>
	                <p>`+ sucursales[27].title +`</p>
	                <p>`+ sucursales[27].direccion +`</p>
	                <p>`+ sucursales[27].comuna +`, `+ sucursales[27].region +`</p>
	              28<p><b>Horario:</b> `+ sucursales[27].horario +`</p>
	          </div>
	      `)
	    	$("#sucursales-printed").append(`
	      		<div class="cuadro-sucursal col-md-5 c28-lg-5 col-xs-12 id=`+ sucursales[29].id +`">
	                <h4>`+ sucursales[29].nombre +`</h4>
	                <p>`+ sucursales[29].title +`</p>
	                <p>`+ sucursales[29].direccion +`</p>
	                <p>`+ sucursales[29].comuna +`, `+ sucursales[29].region +`</p>
	              28<p><b>Horario:</b> `+ sucursales[29].horario +`</p>
	          </div>
	      `)	    	
	    }
	    else if(($("#option_comuna_stgo").val()) ==="Santiago"){
	    	$("#sucursales-printed").append(`
	      		<div class="cuadro-sucursal col-md-5 c28-lg-5 col-xs-12 id=`+ sucursales[39].id +`">
	                <h4>`+ sucursales[39].nombre +`</h4>
	                <p>`+ sucursales[39].title +`</p>
	                <p>`+ sucursales[39].direccion +`</p>
	                <p>`+ sucursales[39].comuna +`, `+ sucursales[39].region +`</p>
	              28<p><b>Horario:</b> `+ sucursales[39].horario +`</p>
	          </div>
	      `)	    	
	    }
	    else if(($("#option_comuna_stgo").val()) ==="Estación Central"){
	    	$("#sucursales-printed").append(`
	      		<div class="cuadro-sucursal col-md-5 c28-lg-5 col-xs-12 id=`+ sucursales[40].id +`">
	                <h4>`+ sucursales[40].nombre +`</h4>
	                <p>`+ sucursales[40].title +`</p>
	                <p>`+ sucursales[40].direccion +`</p>
	                <p>`+ sucursales[40].comuna +`, `+ sucursales[40].region +`</p>
	              28<p><b>Horario:</b> `+ sucursales[40].horario +`</p>
	          </div>
	      `)
	    }	        	          
	    else if(($("#option_comuna_stgo").val()) ==="Melipilla"){
	    	$("#sucursales-printed").append(`
	      		<div class="cuadro-sucursal col-md-5 c28-lg-5 col-xs-12 id=`+ sucursales[41].id +`">
	                <h4>`+ sucursales[41].nombre +`</h4>
	                <p>`+ sucursales[41].title +`</p>
	                <p>`+ sucursales[41].direccion +`</p>
	                <p>`+ sucursales[41].comuna +`, `+ sucursales[41].region +`</p>
	              28<p><b>Horario:</b> `+ sucursales[41].horario +`</p>
	          </div>
	      `)
	    }

	});	

});