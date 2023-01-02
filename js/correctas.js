function correctas() {
  swal.fire({
	title:"&#128161; Respuesta corrrecta! &#128161;",
	icon:"success",
	allowOutsideClick:false,
	allowEscapeKey:false,
	allowEnterKey:false,
	stopKeydownPropagation:false,
	showCloseButton:false,
	
});
}


function incorrectas() {
  swal.fire({
	title:"Respuesta incorrrecta &#10060;",
	icon:"error",
	timer:"2000",
	timerProgressBar:true,
	allowOutsideClick:false,
	allowEscapeKey:false,
	allowEnterKey:false,
	stopKeydownPropagation:false,
});
}





