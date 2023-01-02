$(function(){
	
swal.fire({
	title:"Bienvenido al Cuestionario",
	html:'Vas a encontrar todas las preguntas de todos los temas de cada área con su <b class="blue-text">resolución</b> y <b class="blue-text">palabras clave</b> ',
	icon:"info",
	timer:"8000",
	timerProgressBar:true,
	allowOutsideClick:false,
	allowEscapeKey:false,
	allowEnterKey:false,
	stopKeydownPropagation:false,
	showDenyButton:true,
	denyButtonText:"No volver a mostrar",
	reverseButtons:true,
}).then((result) => {
  if (result.isDenied) {
	localStorage.setItem('cerraralert','true');
	}else{
	console.log("#");
	} 
});

	//LOCAL STORAGE
	if(localStorage.getItem('cerraralert') === "true"){
		swal.close();
	} else{
		console.log("#");
	}
	//LOCAL STORAGE
	

	$(".thumb, .calculadora").hide();
	$("#calculadoraoculto").show();
	$("#calculadoraoculto").click(function(){
				$(".calculadora").show(500);
				$("#calculadoraoculto").hide(400);
				
				$("#cerrarcalculadora").click(function(){
				$("#calculadoraoculto").show(500);;
				$(".calculadora").hide(400);;
				});
			});
			
/*google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic(){

     var data = google.visualization.arrayToDataTable([
          ['Autos', 'Tiempo de llegada (minutos)', { role: 'style' },{ role: 'annotation' }],
          ['A', 18, 'color:#658BCD',18],
          ['B', 13, 'color:#ED9457',13],
          ['C', 15, 'color:gray',15],
          ['D', 11, 'color:#FDCA30',11],
		  ['E', 11, 'color:#79ACDB',11],
		  ['F', 13, 'color:#8ABB69',13]
        ]);

      var options = {
        vAxis: {
          title: 'Tiempo de llegada (minutos)'
        },
		hAxis: {
          title: 'Autos'
        },
      };
	var options = {'width':550, 'height':600};
      var chart = new google.visualization.ColumnChart(
        document.getElementById('piechart'));

      chart.draw(data, options);
    }		
*/
			
var slider = document.getElementById("myRange");
var output = document.getElementById("value");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
	if(output.innerHTML == "1" ){
	$(".calculator").animate({opacity:"5%"},50);
	} else if (output.innerHTML == "2" ){
	$(".calculator").animate({opacity:"10%"},50);
	} else if (output.innerHTML == "3" ){
	$(".calculator").animate({opacity:"15%"},50);
	} else if (output.innerHTML == "4" ){
	$(".calculator").animate({opacity:"20%"},50);
	} else if (output.innerHTML == "5" ){
	$(".calculator").animate({opacity:"25%"},50);
	$("#myRange").animate({opacity:"100%"},50);
	} else if (output.innerHTML == "6" ){
	$(".calculator").animate({opacity:"30%"},50);
	} else if (output.innerHTML == "7" ){
	$(".calculator").animate({opacity:"35%"},50);
	} else if (output.innerHTML == "8" ){
	$(".calculator").animate({opacity:"40%"},50);
	} else if (output.innerHTML == "9" ){
	$(".calculator").animate({opacity:"45%"},50);
	} else if (output.innerHTML == "10" ){
	$(".calculator").animate({opacity:"50%"},50);
	} else if (output.innerHTML == "11" ){
	$(".calculator").animate({opacity:"55%"},50);
	} else if (output.innerHTML == "12" ){
	$(".calculator").animate({opacity:"60%"},50);
	} else if (output.innerHTML == "13" ){
	$(".calculator").animate({opacity:"65%"},50);
	} else if (output.innerHTML == "14" ){
	$(".calculator").animate({opacity:"70%"},50);
	} else if (output.innerHTML == "15" ){
	$(".calculator").animate({opacity:"75%"},50);
	} else if (output.innerHTML == "16" ){
	$(".calculator").animate({opacity:"80%"},50);
	} else if (output.innerHTML == "17" ){
	$(".calculator").animate({opacity:"85%"},50);
	} else if (output.innerHTML == "18" ){
	$(".calculator").animate({opacity:"90%"},50);
	} else if (output.innerHTML == "19" ){
	$(".calculator").animate({opacity:"95%"},50);
	} else {
	$(".calculator").animate({opacity:"100%"},50);
	} 
}
	//primer ejercicio
	$("#TextR1, #rel1, #tema1, #cerrar1").hide();
	$("#mate1").click(function(){
		
		$("#rel1").show(1500);

		$("#rel1").click(function(){
		$("#TextR1").slideDown(500);
		$("#cerrar1, #tema1").show(1500);
			$("#cerrar1").click(function(){
			$("#TextR1").slideUp(500);
			$("#cerrar1, #tema1").hide(500);
			})
		})
	})

	
	//segundo ejercicio
	$("#TextR2, #rel2, #tema2, #cerrar2").hide();
	$("#mate2").click(function(){
		
		$("#rel2").show(1500);

		$("#rel2").click(function(){
		$("#TextR2").slideDown(500);
		$("#cerrar2,#tema2").show(1500);
			$("#cerrar2").click(function(){
			$("#TextR2").slideUp(500);
			$("#tema2,#cerrar2").hide(500);
			})
		})
	})
	
	//tercer ejercicio
	$("#TextR3,#rel3,#tema3,#cerrar3").hide();
	$("#mate3").click(function(){
		
		$("#rel3").show(1500);

		$("#rel3").click(function(){
		$("#TextR3").slideDown(500);
		$("#cerrar3,#tema3").show(1500);
			$("#cerrar3").click(function(){
			$("#TextR3").slideUp(500);
			$("#tema3,#cerrar3").hide(500);
			})
		})
	})
	
	//cuarto ejercicio
	$("#TextR4,#rel4,#tema4,#cerrar4,#mkeyword4,#cerrarkey4").hide();
	$("#mate4").click(function(){
		
		$("#rel4").show(1500);
	
		$("#rel4").click(function(){
		$("#TextR4").slideDown(500);
		$("#cerrar4, #tema4").show(1500);
		$("#mkeyword4,#cerrarkey4").fadeToggle(1500);
		
			$("#mkeyword4").click(function(){
				$("#keyword4").css({"color":"#04cc2f","text-decoration":"underline", "font-size":"20px"});
				
				$("#cerrarkey4").click(function(){
				$("#keyword4").css({"color":"black","text-decoration":"none", "font-size":"18px"});
				})
				
			})
				
				$("#cerrar4").click(function(){
				$("#TextR4").slideUp(500);
				$("#tema4,#mkeyword4,#cerrarkey4,#cerrar4").hide();
			})
		})
	})
	
	
	//quinto ejercicio
	$("#TextR5,#rel5,#tema5,#cerrar5").hide();
	$("#mate5").click(function(){
		
		$("#rel5").show(1500);

		$("#rel5").click(function(){
		$("#TextR5").slideDown(500);
		$("#cerrar5,#tema5").show(1500);
			$("#cerrar5").click(function(){
			$("#TextR5").slideUp(500);
			$("#tema5,#cerrar5").hide(500);
			})
		})
	})
	
	//revisar el ejercicio la resolución está mal
	
	//sexto ejercicio
	$("#TextR6,#rel6,#tema6,#cerrar6,#mkeyword6,#cerrarkey6").hide();
	$("#mate6").click(function(){
		
		$("#rel6").show(1500);
	
		$("#rel6").click(function(){
		$("#TextR6").slideDown(500);
		$("#cerrar6,#tema6").show(1500);
		$("#mkeyword6,#cerrarkey6").fadeToggle(1500);
		
			$("#mkeyword6").click(function(){
				$(".keyword6").css({"color":"#04cc2f","text-decoration":"underline", "font-size":"20px"});
				
				$("#cerrarkey6").click(function(){
				$(".keyword6").css({"color":"black","text-decoration":"none", "font-size":"18px"});
				})
				
			})
				
				$("#cerrar6").click(function(){
				$("#TextR6").slideUp(500);
				$("#tema6,#mkeyword6,#cerrarkey6,#cerrar6").hide();
			})
		})
	})
	
	
		//septimo ejercicio
	$("#TextR7,#rel7,#tema7,#cerrar7,#mkeyword7,#cerrarkey7").hide();
	$("#mate7").click(function(){
		
		$("#rel7").show(1500);
	
		$("#rel7").click(function(){
		$("#TextR7").slideDown(500);
		$("#cerrar7,#tema7").show(1500);
		$("#mkeyword7,#cerrarkey7").fadeToggle(1500);
		
			$("#mkeyword7").click(function(){
				$(".keyword7").css({"color":"#04cc2f","text-decoration":"underline", "font-size":"20px"});
				
				$("#cerrarkey7").click(function(){
				$(".keyword7").css({"color":"black","text-decoration":"none", "font-size":"18px"});
				})
				
			})
				
				$("#cerrar7").click(function(){
				$("#TextR7").slideUp(500);
				$("#tema7,#mkeyword7,#cerrarkey7,#cerrar7").hide();
			})
		})
	})
	
	
	//octavo ejercicio
	$("#tema8,#Productol,#exponeg1,#cociente1,#rel8,#cerrar8").hide();
	$("button#mate8").click(function(){
		
		$("#rel8").show(1500);
	
		$("#rel8").click(function(){
			$("#tema8").show(1500);
			$("#cerrar8,.keyword8,.exponega1,#exponeg1,.Productol,#Productol,.cociente1,#cociente1").show();
			$(".keyword8").css({"color":"#217cfc", "font-size":"18px"});
			$(".exponega1,#exponeg1").css({"color":"#29cc29", "font-size":"18px"});
			$(".Productol,#Productol").css({"color":"#217cfc", "font-size":"18px"});
			$(".cociente1,#cociente1").css({"color":"#ff1e0f", "font-size":"18px"});
		
		
				$("#cerrar8").click(function(){
				$("#tema8,#Productol,#exponeg1,#exponeg1").hide(500);
				$(".keyword8,.exponega1,.Productol,.cociente1").css({"color":"black", "font-size":"18px"});
				$("#cerrar8").hide(500);
			})
		})
	})
	
	$("#pendiente1").click(function(){
	$('#pendiente1').attr({
   'style': 'display:none'
	});
	$('#pendiente2').attr({
   'style': 'display:block'
	});
	})
	
	$("#pendiente2").click(function(){
	$('#pendiente1').attr({
   'style': 'display:block'
	});
	$('#pendiente2').attr({
   'style': 'display:none'
	});
	})
	
	//9 ejercicio
	$("#TextR9,#tema9,#rel9,#resolucion9,#cerrar9").hide();
	$("#mate9").click(function(){
		
		$("#rel9").show(1500);

		$("#rel9").click(function(){
		$("#TextR9").slideDown(500);
		$("#cerrar9,#tema9").show(1500);
			$("#cerrar9").click(function(){
			$("#TextR9").slideUp(500);
			$("#tema9,#cerrar9").hide();
			})
		})
		
		
	})
	
	
	//10mo ejercicio mate
	$("#TextR10,#rel10,#tema10,#cerrar10,#mkeyword10,#cerrarkey10").hide();
	$("#mate10").click(function(){
		
		$("#rel10").show(1500);
	
		$("#rel10").click(function(){
		$("#TextR10").slideDown(500);
		$("#cerrar10,#tema10").show(1500);
		$("#mkeyword10,#cerrarkey10").fadeToggle(1500);
		
			$("#mkeyword10").click(function(){
				$(".alturaarbol").css({"color":"#04cc2f","text-decoration":"underline", "font-size":"20px"});
				
				$("#cerrarkey10").click(function(){
				$(".alturaarbol").css({"color":"black","text-decoration":"none", "font-size":"18px"});
				})
				
			})
				
				$("#cerrar10").click(function(){
				$("#TextR10").slideUp(500);
				$("#tema10,#mkeyword10,#cerrarkey10,#cerrar10").hide();
			})
		})
	})
	
	//ejercicio N°11 de mate
	
	$("#TextR11,#rel11,#tema11,#cerrar11").hide();
	$("#mate11").click(function(){
		
		$("#rel11").show(1500);
	
		$("#rel11").click(function(){
		$("#TextR11").slideDown(500);
		$("#cerrar11,#tema11").show(1500);
				
		
			$("#cerrar11").click(function(){
			$("#TextR11").slideUp(500);
			$("#tema11,#cerrar11").hide();
			})
		})
	})
	
	//ejercicio N°12 de mate
	
	$("#TextR12,#rel12,#tema12,#cerrar12").show();
	$("#mate12").click(function(){
		
		$("#rel12").show(1500);
		$("#rel12").click(function(){
		$("#TextR12").slideDown(500);
		$("#cerrar12,#tema12").show(1500);
				
		
			$("#cerrar12").click(function(){
			$("#TextR12").slideUp(500);
			$("#tema12,#cerrar12").hide();
			})
		})
	})

});

