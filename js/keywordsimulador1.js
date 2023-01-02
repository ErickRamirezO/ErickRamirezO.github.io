$(function(){

	$("#lupasoculto").hide();
	$(".tablasimulador").hide();
	$("#versimu1").hide();
	$(".Reload").hide();
	$(".barraprogreso").hide();
	$("#boxprogreso").hide();
	$("#simu1pregunta1mate").hide();
	$("#simu1pregunta2mate").hide();
	$("#simu1pregunta3mate").hide();
	$("#simu1pregunta4mate").hide();
	$("#simu1pregunta5mate").hide();
	$("#simu1pregunta6mate").hide();
	$("#simu1pregunta7mate").hide();
	$("#simu1pregunta8mate").hide();
	$("#simu1pregunta9mate").hide();
	$("#simu1pregunta10mate").hide();
	$("#simu1pregunta11mate").hide();
	$("#simu1pregunta12mate").hide();
	$("#simu1pregunta13mate").hide();
	$("#simu1pregunta1lengua").hide();
	$(".lupas").hide();
	var norespondidas = 0;
	var respondidas = 0;
			
			$("#empiezosimu1").click(function(){

			$(".tablasimulador").show(500);
			
			$("#boxprogreso").show();
			
			$("#simu1pregunta1mate").slideDown(500);
			
			$('html, body').animate({
			scrollTop: $("#simu1pregunta1mate").offset().top
			}, 1000);
				
			
			$("#empiezosimu1").hide();
			$(".lupas").slideDown(500);
						
			
			//lupas
			$("#lupamas").click(function(){
				
				$("#simu1").animate({fontSize:"+=1px"},300);
				
			});
			
			$("#lupamenos").click(function(){
				$("#simu1").animate({fontSize:"-=1px"},300);
				
			});
		
			
			$("#lupanormal").click(function(){
				$("#simu1").animate({fontSize:"17px"},300);
				
			});
			
			$("#cerrarlupas1").click(function(){
				$(".lupas").hide(500);
				$("#lupasoculto").show(500);
				
				$("#lupasoculto").click(function(){
				$(".lupas").show(500);;
				$("#lupasoculto").hide(400);;
				});
			});
		
			//lupas
			
			//preguntas
			
				$("#siguientep1s1").click(function(){
				$("#simu1pregunta2mate").slideDown(500);
				$("#simu1pregunta1mate").hide();
				
				if($(".1input").is(':checked')) {  
				$(".matec1").css({"animation-name": "cajasmate","animation-duration": "1s","animation-fill-mode": "both"});
				respondidas++;
				} else {  
				$(".matec1").css({"background":"transparent"});
				norespondidas++;
				}  
				$('html, body').animate({
								scrollTop: $("#simu1pregunta2mate").offset().top
							}, 1000);
				

				const valor = document.getElementById("progreso");
			
				valor.setAttribute("value","2");
				document.getElementById("number").innerHTML = "1";
				valor.setAttribute("title","1");
				
					$("#siguientep2s1").click(function(){
				
					$("#simu1pregunta3mate").slideDown(500);
					$("#simu1pregunta2mate").hide();
					
					if($(".2input").is(':checked')) {  
					$(".matec2").css({"animation-name": "cajasmate","animation-duration": "1s","animation-fill-mode": "both"});
					respondidas++;
					} else {  
					$(".matec2").css({"background":"transparent"});
					norespondidas++;
					}  
					
					$('html, body').animate({
																scrollTop: $("#simu1pregunta3mate").offset().top
																}, 1000);
				
					valor.setAttribute("value","3");
					document.getElementById("number").innerHTML = "2";
					valor.setAttribute("title","2");
			
						$("#siguientep3s1").click(function(){
					
						$("#simu1pregunta4mate").slideDown(500);
						$("#simu1pregunta3mate").hide();
						
						if($(".3input").is(':checked')) {  
						$(".matec3").css({"animation-name": "cajasmate","animation-duration": "1s","animation-fill-mode": "both"});
						respondidas++;
						} else {  
						$(".matec3").css({"background":"transparent"});
						norespondidas++;
						}  
						$('html, body').animate({
																scrollTop: $("#simu1pregunta4mate").offset().top
																}, 1000);
						valor.setAttribute("value","4");
						document.getElementById("number").innerHTML = "3";
						valor.setAttribute("title","3");
							
				
							$("#siguientep4s1").click(function(){
					
							$("#simu1pregunta5mate").slideDown(500);
							$("#simu1pregunta4mate").hide();
							
							if($(".4input").is(':checked')) {  
							$(".matec4").css({"animation-name": "cajasmate","animation-duration": "1s","animation-fill-mode": "both"});
							respondidas++;
							} else {  
							$(".matec4").css({"background":"transparent"});
							norespondidas++;
							}  
							$('html, body').animate({
																scrollTop: $("#simu1pregunta5mate").offset().top
																}, 1000);
				
							valor.setAttribute("value","5");
							document.getElementById("number").innerHTML = "4";
							valor.setAttribute("title","4");
				
								$("#siguientep5s1").click(function(){
					
								$("#simu1pregunta6mate").slideDown(500);
								$("#simu1pregunta5mate").hide();
								if($(".5input").is(':checked')) {  
								$(".matec5").css({"animation-name": "cajasmate","animation-duration": "1s","animation-fill-mode": "both"});
								respondidas++;
								} else {  
								$(".matec5").css({"background":"transparent"});
								norespondidas++;
								}  
								
								$('html, body').animate({
																scrollTop: $("#simu1pregunta6mate").offset().top
																}, 1000);
				
										
								valor.setAttribute("value","6");
								document.getElementById("number").innerHTML = "5";
								valor.setAttribute("title","5");
								
									$("#siguientep6s1").click(function(){
					
									$("#simu1pregunta7mate").slideDown(500);
									$("#simu1pregunta6mate").hide();
									
									if($(".6input").is(':checked')) {  
									$(".matec6").css({"animation-name": "cajasmate","animation-duration": "1s","animation-fill-mode": "both"});
									respondidas++;
									} else {  
									$(".matec6").css({"background":"transparent"});
									norespondidas++;
									} 
									$('html, body').animate({
																scrollTop: $("#simu1pregunta7mate").offset().top
																}, 1000);
	
				
									valor.setAttribute("value","7");
									document.getElementById("number").innerHTML = "6";
									valor.setAttribute("title","6");
				
										$("#siguientep7s1").click(function(){
					
										$("#simu1pregunta8mate").slideDown(500);
										$("#simu1pregunta7mate").hide();
										if($(".7input").is(':checked')) {  
										$(".matec7").css({"animation-name": "cajasmate","animation-duration": "1s","animation-fill-mode": "both"});
										respondidas++;
										} else {  
										$(".matec7").css({"background":"transparent"});
										norespondidas++;
										} 
										$('html, body').animate({
																scrollTop: $("#simu1pregunta8mate").offset().top
																}, 1000);
	
				
										valor.setAttribute("value","8");
										document.getElementById("number").innerHTML = "7";
										valor.setAttribute("title","7");
											
											
											$("#siguientep8s1").click(function(){
					
											$("#simu1pregunta9mate").slideDown(500);
											$("#simu1pregunta8mate").hide();
											if($(".8input").is(':checked')) {  
											$(".matec8").css({"animation-name": "cajasmate","animation-duration": "1s","animation-fill-mode": "both"});
											respondidas++;
											} else {  
											$(".matec8").css({"background":"transparent"});
											norespondidas++;
											} 
											$('html, body').animate({
																scrollTop: $("#simu1pregunta9mate").offset().top
														}, 1000);
	
				
											valor.setAttribute("value","9");
											document.getElementById("number").innerHTML = "8";
											valor.setAttribute("title","8");
									

				
												$("#siguientep9s1").click(function(){
					
												$("#simu1pregunta10mate").slideDown(500);
												$("#simu1pregunta9mate").hide();
												if($(".9input").is(':checked')) {  
												$(".matec9").css({"animation-name": "cajasmate","animation-duration": "1s","animation-fill-mode": "both"});
												respondidas++;
												} else {  
												$(".matec9").css({"background":"transparent"});
												norespondidas++;
												} 
												$('html, body').animate({
																scrollTop: $("#simu1pregunta10mate").offset().top
																}, 1000);
	

				
												valor.setAttribute("value","10");
												document.getElementById("number").innerHTML = "9";
												valor.setAttribute("title","9");
														 
														 
													$("#siguientep10s1").click(function(){
					
													$("#simu1pregunta11mate").slideDown(500);
													$("#simu1pregunta10mate").hide();
													if($(".10input").is(':checked')) {  
													$(".matec10").css({"animation-name": "cajasmate","animation-duration": "1s","animation-fill-mode": "both"});
													respondidas++;
													} else {  
													$(".matec10").css({"background":"transparent"});
													norespondidas++;
													} 
													
													$('html, body').animate({
																scrollTop: $("#simu1pregunta11mate").offset().top
																}, 1000);
	
													
													valor.setAttribute("value","11");
													document.getElementById("number").innerHTML = "10";
													valor.setAttribute("title","10");

														$("#siguientep11s1").click(function(){
					
														$("#simu1pregunta12mate").slideDown(500);
														$("#simu1pregunta11mate").hide();
														if($(".11input").is(':checked')) {  
														$(".matec11").css({"animation-name": "cajasmate","animation-duration": "1s","animation-fill-mode": "both"});
														respondidas++;
														} else {  
														$(".matec11").css({"background":"transparent"});
														norespondidas++;
														} 
														$('html, body').animate({
																scrollTop: $("#simu1pregunta12mate").offset().top
																}, 1000);
	
														valor.setAttribute("value","12");
														document.getElementById("number").innerHTML = "11";
														valor.setAttribute("title","11");
									
															$("#siguientep12s1").click(function(){
					
															$("#simu1pregunta13mate").slideDown(500);
															$("#simu1pregunta12mate").hide();
															if($(".12input").is(':checked')) {  
															$(".matec12").css({"animation-name": "cajasmate","animation-duration": "1s","animation-fill-mode": "both"});
															respondidas++;
															} else {  
															$(".matec12").css({"background":"transparent"});
															norespondidas++;
															} 
															
															$('html, body').animate({
																scrollTop: $("#simu1pregunta13mate").offset().top
																}, 1000);

															valor.setAttribute("value","13");
															document.getElementById("number").innerHTML = "12";
															valor.setAttribute("title","12");
									
																$("#siguientep13s1").click(function(){
					
																$("#simu1pregunta1lengua").slideDown(500);
																$("#simu1pregunta13mate").slideUp(500);
																if($(".13input").is(':checked')) {  
																$(".matec13").css({"animation-name": "cajasmate","animation-duration": "1s","animation-fill-mode": "both"});
																respondidas++;
																} else {  
																$(".matec13").css({"background":"transparent"});
																norespondidas++;
																} 
																
															$('html, body').animate({
																scrollTop: $("#simu1pregunta1lengua").offset().top
																}, 1000);

				
																valor.setAttribute("value","14");
																document.getElementById("number").innerHTML = "13";
																valor.setAttribute("title","13");
									
																$("#versimu1").slideDown(500);
																$("#versimu1").click(function(){
																$("#simu1pregunta10mate").slideUp(500);
																$(".barraprogreso").slideDown(500);
																document.getElementById("contestadass1").innerHTML = respondidas;
																document.getElementById("nocontestadass1").innerHTML = norespondidas;
																$('html, body').animate({
																scrollTop: $("#PUNTAJESIMU1").offset().top
																}, 1000);
																})
				
																return false;
								
				
										
											
																})
											
															})
										
														})

													})
								
				
										
										
												})
								
				
										
										
											})
										
										})
										
										
										
										
								
									})
				
								})
				
				
							})

						})	
			//preguntas
			
					})
				})
		
			})
});


