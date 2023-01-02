$("#tiemporestantes1").hide();
$("#cuentaregresiva").hide(500);
$("#empiezosimu1").click(function(){
	$("#cuentaregresiva").show(500);
		var seconds = 7199;	
		var intentocopia= 0;
function timer(){

	var days  = Math.floor(seconds/24/60/60); 	
    var hoursLeft = Math.floor((seconds) - (days*86400)); 
    var hours  = Math.floor(hoursLeft/3600); 
    var minutesLeft = Math.floor((hoursLeft) - (hours*3600)); 
    var minutes  = Math.floor(minutesLeft/60); 
    var remainingSeconds = seconds % 60; 
    if (remainingSeconds < 10) { 
     remainingSeconds = "0" + remainingSeconds; 
    } 
    document.getElementById('cuentaregresivatext').innerHTML = "&#9201;&#65039;" + hours + ":" + minutes + ":" + remainingSeconds;

window.addEventListener("keyup", function(e) {
  if (e.keyCode == 44) {
	clearInterval(countdownTimer);
    swal.fire({
	title:"Se detectó un intento de copia",
	html:"<b>CONSEJO</b> No intentes tomar capturas de pantalla o salirte del programa durante tu examen",
	icon:"warning",
	allowOutsideClick:false,
	allowEscapeKey:false,
	allowEnterKey:false,
	stopKeydownPropagation:false,
	showCloseButton:false,
	showConfirmButton:true,
	footer:"<b class='center-align'>Da click en OK para intentar de nuevo </b>",
	
	}).then((result) => {
		if (result.isConfirmed) {
		location.reload();
		intentocopia++;
		} else{
		intentocopia++;
		} 

	});
}
});

window.addEventListener("keypress", function(event){
    if (event.keyCode == 13){
        event.preventDefault();
    }
}, false);


	if (seconds == 0) { 
	clearInterval(countdownTimer); 
	 $(".inhabilitar").attr("disabled", "");
	 $("#versimu1").show(500);
	 $(".barraprogreso").show(500);
	 $(".Reload").show(500);
	 $(".Reload").click(function(){
		 location.reload();
	 })
	 
	swal.fire({
	title:"Se terminó tu tiempo en el simulador",
	html:"No se permiten más respuestas",
	icon:"warning",
	allowOutsideClick:false,
	allowEscapeKey:false,
	allowEnterKey:false,
	stopKeydownPropagation:false,
	showCloseButton:true,
	
	});
	
	 
    }else {

			
		$("#versimu1").click(function(){
		$("#tiemporestantes1").show();
		if(seconds >= 6600){
		 document.getElementById('tiemporestantes1').innerHTML = "&#9201;&#65039;" + hours + ":" + minutes + ":" + remainingSeconds + "<br><div style='background-color:white;border:2px solid #1976D2' class='hoverable'><b class='red-text'>CONSEJO</b><br> <b>Distribuye bien el tiempo para todos los dominios</b></div>";
		 clearInterval(countdownTimer);
		 $(".Reload").show(500);
			$(".Reload").click(function(){
		 location.reload();
			})
			
		 } else if(seconds < 6600){
		 document.getElementById('tiemporestantes1').innerHTML = "&#9201;&#65039;" + hours + ":" + minutes + ":" + remainingSeconds + "<br><div style='background-color:white;border:2px solid #1976D2' class='hoverable'><b class='red-text'>CONSEJO</b><br> <b>NO MEMORICES LAS RESPUESTAS</b> porque puede que cambien los datos del ejercicio o la pregunta, incluso el orden de las respuestas<br> No te confies</div>";
		 clearInterval(countdownTimer);
				$(".Reload").show(500);
				$(".Reload").click(function(){
				location.reload();
				})
		 
		 } else {
			 document.getElementById('tiemporestantes1').innerHTML = "&#9201;&#65039;" + hours + ":" + minutes + ":" + remainingSeconds;
			clearInterval(countdownTimer);
			
				$(".Reload").show(500);
				$(".Reload").click(function(){
				location.reload();
				})
		 }
		})
	 
     seconds--; 
    }  
}//termina function
	var countdownTimer = setInterval(timer, 1000); 			
	
 });