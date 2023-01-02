function verificarrespuestas(){
				
var total = 14;
var puntos = 0;
var totalpuntosmil = 1000;
var matematica = 13;
var porcentajemate = 0;
var lenguajemax = 32;
var porcentajelenguaje = 0;
var cientifico = 32;
var porcentajecientifico = 0;
var social = 18;
var porcentajesocial = 0;
var aciertos = 0;
var desaciertos = 0;

var myform = document.forms["Formasimulador1"];
var respuestas = ["10", "10", "15", "20", "20", "20", "10", "20", "15", "5", "15", "10","15","5"];
	
	for(var i = 1; i <= total; i++){
		if(myform["p" + i].value === respuestas[i-1]){	
		var a = parseInt(respuestas[i-1]);
		puntos += a;
		aciertos += 1;
		} else if(myform["p" + i].value != respuestas[i-1]){	
		desaciertos += 1;}
	} 
	
	
	//for mate
	for(var m = 1; m <= matematica; m++){
	if(myform["p" + m].value === respuestas[m-1]){
	porcentajemate += 8;

		}if(porcentajemate === 8 ){
		document.getElementById("DominioMatemáticos1").innerHTML = "8% Tienes que reforzar tus conocimientos";
		$(".DominioMatemático").css({"animation-name": "dominios8","animation-duration": "2s","animation-fill-mode": "both"});
		}else if(porcentajemate === 16 ){
		document.getElementById("DominioMatemáticos1").innerHTML = "16% Practica más";
		$(".DominioMatemático").css({"animation-name": "dominios16","animation-duration": "2s","animation-fill-mode": "both"});
		}else if(porcentajemate === 24 ){
		document.getElementById("DominioMatemáticos1").innerHTML = "24% Practica más";
		$(".DominioMatemático").css({"animation-name": "dominios24","animation-duration": "2s","animation-fill-mode": "both"});
		}else if(porcentajemate === 32 ){
		document.getElementById("DominioMatemáticos1").innerHTML = "32% Practica más";
		$(".DominioMatemático").css({"animation-name": "dominios32","animation-duration": "2s","animation-fill-mode": "both"});
		}else if(porcentajemate === 40 ){
		document.getElementById("DominioMatemáticos1").innerHTML = "40% Practica más";
		$(".DominioMatemático").css({"animation-name": "dominios40","animation-duration": "2s","animation-fill-mode": "both"});
		}else if(porcentajemate === 48 ){
		document.getElementById("DominioMatemáticos1").innerHTML = "48% Practica más";
		$(".DominioMatemático").css({"animation-name": "dominios48","animation-duration": "2s","animation-fill-mode": "both"});
		}else if(porcentajemate === 56 ){
		document.getElementById("DominioMatemáticos1").innerHTML = "56% Sigue así solo es cuestión de práctica";
		$(".DominioMatemático").css({"animation-name": "dominios56","animation-duration": "2s","animation-fill-mode": "both"});
		}else if(porcentajemate === 74 ){
		document.getElementById("DominioMatemáticos1").innerHTML = "74% Sigue así solo es cuestión de práctica";
		$(".DominioMatemático").css({"animation-name": "dominios74","animation-duration": "2s","animation-fill-mode": "both"});
		}else if(porcentajemate === 80 ){
		document.getElementById("DominioMatemáticos1").innerHTML = "80% Ya vas mejorando";
		$(".DominioMatemático").css({"animation-name": "dominios80","animation-duration": "2s","animation-fill-mode": "both"});
		}else if(porcentajemate === 88 ){
		document.getElementById("DominioMatemáticos1").innerHTML = "88% Genial ya vas mejorando";
		$(".DominioMatemático").css({"animation-name": "dominios88","animation-duration": "2s","animation-fill-mode": "both"});
		}else if(porcentajemate === 96 ){
		document.getElementById("DominioMatemáticos1").innerHTML = "96% Genial ya vas mejorando";
		$(".DominioMatemático").css({"animation-name": "dominios96","animation-duration": "2s","animation-fill-mode": "both"});
		}else if(porcentajemate === 104 ){
		document.getElementById("DominioMatemáticos1").innerHTML = "100% PERFECTO TUS CONOCIMIENTOS SON BUENOS &#128293;";
		$(".DominioMatemático").css({"animation-name": "dominios100","animation-duration": "2s","animation-fill-mode": "both"});
		}else if(myform["p" + m].value != respuestas[m-1]){	
		desaciertos += 1;
		}
	}
	/*
	for(var l = 14; l <= lenguajemax; l++){
	if(myform["p" + l].value === respuestas[l-1]){
	porcentajelenguaje += 10;

		}if(porcentajelenguaje === 10 ){
		document.getElementById("DominioLingüístico1").innerHTML = "10% Tienes que reforzar tus conocimientos";
		$(".DominioLingüístico").css({"animation-name": "dominios25","animation-duration": "2s","animation-fill-mode": "both"});
		}else if(porcentajelenguaje === 20 ){
		document.getElementById("DominioLingüístico1").innerHTML = "20% Practica más";
		$(".DominioLingüístico").css({"animation-name": "dominios50","animation-duration": "2s","animation-fill-mode": "both"});
		}else if(porcentajelenguaje === 75 ){
		document.getElementById("DominioLingüístico1").innerHTML = "75% Sigue así practica un poco más";
		$(".DominioLingüístico").css({"animation-name": "dominios75","animation-duration": "2s","animation-fill-mode": "both"});
		}else if(porcentajelenguaje === 100 ){
		document.getElementById("DominioLingüístico1").innerHTML = "100% PERFECTO TUS CONOCIMIENTOS SON BUENOS &#128293;";
		$(".DominioLingüístico").css({"animation-name": "dominios100","animation-duration": "2s","animation-fill-mode": "both"});
		}
	}*/
	
	var PUNTAJESIMU1 = document.getElementById("PUNTAJESIMU1");
PUNTAJESIMU1.innerHTML = "<p class='center-align' style='font-family:Arvo'>Obtuvistes <span class='blue-text'>"+ puntos +"</span> de <span>"+ totalpuntosmil +" puntos</span>" + "<br><b class='green-text'>Aciertos:</b> " +aciertos + "<br>" + "<b class='red-text'>Desaciertos:</b> " + desaciertos + "<br>Tu tiempo fue de: <br>";	
	return false;
	
}


