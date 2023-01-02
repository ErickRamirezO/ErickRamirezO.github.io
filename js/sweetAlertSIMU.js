
Swal.fire({
	title:"Bienvenido al simulador",
	html:"<span style='font-size:15px!important;'>Vas a tener al azar <b>170 preguntas</b> de las diferentes competencias y habilidades que evalua el examen <b class='blue-text'>TRANSFORMAR</b> como son:<ul style='list-style-type:circle!important'><li>Razonamiento Numérico</li><li>Razonamiento Verbal</li><li>Razonamiento Lógico</li><li>Atención y Concentración</li></ul><b>*TIENE UNA DURACIÓN DE UNA HORA, SUERTE*</b><br><br>Al darle al botón EMPEZAR inicia la cuenta regresiva y se pondrá en pantalla completa para una mejor experiencia.<br>Recomendamos hacerlo desde computadora</span><br><br><span style='font-size:10px'>*Se guardará este dato para futuros intentos en el simulador*</span>",
	icon:"info",
	input: 'text',
	allowOutsideClick:false,
	allowEscapeKey:false,
	allowEnterKey:false,
	stopKeydownPropagation:false,
	confirmButtonColor:"#026dd1",
	footer:	"<b>Pilas, tu canal de estudios</b>",
	inputPlaceholder:"Escribe tu nombre",
	inputAttributes:{
		pattern:"[A-Za-z0-9]{15}"
	},
	inputValidator: (value) => {
    if (!value) {
      return 'Completa el campo por favor'
    }
	}
}).then((result) => {
		if(result.isConfirmed){
			
			Webcam.set({
			width: 100,
			height: 100,
			image_format: 'jpeg',
			jpeg_quality: 90
			});
				Webcam.attach( '#videocam' );
				Webcam.on( 'live', function() {
				$("#empiezosimu2").show(550);
							$("#empiezosimu2").after('<p class="empiezotext center-align"><b>Gracias, disfruta del simulador &#128521;</b></p>');
							$(".permisowebcam").remove();
				});
			Webcam.on( 'error', function(err) {
				$(".permisowebcam, .evidencia_foto1").remove();
				$("#empiezosimu2").after('<p class="permisowebcam center-align">Por favor recarga la página y permite el acceso a la cámara <i class="material-icons small">videocam</i> para una mejor experiencia en nuestro simulador<br>Si no quieres el uso de la cámara da click aquí</p><button class="sincamara waves-effect waves-light btn orange lighten-2 black-text" onclick="sincamara()">Usar simulador sin cámara</button>');
		anime({
			targets: '.permisowebcam',
			translateX:[-100,0],
			opacity:[0,1],
			easing: 'easeOutQuart',
			duration:1000
			});
				} );
			$("#empiezosimu2").after('<p class="permisowebcam center-align">Por favor permite el acceso a la cámara <i class="material-icons small">videocam</i> para una mejor experiencia en nuestro simulador</p>');
		} if (result.value) {
		var nombreuser = result.value;
		$(".nombreuser").addClass("truncate");
		$(".nombreuser").html("<i class='tiny material-icons'>person</i> " + nombreuser);
		$(".tableimp thead tr:nth-child(1) th").html("<h6 style='font-family:Arvo'>Nombres y apellidos:  "+nombreuser+"</h6>");
		localStorage.setItem('username', nombreuser);
		localStorage.setItem('usernameif', 'true');
		} else{
		localStorage.setItem('username','false');
		} 
		
})


		if(localStorage.getItem('usernameif') === "true"){
		$(".nombreuser").html("<i class='tiny material-icons'>person</i> " + localStorage.getItem('username', "nombreuser"));
		$(".nombreuser").addClass("truncate");
		$(".tableimp thead tr:nth-child(1) th").html("<h6 style='font-family:Arvo'>Nombres y apellidos: "+localStorage.getItem('username', "nombreuser")+"</h6>");
			Swal.fire({
			title:"Bienvenido al simulador",
			html:"<span style='font-size:15px!important;'>Vas a tener al azar <b>170 preguntas</b> de las diferentes competencias y habilidades que evalua el examen <b class='blue-text'>TRANSFORMAR</b> como son:<ul style='list-style-type:circle'><li>Razonamiento Numérico</li><li>Razonamiento Verbal</li><li>Razonamiento Lógico</li><li>Atención y Concentración</li></ul><b>*TIENE UNA DURACIÓN DE UNA HORA, SUERTE*</b><br><br>Al darle al botón EMPEZAR inicia la cuenta regresiva y se pondrá en pantalla completa para una mejor experiencia.<br>Recomendamos hacerlo desde computadora</span><br><br><span style='font-size:10px'>*Ya se guardó el username para los simuladores*</span>",
			icon:"info",
			allowOutsideClick:false,
			allowEscapeKey:false,
			allowEnterKey:false,
			stopKeydownPropagation:false,
			footer:	"<b>Pilas, tu canal de estudios</b>",
			showConfirmButton:true,
			showDenyButton:true,
			denyButtonText:"Cambiar el nombre",
			denyButtonColor:"#026dd1",
			confirmButtonColor:"#026dd1"
			}).then((result) => {
				if (result.isDenied) {
					Swal.fire({
						title:"Ingresa el nuevo username",
						icon:"info",
						input:'text',
					    showConfirmButton:true,
						allowOutsideClick:false,
						allowEscapeKey:false,allowEnterKey:false,
						inputValidator: (value) => {
						if (!value) {
						return 'Completa el campo por favor'
						}
						}
					}).then((result) => {
						if(result.isConfirmed){
							Swal.fire({
							title:"Se cambió el nombre exitosamente",
							icon:"success",
							timer:"2000",
							timerProgressBar:true,
							allowOutsideClick:false,
							allowEscapeKey:false,
							allowEnterKey:false,
							})
							var nombreuser = result.value;
							$(".nombreuser").addClass("truncate");
							$(".nombreuser").html("<i class='tiny material-icons'>person</i> " + nombreuser);
							$(".tableimp thead tr:nth-child(1) th").html("<h6 style='font-family:Arvo'>Nombres y apellidos:  "+nombreuser+"</h6>");
							localStorage.setItem('username', nombreuser);
							localStorage.setItem('usernameif', 'true');
							Webcam.set({
								width: 100,
								height: 100,
								image_format: 'jpeg',
								jpeg_quality: 90
							});				
							Webcam.attach( '#videocam' );
							Webcam.on( 'live', function() {
							$("#empiezosimu2").show(550);
							$("#empiezosimu2").after('<p class="empiezotext center-align"><b>Gracias, disfruta del simulador &#128521;</b></p>');
							$(".permisowebcam").remove();
							} );
								Webcam.on( 'error', function(err) {
								$(".permisowebcam, .evidencia_foto1").remove();
								$("#empiezosimu2").after('<p class="permisowebcam center-align">Por favor recarga la página y permite el acceso a la cámara <i class="material-icons small">videocam</i> para una mejor experiencia en nuestro simulador<br>Si no quieres el uso de la cámara da click aquí</p><button class="sincamara waves-effect waves-light btn orange lighten-2 black-text" onclick="sincamara()">Usar simulador sin cámara</button>');
								anime({
									targets: '.permisowebcam',
									translateX:[-100,0],
									opacity:[0,1],
									easing: 'easeOutQuart',
									duration:1000
								});
								} );
							
						} else {
							console.log("");
							localStorage.setItem('usernameif', 'false');
						}
					})
				} else if(result.isConfirmed){
						Webcam.set({
			width: 100,
			height: 100,
			image_format: 'jpeg',
			jpeg_quality: 90
			});
		Webcam.attach( '#videocam' );
		Webcam.on( 'live', function() {
		$("#empiezosimu2").show(550);
							$("#empiezosimu2").after('<p class="empiezotext center-align"><b>Gracias, disfruta del simulador &#128521;</b></p>');
							$(".permisowebcam").remove();
		} );
		Webcam.on( 'error', function(err) {
		$(".permisowebcam, .evidencia_foto1").remove();
		$("#empiezosimu2").after('<p class="permisowebcam center-align">Por favor recarga la página y permite el acceso a la cámara <i class="material-icons small">videocam</i> para una mejor experiencia en nuestro simulador<br>Si no quieres el uso de la cámara da click aquí</p><button class="sincamara waves-effect waves-light btn orange lighten-2 black-text" onclick="sincamara()">Usar simulador sin cámara</button>');
				anime({
				targets: '.permisowebcam',
				translateX:[-100,0],
				opacity:[0,1],
				easing: 'easeOutQuart',
				duration:1000
				});
			});
			
				}$("#empiezosimu2").after('<p class="permisowebcam center-align">Por favor permite el acceso a la cámara <i class="material-icons small">videocam</i> para una mejor experiencia en nuestro simulador</p>');
				
			})
		
		} else{
		console.log("");
		}
		
		function sincamara(){
			$("#empiezosimu2").show(550);
			$("#empiezosimu2").after('<p class="empiezotext center-align"><b>Gracias, disfruta del simulador &#128521;</b></p>');
			$(".sincamara").attr("onclick","");
			$(".sincamara").remove();
			$(".permisowebcam").remove();
			$("#videocam").remove();
			Webcam.reset();
		}
