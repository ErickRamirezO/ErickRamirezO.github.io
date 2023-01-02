
$(".iniciohide, .numerocedula").hide(1);
//iniciohide clase, cerrarmenu-.simu2siguientel, .simu2siguientec, .simu2siguientes no hay
function cerraravisolupas() {
	$('.tap-target').tapTarget('close');
	sessionStorage.setItem('cerraravisolupas', "true");
}

let consejos = [
	{ consejo: "<div style='background-color:white;border:2px solid #1976D2' class='hoverable consejobox'><b class='red-text'>CONSEJO</b><br> <b>Distribuye bien el tiempo para todos los dominios recuerda que tienes 1 hora</b></div>" },
	{ consejo: "<div style='background-color:white;border:2px solid #1976D2' class='hoverable consejobox'><b class='red-text'>CONSEJO</b><br> <b>NO MEMORICES LAS RESPUESTAS</b> porque puede que cambien los datos del ejercicio o la pregunta, incluso el orden de las respuestas<br> No te confíes</div" },
	{ consejo: "<div style='background-color:white;border:2px solid #1976D2' class='hoverable consejobox'><b class='red-text'>CONSEJO</b><br> <b>No te quedes mucho tiempo en una pregunta, deja en blanco y avanza a la siguiente</b></div" },
	{ consejo: "<div style='background-color:white;border:2px solid #1976D2' class='hoverable'><b class='red-text'>CONSEJO</b><br><b>No dejes preguntas sin responder, tienes el 25% de probabilidad de acertar, la suerte puede estar de tu lado y saques un buen puntaje</b></div" },
	{ consejo: "<div style='background-color:white;border:2px solid #1976D2' class='hoverable consejobox'><b class='red-text'>CONSEJO</b><br> <b>ENTIENDE cómo resolver los ejercicios</b><br>Así estás preparado para cualquier cambio en las futuras preguntas</div" }
]

let quiz = [

	{
		pregunta: 'La posición vertical <b> y </b> de un objeto que se desplaza con un movimiento oscilatorio está expresada en función de la posición horizontal <b>x</b> por medio de la función:<br><br><fmath alttext="y(x) = 4sen(2x)-5" display="block" class="ma-block"><mrow><mrow><mi class="fm-mi-length-1" mathvariant="italic">y</mi><mrow><mo class="fm-mo-Luc">(</mo><mi class="fm-mi-length-1" mathvariant="italic">x</mi><mo class="fm-mo-Luc">)</mo></mrow></mrow><mo class="fm-infix-loose">=</mo><mrow><mrow><mrow><mrow><mrow><mn>4</mn><mi class="fm-mi-length-1" mathvariant="italic">s</mi></mrow><mi class="fm-mi-length-1" mathvariant="italic">e</mi></mrow><mi class="fm-mi-length-1" mathvariant="italic">n</mi></mrow><mrow><mo class="fm-mo-Luc">(</mo><mrow><mn>2</mn><mi class="fm-mi-length-1" mathvariant="italic">x</mi></mrow><mo class="fm-mo-Luc">)</mo></mrow></mrow><mo class="fm-infix">−</mo><mn>5</mn></mrow></mrow></fmath><br><br>Donde <b>x</b> y <b>y</b> están en metros. Con base en esta información, calcule el recorrido de esta función.<br><br>',
		opcion: ['[-9;-1]', ']-4;4[', '[-4;4]', ']-9;-1['],
		respuesta: 1,
	},
	{
		pregunta: 'Una institución educativa del Centro de Quito tiene planificado crear una dieta saludable para los estudiantes, por lo que decide aplicar una encuesta para saber cuáles son las frutas que tendrán una buena o mala aceptación. Además, se ha establecido que las frutas que se incluirán en el menú del bar escolar serán aquellas que obtengan un porcentaje mayor o igual que 20. Los resultados de este estudio se presentan en la gráfica.<br><br><div id="canvas-holder" style="width:28%;margin:auto;"><canvas id="myChart" width="200px" height="200px"></canvas></div><script> var ctx = document.getElementById("myChart"); var myPieChart = new Chart(ctx, {    type: "pie",    data: {    datasets: [{	 backgroundColor: ["rgb(163, 73, 164)","rgb(247, 223, 101)","rgb(255, 122, 20)","rgb(255, 124, 120)","rgb(83, 162, 252)"],            borderColor: "rgb(0,0,0)",        data: [7, 17, 20,23,33],    }],    labels: [        "Mora",        "Plátanos",        "Naranjas",        "Manzanas",        "Frutillas"    ],fontColor: "rgb(0, 0, 0)"}, options:{		responsive:true,	legend: {            display: true,            labels: {                fontColor: "rgb(0, 0, 0)",				fontSize:16,				fontFamily:"Arvo"				}        },	animation: {            duration: 2000,			easing:"easeOutBounce"        },		title: {            display: true,            text: "Encuesta bar escolar",			fontSize:26,			fontFamily:"Arvo"        }	}});</script>',
		opcion: ['[-9;-1]', ']-4;4[', '[-4;4]', ']-9;-1['],
		respuesta: 1,
	},
	{
		pregunta: 'En el centro meterológico de una ciudad se estudia el clima mediante la ecuación:<br><br><b><fmath alttext=" log A = log B - Log C^T" display="block" class="ma-block"><mrow><mrow><mrow><mrow><mi class="fm-mi-length-1" mathvariant="italic">l</mi><mi class="fm-mi-length-1" mathvariant="italic">o</mi></mrow><mi class="fm-mi-length-1" mathvariant="italic">g</mi></mrow><mi class="fm-mi-length-1" mathvariant="italic">A</mi></mrow><mo class="fm-infix-loose">=</mo><mrow><mrow><mrow><mrow><mi class="fm-mi-length-1" mathvariant="italic">l</mi><mi class="fm-mi-length-1" mathvariant="italic">o</mi></mrow><mi class="fm-mi-length-1" mathvariant="italic">g</mi></mrow><mi class="fm-mi-length-1" mathvariant="italic">B</mi></mrow><mo class="fm-infix">−</mo><mrow><mrow><mrow><mi class="fm-mi-length-1" mathvariant="italic">L</mi><mi class="fm-mi-length-1" mathvariant="italic">o</mi></mrow><mi class="fm-mi-length-1" mathvariant="italic">g</mi></mrow><msup><mi class="fm-mi-length-1" mathvariant="italic">C</mi><span class="fm-script fm-inline" style="vertical-align: 0.7em;"><mi class="fm-mi-length-1" mathvariant="italic">T</mi></span></msup></mrow></mrow></mrow></fmath></b><br><br>Donde<br><br>A: altura de la ciudad respecto al nivel del mar (metros)<br>B: cantidad de precipitaciones (litros)<br>C: cantidad de CO<sub>2</sub> (partes por millón)<br>T: temperatura media de la ciudad (kelvin)<br><br>Con base en a información, identifique la expresión con la que se obtiene la altura de la ciudad respecto al nivel del mar.<br><br>',
		opcion: ['A=B-TC', 'A=B-C<sup>T</sup>', 'A=B/TC', 'A=B/C<sup>T</sup>'],
		respuesta: 4,
	},
	{
		pregunta: 'En un estudio dinámico del movimiento de una pelota de baloncesto se Obtuvo la ecuación de su trayectoria como una parábola, donde su análisis se hizo en un dominio de [0;6]m en la horizontal. <br><br><b><fmath alttext="y=-x^2+ 8x - 12" display="block" class="ma-block"><mrow><mi class="fm-mi-length-1" mathvariant="italic">y</mi><mo class="fm-infix-loose">=</mo><mrow><mrow><mrow><mo class="fm-prefix-tight">−</mo><msup><mi class="fm-mi-length-1" mathvariant="italic">x</mi><span class="fm-script fm-inline" style="vertical-align: 0.7em;"><mn>2</mn></span></msup></mrow><mo class="fm-infix">+</mo><mrow><mn>8</mn><mi class="fm-mi-length-1" mathvariant="italic">x</mi></mrow></mrow><mo class="fm-infix">−</mo><mn>12</mn></mrow></mrow></fmath></b><br><br>Determine el conjunto de valores del recorrido de la función que permite analizar el desplazamiento vertical.<br><br>',
		opcion: [']-12;4[', '[-12;0]', ']-12;0[', '[-12;4]'],
		respuesta: 4,
	},
	{
		pregunta: 'Se tiene un circuito electrónico, cuya salida de voltaje se representa en la figura:<br><br><img src="mateEAES/voltaje2.png" alt="voltaje simulador" class="voltaje1" style="height:auto;width:45%"><br><br>Identifique el tiempo, en segundos, que tardará la onda en completar un ciclo cuando la señal de voltaje se haya estabilizado.<br><br>',
		opcion: ['40', '50', '30', '80'],
		respuesta: 1,
	},

	{
		pregunta: 'Con base en las rectas, identifique la afirmación correcta <br><br><fmath alttext="r_1: =8x - 5" display="block" class="ma-block"><mrow><msub><mi class="fm-mi-length-1" mathvariant="italic">r</mi><span class="fm-script fm-inline" style="vertical-align: -0.5em;"><mn>1</mn></span></msub><mo class="fm-infix-loose">:</mo><mrow><mo class="fm-infix-loose">=</mo><mrow><mrow><mn>8</mn><mi class="fm-mi-length-1" mathvariant="italic">x</mi></mrow><mo class="fm-infix">−</mo><mn>5</mn></mrow></mrow></mrow></fmath> <br><fmath alttext="r_2: y=8x - 1" display="block" class="ma-block"><mrow><msub><mi class="fm-mi-length-1" mathvariant="italic">r</mi><span class="fm-script fm-inline" style="vertical-align: -0.5em;"><mn>2</mn></span></msub><mo class="fm-infix-loose">:</mo><mrow><mi class="fm-mi-length-1" mathvariant="italic">y</mi><mo class="fm-infix-loose">=</mo><mrow><mrow><mn>8</mn><mi class="fm-mi-length-1" mathvariant="italic">x</mi></mrow><mo class="fm-infix">−</mo><mn>1</mn></mrow></mrow></mrow></fmath><br><fmath alttext="r_3: y=-1/8x - 1" display="block" class="ma-block"><mrow><msub><mi class="fm-mi-length-1" mathvariant="italic">r</mi><span class="fm-script fm-inline" style="vertical-align: -0.5em;"><mn>3</mn></span></msub><mo class="fm-infix-loose">:</mo><mrow><mi class="fm-mi-length-1" mathvariant="italic">y</mi><mo class="fm-infix-loose">=</mo><mrow><mrow><mo class="fm-prefix-tight">−</mo><mrow><span mtagname="mfrac" style="vertical-align: 0em;"><span class="fm-vert fm-frac"><table><tbody><tr><td class="fm-num-frac fm-inline"><mn>1</mn></td></tr><tr><td class="fm-den-frac fm-inline"><mn>8</mn></td></tr></tbody></table></span></span><mi class="fm-mi-length-1" mathvariant="italic">x</mi></mrow></mrow><mo class="fm-infix">−</mo><mn>1</mn></mrow></mrow></mrow></fmath><br><fmath alttext="r_4: y=1/8x - 5" display="block" class="ma-block"><mrow><msub><mi class="fm-mi-length-1" mathvariant="italic">r</mi><span class="fm-script fm-inline" style="vertical-align: -0.5em;"><mn>4</mn></span></msub><mo class="fm-infix-loose">:</mo><mrow><mi class="fm-mi-length-1" mathvariant="italic">y</mi><mo class="fm-infix-loose">=</mo><mrow><mrow><span mtagname="mfrac" style="vertical-align: 0em;"><span class="fm-vert fm-frac"><table><tbody><tr><td class="fm-num-frac fm-inline"><mn>1</mn></td></tr><tr><td class="fm-den-frac fm-inline"><mn>8</mn></td></tr></tbody></table></span></span><mi class="fm-mi-length-1" mathvariant="italic">x</mi></mrow><mo class="fm-infix">−</mo><mn>5</mn></mrow></mrow></mrow></fmath><br><br>',
		opcion: ['A) La r<sub>1 </sub> y la r<sub>4 </sub> son rectas perpendiculares entre sí', 'B) La r<sub>1 </sub> y la r<sub>2 </sub> son rectas perpendiculares entre sí', 'C) La r<sub>2 </sub> y la r<sub>3 </sub> son rectas perpendiculares entre sí', 'D) La r<sub>3 </sub> y la r<sub>4 </sub> son rectas perpendiculares entre sí'],
		respuesta: 3,
	},
	{
		pregunta: 'Al realizar estudios en las mareas producidas por el cambio climático, se estableció que una ola está dada mediante la función: <b><fmath alttext="f(𝑥)= {sin(𝑥) − 7} / {sin(x) –  2} " class="fm-inline"><mrow><mrow><mi class="fm-mi-length-1" mathvariant="italic" style="padding-right: 0.44ex;">f</mi><mrow><mo class="fm-mo-Luc">(</mo><mi mathvariant="normal">𝑥</mi><mo class="fm-mo-Luc">)</mo></mrow></mrow><mo class="fm-infix-loose">=</mo><span mtagname="mfrac" style="vertical-align: 0em;"><span class="fm-vert fm-frac"><table><tbody><tr><td class="fm-num-frac fm-inline"><mrow><mrow><mrow><mrow><mi class="fm-mi-length-1" mathvariant="italic">s</mi><mi class="fm-mi-length-1" mathvariant="italic">i</mi></mrow><mi class="fm-mi-length-1" mathvariant="italic">n</mi></mrow><mrow><mo class="fm-mo-Luc">(</mo><mi mathvariant="normal">𝑥</mi><mo class="fm-mo-Luc">)</mo></mrow></mrow><mo class="fm-infix">−</mo><mn>7</mn></mrow></td></tr><tr><td class="fm-den-frac fm-inline"><mrow><mrow><mrow><mrow><mrow><mi class="fm-mi-length-1" mathvariant="italic">s</mi><mi class="fm-mi-length-1" mathvariant="italic">i</mi></mrow><mi class="fm-mi-length-1" mathvariant="italic">n</mi></mrow><mrow><mo class="fm-mo-Luc">(</mo><mi class="fm-mi-length-1" mathvariant="italic">x</mi><mo class="fm-mo-Luc">)</mo></mrow></mrow><mi class="fm-mi-length-1" mathvariant="italic">–</mi></mrow><mn>2</mn></mrow></td></tr></tbody></table></span></span></mrow></fmath></b> Si el fondo marino es considerado como punto de referencia, la ola ha alcanzado una altura de metros durante el estudio. <br><br>Determine el conjunto de valores del recorrido de la función que permite analizar el desplazamiento vertical. <br><br>',
		opcion: ['6<!--mareasfuncion-->', '-6<!--mareasfuncion-->', '8<!--mareasfuncion-->', '7<!--mareasfuncion-->'],
		respuesta: 1,
	},
	{
		pregunta: 'Para comprobar las leyes de la potenciación, el profesor propone tres ejemplos en los cuales se cumple la igualdad. Tomando en cuenta que las leyes de los exponentes sirven para cualquier valor de la base y del exponente, los ejemplos cumplen las leyes de la potenciación, excepto<br><br>',
		opcion: ['2<sup>3</sup>*(-2)<sup>3</sup>3=(2*(-2))<sup>3</sup>', '-2<sup>3</sup>+(-2)<sup>3</sup>3=(2+(-2))<sup>3</sup>', '3<sup>2</sup>*3<sup>-2</sup> = 3<sup>(2+(-2))</sup>', '0'],
		respuesta: 2,
	},
	{
		pregunta: 'En un partido de fútbol, el balón describe, en dos ocasiones, trayectorias parabólicas diferentes, según las funciones:<br><br> <table class="responsive-table centered">     <thead>         <tr>             <th><b>Casos</b></th>              <th><b>Trayectorias</b></th>          </tr>        </thead>        <tbody>          <tr>            <td>Caso A</td>            <td><fmath alttext="y= -x^2-10x+25" class="fm-inline"><mrow><mi class="fm-mi-length-1" mathvariant="italic">y</mi><mo class="fm-infix-loose">=</mo><mrow><mrow><mrow><mo class="fm-prefix-tight">−</mo><msup><mi class="fm-mi-length-1" mathvariant="italic">x</mi><span class="fm-script fm-inline" style="vertical-align: 0.7em;"><mn>2</mn></span></msup></mrow><mo class="fm-infix">−</mo><mrow><mn>10</mn><mi class="fm-mi-length-1" mathvariant="italic">x</mi></mrow></mrow><mo class="fm-infix">+</mo><mn>25</mn></mrow></mrow></fmath></td>          </tr>          <tr>            <td>Caso B</td>            <td><fmath alttext="y= -x^2-8x+20" class="fm-inline"><mrow><mi class="fm-mi-length-1" mathvariant="italic">y</mi><mo class="fm-infix-loose">=</mo><mrow><mrow><mrow><mo class="fm-prefix-tight">−</mo><msup><mi class="fm-mi-length-1" mathvariant="italic">x</mi><span class="fm-script fm-inline" style="vertical-align: 0.7em;"><mn>2</mn></span></msup></mrow><mo class="fm-infix">−</mo><mrow><mn>8</mn><mi class="fm-mi-length-1" mathvariant="italic">x</mi></mrow></mrow><mo class="fm-infix">+</mo><mn>20</mn></mrow></mrow></fmath></td>          </tr>        </tbody>      </table><br>Si el eje de las abscisas coincide con el nivel del suelo del campo de fútbol, determine el caso en el que el balón alcanzó la altura máxima.<br><br>',
		opcion: ['A', 'B', '0', '0'],
		respuesta: 1,
	},
	{
		pregunta: 'En un juego de volley, la trayectoria de una pelota se expresa por la función <fmath alttext="h(x) = 2+4x-x^2" class="fm-inline"><mrow><mrow><mi class="fm-mi-length-1" mathvariant="italic">h</mi><mrow><mo class="fm-mo-Luc">(</mo><mi class="fm-mi-length-1" mathvariant="italic">x</mi><mo class="fm-mo-Luc">)</mo></mrow></mrow><mo class="fm-infix-loose">=</mo><mrow><mrow><mn>2</mn><mo class="fm-infix">+</mo><mrow><mn>4</mn><mi class="fm-mi-length-1" mathvariant="italic">x</mi></mrow></mrow><mo class="fm-infix">−</mo><msup><mi class="fm-mi-length-1" mathvariant="italic">x</mi><span class="fm-script fm-inline" style="vertical-align: 0.7em;"><mn>2</mn></span></msup></mrow></mrow></fmath>, donde <i>h</i> es la altura y <i>x</i> el desplazamiento. Determina la altura máxima que alcanza la pelota<br><br>',
		opcion: ['2<!--volley-->', '6<!--volley-->', '4<!--volley-->', '1<!--volley-->'],
		respuesta: 2,
	},
	{
		pregunta: 'En un laboratorio donde se estudia el <i>lactobacillus</i> para la producción de yogurt y queso se establece que su crecimiento <b>b</b> está dado por:<br><br><fmath alttext="(c^2)^3*(c^2)^2" display="block" class="ma-block"><mrow><msup><mrow><mo class="fm-mo-Luc">(</mo><msup><mi class="fm-mi-length-1" mathvariant="italic">c</mi><span class="fm-script fm-inline" style="vertical-align: 0.7em;"><mn>2</mn></span></msup><mo class="fm-mo-Luc">)</mo></mrow><span class="fm-script fm-inline" style="vertical-align: 0.7em;"><mn>3</mn></span></msup><mo class="fm-infix">*</mo><msup><mrow><mo class="fm-mo-Luc">(</mo><msup><mi class="fm-mi-length-1" mathvariant="italic">c</mi><span class="fm-script fm-inline" style="vertical-align: 0.7em;"><mn>2</mn></span></msup><mo class="fm-mo-Luc">)</mo></mrow><span class="fm-script fm-inline" style="vertical-align: 0.7em;"><mn>2</mn></span></msup></mrow></fmath><br><br>Determine la expresión equivalente que ayudará a establecer el crecimiento de esta bacteria.<br><br>',
		opcion: ['10<!--lactobacillus-->', '5<!--lactobacillus-->', '1<!--lactobacillus-->', '6<!--lactobacillus-->'],
		respuesta: 1,
	},
	{
		pregunta: 'Para el diseño de un tanque de tratamiento de agua se determina que su centro está ubicado en la posición (0;14) metros y está representado por la ecuación:<br><br><fmath alttext="x^2 + y^2 - 28y + 180 = 0" display="block" class="ma-block"><mrow><mrow><mrow><mrow><msup><mi class="fm-mi-length-1" mathvariant="italic">x</mi><span class="fm-script fm-inline" style="vertical-align: 0.7em;"><mn>2</mn></span></msup><mo class="fm-infix">+</mo><msup><mi class="fm-mi-length-1" mathvariant="italic">y</mi><span class="fm-script fm-inline" style="vertical-align: 0.7em;"><mn>2</mn></span></msup></mrow><mo class="fm-infix">−</mo><mrow><mn>28</mn><mi class="fm-mi-length-1" mathvariant="italic">y</mi></mrow></mrow><mo class="fm-infix">+</mo><mn>180</mn></mrow><mo class="fm-infix-loose">=</mo><mn>0</mn></mrow></fmath><br><br>Determine la medida del diámetro del tanque, en metros, que permitirá verificar que la construcción coincida con el diseño.<br><br> ',
		opcion: ['196<!--tanqueagua-->', '16<!--tanqueagua-->', '8<!--tanqueagua-->', '4<!--tanqueagua-->'],
		respuesta: 3,
	},
	{
		pregunta: 'Para evitar accidentes se debe colocar un semáforo en el punto de intersección de dos carreteras rectas representadas por las ecuaciones:<br><br><fmath alttext="6x -6y =12\text&quot; Ec.1&quot;" display="block" class="ma-block"><mrow><mrow><mrow><mn>6</mn><mi class="fm-mi-length-1" mathvariant="italic">x</mi></mrow><mo class="fm-infix">−</mo><mrow><mn>6</mn><mi class="fm-mi-length-1" mathvariant="italic">y</mi></mrow></mrow><mo class="fm-infix-loose">=</mo><mrow><mn>12</mn><mtext> Ec.1</mtext></mrow></mrow></fmath><fmath alttext="-3x +1/2 = 1/2\text&quot; Ec.2&quot;" display="block" class="ma-block"><mrow><mrow><mrow><mo class="fm-prefix-tight">−</mo><mrow><mn>3</mn><mi class="fm-mi-length-1" mathvariant="italic">x</mi></mrow></mrow><mo class="fm-infix">+</mo><span mtagname="mfrac" style="vertical-align: 0em;"><span class="fm-vert fm-frac"><table><tbody><tr><td class="fm-num-frac fm-inline"><mn>1</mn></td></tr><tr><td class="fm-den-frac fm-inline"><mn>2</mn></td></tr></tbody></table></span></span></mrow><mo class="fm-infix-loose">=</mo><mrow><span mtagname="mfrac" style="vertical-align: 0em;"><span class="fm-vert fm-frac"><table><tbody><tr><td class="fm-num-frac fm-inline"><mn>1</mn></td></tr><tr><td class="fm-den-frac fm-inline"><mn>2</mn></td></tr></tbody></table></span></span><mtext> Ec.2</mtext></mrow></mrow></fmath><br><br>Determine el punto en el cual se deberá colocar el semáforo.<br><br> ',
		opcion: ['(3/5;-7/5)', '(-3/5;13/5)', '(-3/5;-13/5)', '(3/5;7/5)'],
		respuesta: 3,
	},
	{
		pregunta: 'Las edades permitidas en diferentes cursos vacacionales son: gimnasia A=[10;15] y danza B=[12;17]. Si Emily desea inscribirse en gimnasia y danza, ¿en qué intervalo de edad debe encontrarse ella para cursar los vacacionales?<br><br> ',
		opcion: ['[12;15]', '[10;12[', '[10;17]', ']15;17]'],
		respuesta: 1,
	},
	{
		pregunta: 'Un sistema de radares detecta el movimiento de dos objetos cuyas trayectorias, en m, se definen mediante las funciones:<br><br><fmath alttext="f(t)=2t^2-3t+2" display="block" class="ma-block"><mrow><mrow><mi class="fm-mi-length-1" mathvariant="italic" style="padding-right: 0.44ex;">f</mi><mrow><mo class="fm-mo-Luc">(</mo><mi class="fm-mi-length-1" mathvariant="italic">t</mi><mo class="fm-mo-Luc">)</mo></mrow></mrow><mo class="fm-infix-loose">=</mo><mrow><mrow><mrow><mn>2</mn><msup><mi class="fm-mi-length-1" mathvariant="italic">t</mi><span class="fm-script fm-inline" style="vertical-align: 0.7em;"><mn>2</mn></span></msup></mrow><mo class="fm-infix">−</mo><mrow><mn>3</mn><mi class="fm-mi-length-1" mathvariant="italic">t</mi></mrow></mrow><mo class="fm-infix">+</mo><mn>2</mn></mrow></mrow></fmath><fmath alttext="g(t)=5t+1" display="block" class="ma-block"><mrow><mrow><mi class="fm-mi-length-1" mathvariant="italic">g</mi><mrow><mo class="fm-mo-Luc">(</mo><mi class="fm-mi-length-1" mathvariant="italic">t</mi><mo class="fm-mo-Luc">)</mo></mrow></mrow><mo class="fm-infix-loose">=</mo><mrow><mrow><mn>5</mn><mi class="fm-mi-length-1" mathvariant="italic">t</mi></mrow><mo class="fm-infix">+</mo><mn>1</mn></mrow></mrow></fmath><br><br>Para el análisis de distancia entre los objetos se combina las funciones de movimiento como (f-g)(t). ¿Cuál es la distancia, en m, que los separa en el instante t=6? ',
		opcion: ['45', '10', '56', '25'],
		respuesta: 4,
	},
	{
		pregunta: 'En la parte central del patio de un colegio se construirá un mural para colocar placas representativas, como se muestra la figura:<br><br><img src="mateEAES/areasombreada.png" alt="areasombreadasimuladorgráfico" class="voltaje1" style="height:auto;width:45%"><br><br> Si en el área sombreada se desea color césped síntético, determine la expresión que permitirá el cálculo del área para dicha instalación.<br><br>',
		opcion: ['(x+25)(x+2)', '(x+8)(x+7)', '(x+10)(x+5)', '(x+4)(x+1)'],
		respuesta: 3,
	},
	{
		pregunta: 'Para determinar la cantidad de material radioactivo en un momento determinado, se utiliza la siguiente ley:<br><br><fmath alttext="A=A_0*e^\text&quot;-kt&quot;" display="block" class="ma-block"><mrow><mi class="fm-mi-length-1" mathvariant="italic">A</mi><mo class="fm-infix-loose">=</mo><mrow><msub><mi class="fm-mi-length-1" mathvariant="italic">A</mi><span class="fm-script fm-inline" style="vertical-align: -0.5em;"><mn>0</mn></span></msub><mo class="fm-infix">*</mo><msup><mi class="fm-mi-length-1" mathvariant="italic">e</mi><span class="fm-script fm-inline" style="vertical-align: 0.7em;"><mtext>-kt</mtext></span></msup></mrow></mrow></fmath><br><br>Donde:<br>A<sub>0</sub> = Cantidad de material radioactivo inicial<br> A: Cantidad de material radioactivo al cabo del tiempo t<br>K: Constante de desintegración del material radioactivo<br>¿Cuál es la fórmula que permite determinar el tiempo t en el que: <b><fmath alttext="A=A_0/2" class="fm-inline"><mrow><mi class="fm-mi-length-1" mathvariant="italic">A</mi><mo class="fm-infix-loose">=</mo><span mtagname="mfrac" style="vertical-align: 0.126em;"><span class="fm-vert fm-frac"><table><tbody><tr><td class="fm-num-frac fm-inline"><msub><mi class="fm-mi-length-1" mathvariant="italic">A</mi><span class="fm-script fm-inline" style="vertical-align: -0.5em;"><mn>0</mn></span></msub></td></tr><tr><td class="fm-den-frac fm-inline"><mn>2</mn></td></tr></tbody></table></span></span></mrow></fmath></b>?',
		opcion: ['t= -ln(2/k)', 't=ln(2/k)', 't= -ln/k', 't= ln2/k'],
		respuesta: 4,
	},
	{
		pregunta: 'Seleccione la opción que representa el intervalo de valores de x que es el dominio de la función definida por:<br><br><fmath alttext="ln(x^2+x-20)" display="block" class="ma-block"><mrow><mrow><mi class="fm-mi-length-1" mathvariant="italic">l</mi><mi class="fm-mi-length-1" mathvariant="italic">n</mi></mrow><mrow><mo class="fm-mo-Luc">(</mo><mrow><mrow><msup><mi class="fm-mi-length-1" mathvariant="italic">x</mi><span class="fm-script fm-inline" style="vertical-align: 0.7em;"><mn>2</mn></span></msup><mo class="fm-infix">+</mo><mi class="fm-mi-length-1" mathvariant="italic">x</mi></mrow><mo class="fm-infix">−</mo><mn>20</mn></mrow><mo class="fm-mo-Luc">)</mo></mrow></mrow></fmath>',
		opcion: ['(0,+∞)', '(-∞,-5)∪(4,+∞)', '(-5,4)', '(-4,5)'],
		respuesta: 2,
	},
	{
		pregunta: 'Resuelva la siguiente inecuación logarítmica:<br><br><fmath alttext="ln(x^3)+ln(x) ≥ 4*ln(2x-1)" display="block" class="ma-block"><mrow><mrow><mrow><mrow><mi class="fm-mi-length-1" mathvariant="italic">l</mi><mi class="fm-mi-length-1" mathvariant="italic">n</mi></mrow><mrow><mo class="fm-mo-Luc">(</mo><msup><mi class="fm-mi-length-1" mathvariant="italic">x</mi><span class="fm-script fm-inline" style="vertical-align: 0.7em;"><mn>3</mn></span></msup><mo class="fm-mo-Luc">)</mo></mrow></mrow><mo class="fm-infix">+</mo><mrow><mrow><mi class="fm-mi-length-1" mathvariant="italic">l</mi><mi class="fm-mi-length-1" mathvariant="italic">n</mi></mrow><mrow><mo class="fm-mo-Luc">(</mo><mi class="fm-mi-length-1" mathvariant="italic">x</mi><mo class="fm-mo-Luc">)</mo></mrow></mrow></mrow><mo class="fm-infix-loose">≥</mo><mrow><mn>4</mn><mo class="fm-infix">*</mo><mrow><mrow><mi class="fm-mi-length-1" mathvariant="italic">l</mi><mi class="fm-mi-length-1" mathvariant="italic">n</mi></mrow><mrow><mo class="fm-mo-Luc">(</mo><mrow><mrow><mn>2</mn><mi class="fm-mi-length-1" mathvariant="italic">x</mi></mrow><mo class="fm-infix">−</mo><mn>1</mn></mrow><mo class="fm-mo-Luc">)</mo></mrow></mrow></mrow></mrow></fmath>',
		opcion: ['x pertenece a [1/2,1)', 'x pertenece a [-1/2,1)', 'x pertenece a (1/2,1)', 'x pertenece a (-1/2,1)'],
		respuesta: 4,
	},
	{
		pregunta: 'Halle el valor de x que satisface la siguiente ecuación:<br><br><fmath alttext="7^{x+1}-7^{x-1}=48" display="block" class="ma-block"><mrow><mrow><msup><mn>7</mn><span class="fm-script fm-inline" style="vertical-align: 0.7em;"><mrow><mi class="fm-mi-length-1" mathvariant="italic">x</mi><mo class="fm-infix">+</mo><mn>1</mn></mrow></span></msup><mo class="fm-infix">−</mo><msup><mn>7</mn><span class="fm-script fm-inline" style="vertical-align: 0.7em;"><mrow><mi class="fm-mi-length-1" mathvariant="italic">x</mi><mo class="fm-infix">−</mo><mn>1</mn></mrow></span></msup></mrow><mo class="fm-infix-loose">=</mo><mn>48</mn></mrow></fmath>',
		opcion: ['0<!--n-->', '1<!--n-->', '2', '3'],
		respuesta: 2,
	},
	{
		pregunta: 'La trayectoria de tres barcos A, B, C pueden ser representadas en el plano XY como rectas. Si la trayectoria del barco A está dada por la recta L<sub style="bottom: -0.25em;">1</sub>: 8x-4y+5=0, la trayectoria del barco B está dada por la recta L<sub style="bottom: -0.25em;">2</sub>: 2x-y+4=0 y la trayectoria del barco B está dada por la recta L<sub style="bottom: -0.25em;">3</sub>: 2x+4y+3=0<br><br>Entonces se puede afirmar que:<br><br>',
		opcion: ['El barco A lleva una trayectoria paralea al barco C', 'El barco A lleva una trayectoria perpendicular al barco B', 'El barco B lleva una trayectoria paralela al barco C', 'El barco B lleva una trayectoria perpendicular al barco C'],
		respuesta: 4,
	},
	{
		pregunta: 'Un semáforo tiene tres luces, verde, amarillo y rojo.<br>El tiempo que permanece encendida la luz verde es de cien veces el tiempo que permanece encendida la luz amarilla y el tiempo que permanece encendida la luz roja es la mitad del tiempo que permanece encendida la luz verde.<br>Considere todos los tiempos anteriores en segundos. Si se suman todos los tiempos en que permanecen encendidas cada luz, este es igual a 453 segundos. Entonces la luz verde permanece encendida:<br><br>',
		opcion: ['300<!--semaforo-->', '3<!--semaforo-->', '100<!--semaforo-->', '150<!--semaforo-->'],
		respuesta: 1,
	},
	{
		pregunta: 'Uno de los peces más curiosos del mundo marino es el pez volador, ya que realiza saltos fuera del agua. La trayectoria del salto de este pez se lo puede denotar por la siguiente función:<br><fmath alttext="f(x)=0.2x^2 + 2x - 1" display="block" class="ma-block"><mrow><mrow><mi class="fm-mi-length-1" mathvariant="italic" style="padding-right: 0.44ex;">f</mi><mrow><mo class="fm-mo-Luc">(</mo><mi class="fm-mi-length-1" mathvariant="italic">x</mi><mo class="fm-mo-Luc">)</mo></mrow></mrow><mo class="fm-infix-loose">=</mo><mrow><mrow><mrow><mn>0.2</mn><msup><mi class="fm-mi-length-1" mathvariant="italic">x</mi><span class="fm-script fm-inline" style="vertical-align: 0.7em;"><mn>2</mn></span></msup></mrow><mo class="fm-infix">+</mo><mrow><mn>2</mn><mi class="fm-mi-length-1" mathvariant="italic">x</mi></mrow></mrow><mo class="fm-infix">−</mo><mn>1</mn></mrow></mrow></fmath><br><br> Donde f(x) y x se miden en pies. ¿Cuáles de las siguientes proposiciones son verdaderas?<br><br> <ol><li>El vértice de la función tiene como coordenadas e punto (5,4)</li><li>El vértice de la función tiene como coordenadas el punto(-5,-16)</li><li>La función f no es par</li><li>La función f es par</li></ol>',
		opcion: ['1,3<!--pezvolador-->', '1,4<!--pezvolador-->', '2,3<!--pezvolador-->', '2,4<!--pezvolador-->'],
		respuesta: 1,
	},
	{
		pregunta: 'Dada la siguiente expresion algebraica<br><br><fmath alttext="{[{x^{1/2}y^{3/4}{√{xy}}}/{√{y^3x^2}}]^{3/4}}" display="block" class="ma-block"><msup><mrow><mo class="fm-mo-Luc" style="font-size: 3.371em; vertical-align: -0.071em; display: inline-block; transform: scaleX(0.5);">[</mo><span mtagname="mfrac" style="vertical-align: 0.354em;"><span class="fm-vert fm-frac"><table><tbody><tr><td class="fm-num-frac fm-inline"><mrow><mrow><msup><mi class="fm-mi-length-1" mathvariant="italic">x</mi><span class="fm-script fm-inline" style="vertical-align: 1.33em;"><span mtagname="mfrac" style="vertical-align: 0em;"><span class="fm-vert fm-frac"><table><tbody><tr><td class="fm-num-frac fm-inline"><mn>1</mn></td></tr><tr><td class="fm-den-frac fm-inline"><mn>2</mn></td></tr></tbody></table></span></span></span></msup><msup><mi class="fm-mi-length-1" mathvariant="italic">y</mi><span class="fm-script fm-inline" style="vertical-align: 1.33em;"><span mtagname="mfrac" style="vertical-align: 0em;"><span class="fm-vert fm-frac"><table><tbody><tr><td class="fm-num-frac fm-inline"><mn>3</mn></td></tr><tr><td class="fm-den-frac fm-inline"><mn>4</mn></td></tr></tbody></table></span></span></span></msup></mrow><mrow mtagname="msqrt"><mo class="fm-radic">√</mo><span style="vertical-align: 0.086em;"><span class="fm-vert fm-radicand" style="border-top-width: 0.072em;"><mrow><mi class="fm-mi-length-1" mathvariant="italic">x</mi><mi class="fm-mi-length-1" mathvariant="italic">y</mi></mrow></span></span></mrow></mrow></td></tr><tr><td class="fm-den-frac fm-inline"><mrow mtagname="msqrt"><mo class="fm-radic" style="font-size: 1.366em; vertical-align: -0.069em; display: inline-block; transform: scaleX(0.5);">√</mo><span style="vertical-align: 0.22em;"><span class="fm-vert fm-radicand" style="border-top-width: 0.087em;"><mrow><msup><mi class="fm-mi-length-1" mathvariant="italic">y</mi><span class="fm-script fm-inline" style="vertical-align: 0.7em;"><mn>3</mn></span></msup><msup><mi class="fm-mi-length-1" mathvariant="italic">x</mi><span class="fm-script fm-inline" style="vertical-align: 0.7em;"><mn>2</mn></span></msup></mrow></span></span></mrow></td></tr></tbody></table></span></span><mo class="fm-mo-Luc" style="font-size: 3.371em; vertical-align: -0.071em; display: inline-block; transform: scaleX(0.5);">]</mo></mrow><span class="fm-script fm-inline" style="vertical-align: 2.85em;"><span mtagname="mfrac" style="vertical-align: 0em;"><span class="fm-vert fm-frac"><table><tbody><tr><td class="fm-num-frac fm-inline"><mn>3</mn></td></tr><tr><td class="fm-den-frac fm-inline"><mn>4</mn></td></tr></tbody></table></span></span></span></msup></fmath>Determinar la suma de los exponentes de "<b>x</b>" y de "<b>y</b>"<br><br>',
		opcion: ['-3/16<!--sumaexp-->', '-1/2<!--sumaexp-->', '-1/4<!--sumaexp-->', '3/16<!--sumaexp-->'],
		respuesta: 4,
	},
	{
		pregunta: 'Inés tiene el triple del dinero que tiene Rogelio.<br><br>Si Inés perdiese <b>$12</b> y Rogelio ganara <b>$20</b> entonces ambos tendrían la misma cantidad de dinero<br><br>Por lo tanto la cantidad de dinero que tiene Rogelio es:<br><br>',
		opcion: ['$36<!--ines-->', '$20<!--ines-->', '$16<!--ines-->', '$48<!--ines-->'],
		respuesta: 3,
	},
	{
		pregunta: 'Seleccione la opción correcta:<br><br>Dada la expresión algebraica<br><fmath alttext="(√{x{√{x√x}}})^n" display="block" class="ma-block"><msup><mrow><mo class="fm-mo-Luc" style="font-size: 1.456em; vertical-align: 0.11em; display: inline-block; transform: scaleX(0.5);">(</mo><mrow mtagname="msqrt"><mo class="fm-radic" style="font-size: 1.456em; vertical-align: -0.049em; display: inline-block; transform: scaleX(0.5);">√</mo><span style="vertical-align: 0.274em;"><span class="fm-vert fm-radicand" style="border-top-width: 0.093em;"><mrow><mi class="fm-mi-length-1" mathvariant="italic">x</mi><mrow mtagname="msqrt"><mo class="fm-radic" style="font-size: 1.295em; vertical-align: -0.087em; display: inline-block; transform: scaleX(0.5);">√</mo><span style="vertical-align: 0.177em;"><span class="fm-vert fm-radicand" style="border-top-width: 0.082em;"><mrow><mi class="fm-mi-length-1" mathvariant="italic">x</mi><mrow mtagname="msqrt"><mo class="fm-radic">√</mo><span style="vertical-align: 0.086em;"><span class="fm-vert fm-radicand" style="border-top-width: 0.072em;"><mi class="fm-mi-length-1" mathvariant="italic">x</mi></span></span></mrow></mrow></span></span></mrow></mrow></span></span></mrow><mo class="fm-mo-Luc" style="font-size: 1.456em; vertical-align: 0.11em; display: inline-block; transform: scaleX(0.5);">)</mo></mrow><span class="fm-script fm-inline" style="vertical-align: 1.12em;"><mi class="fm-mi-length-1" mathvariant="italic">n</mi></span></msup></fmath><br><br>¿Qué valor debe tomar n, para que el exponente de x sea igual a 1?<br><br>',
		opcion: ['7/8<!--niguala1-->', '8/8<!--niguala1-->', '8/7<!--niguala1-->', '6/7<!--niguala1-->'],
		respuesta: 3,
	},
	{
		pregunta: 'Una partícula se encuentra sobre el borde de una rueda de bicicleta describiendo una trayectoria tal como indica la figura.<br><div class="center-align" id="borderueda"></div><div><img class="borderuedaimg responsive-img" src="mateEAES/funciongrafica1.png"></div><script>{  functionPlot({  target: "#borderueda",  disableZoom:true,  height:400,  width:650,  yAxis: { domain: [-1.5, 1.5], label:"x(m)" },  xAxis: { domain: [-0.5, 6.5],label:"t(s)"  },    grid:true,    data: [{      fn: "sin(2x)",	  color:"purple",    }],	annotations: [{    x: 3.1416,    text: "x = π"  }, {    x: 6.2831,    text: "x = 2π"  }]  });}</script>Si la rueda gira dos vueltas, seleccione los enunciados correctos.<br><br><ol><li>La gráfica representa a una función par</li><li>La gráfica representa a una función impar</li><li>La gráfica de la función tiene un período de π</li><li>La gráfica de la función tiene un período de 2π</li></ol>',
		opcion: ['1,4<!--ruedabicicleta-->', '1,3<!--ruedabicicleta-->', '2,3<!--ruedabicicleta-->', '2,4<!--ruedabicicleta-->'],
		respuesta: 3,
	},
	{
		pregunta: 'Una partícula se encuentra sobre el borde de una rueda de bicicleta describiendo una trayectoria tal como indica la figura.<br><div class="center-align" id="borderueda"></div><div><img class="borderuedaimg responsive-img" src="mateEAES/funciongrafica1.png"></div><script>{  functionPlot({  target: "#borderueda",  disableZoom:true,  height:400,  width:650,  yAxis: { domain: [-1.5, 1.5], label:"x(m)" },  xAxis: { domain: [-0.5, 6.5],label:"t(s)"  },    grid:true,    data: [{      fn: "sin(2x)",	  color:"purple",    }],	annotations: [{    x: 3.1416,    text: "x = π"  }, {    x: 6.2831,    text: "x = 2π"  }]  });}</script>Si la rueda gira dos vueltas, seleccione los enunciados correctos.<br><br><ol><li>La gráfica representa a una función par</li><li>La gráfica representa a una función impar</li><li>La gráfica de la función tiene un período de π</li><li>La gráfica de la función tiene un período de 2π</li></ol>',
		opcion: ['1,4<!--ruedabicicleta-->', '1,3<!--ruedabicicleta-->', '2,3<!--ruedabicicleta-->', '2,4<!--ruedabicicleta-->'],
		respuesta: 3,
	},
	{
		pregunta: 'Una partícula se encuentra sobre el borde de una rueda de bicicleta describiendo una trayectoria tal como indica la figura.<br><div class="center-align" id="borderueda"></div><div><img class="borderuedaimg responsive-img" src="mateEAES/funciongrafica1.png"></div><script>{  functionPlot({  target: "#borderueda",  disableZoom:true,  height:400,  width:650,  yAxis: { domain: [-1.5, 1.5], label:"x(m)" },  xAxis: { domain: [-0.5, 6.5],label:"t(s)"  },    grid:true,    data: [{      fn: "sin(2x)",	  color:"purple",    }],	annotations: [{    x: 3.1416,    text: "x = π"  }, {    x: 6.2831,    text: "x = 2π"  }]  });}</script>Si la rueda gira dos vueltas, seleccione los enunciados correctos.<br><br><ol><li>La gráfica representa a una función par</li><li>La gráfica representa a una función impar</li><li>La gráfica de la función tiene un período de π</li><li>La gráfica de la función tiene un período de 2π</li></ol>',
		opcion: ['1,4<!--ruedabicicleta-->', '1,3<!--ruedabicicleta-->', '2,3<!--ruedabicicleta-->', '2,4<!--ruedabicicleta-->'],
		respuesta: 3,
	},
	{
		pregunta: 'Una partícula se encuentra sobre el borde de una rueda de bicicleta describiendo una trayectoria tal como indica la figura.<br><div class="center-align" id="borderueda"></div><div><img class="borderuedaimg responsive-img" src="mateEAES/funciongrafica1.png"></div><script>{  functionPlot({  target: "#borderueda",  disableZoom:true,  height:400,  width:650,  yAxis: { domain: [-1.5, 1.5], label:"x(m)" },  xAxis: { domain: [-0.5, 6.5],label:"t(s)"  },    grid:true,    data: [{      fn: "sin(2x)",	  color:"purple",    }],	annotations: [{    x: 3.1416,    text: "x = π"  }, {    x: 6.2831,    text: "x = 2π"  }]  });}</script>Si la rueda gira dos vueltas, seleccione los enunciados correctos.<br><br><ol><li>La gráfica representa a una función par</li><li>La gráfica representa a una función impar</li><li>La gráfica de la función tiene un período de π</li><li>La gráfica de la función tiene un período de 2π</li></ol>',
		opcion: ['1,4<!--ruedabicicleta-->', '1,3<!--ruedabicicleta-->', '2,3<!--ruedabicicleta-->', '2,4<!--ruedabicicleta-->'],
		respuesta: 3,
	},
	{
		pregunta: 'Una partícula se encuentra sobre el borde de una rueda de bicicleta describiendo una trayectoria tal como indica la figura.<br><div class="center-align" id="borderueda"></div><div><img class="borderuedaimg responsive-img" src="mateEAES/funciongrafica1.png"></div><script>{  functionPlot({  target: "#borderueda",  disableZoom:true,  height:400,  width:650,  yAxis: { domain: [-1.5, 1.5], label:"x(m)" },  xAxis: { domain: [-0.5, 6.5],label:"t(s)"  },    grid:true,    data: [{      fn: "sin(2x)",	  color:"purple",    }],	annotations: [{    x: 3.1416,    text: "x = π"  }, {    x: 6.2831,    text: "x = 2π"  }]  });}</script>Si la rueda gira dos vueltas, seleccione los enunciados correctos.<br><br><ol><li>La gráfica representa a una función par</li><li>La gráfica representa a una función impar</li><li>La gráfica de la función tiene un período de π</li><li>La gráfica de la función tiene un período de 2π</li></ol>',
		opcion: ['1,4<!--ruedabicicleta-->', '1,3<!--ruedabicicleta-->', '2,3<!--ruedabicicleta-->', '2,4<!--ruedabicicleta-->'],
		respuesta: 3,
	},
	{
		pregunta: 'Una partícula se encuentra sobre el borde de una rueda de bicicleta describiendo una trayectoria tal como indica la figura.<br><div class="center-align" id="borderueda"></div><div><img class="borderuedaimg responsive-img" src="mateEAES/funciongrafica1.png"></div><script>{  functionPlot({  target: "#borderueda",  disableZoom:true,  height:400,  width:650,  yAxis: { domain: [-1.5, 1.5], label:"x(m)" },  xAxis: { domain: [-0.5, 6.5],label:"t(s)"  },    grid:true,    data: [{      fn: "sin(2x)",	  color:"purple",    }],	annotations: [{    x: 3.1416,    text: "x = π"  }, {    x: 6.2831,    text: "x = 2π"  }]  });}</script>Si la rueda gira dos vueltas, seleccione los enunciados correctos.<br><br><ol><li>La gráfica representa a una función par</li><li>La gráfica representa a una función impar</li><li>La gráfica de la función tiene un período de π</li><li>La gráfica de la función tiene un período de 2π</li></ol>',
		opcion: ['1,4<!--ruedabicicleta-->', '1,3<!--ruedabicicleta-->', '2,3<!--ruedabicicleta-->', '2,4<!--ruedabicicleta-->'],
		respuesta: 3,
	},
	{
		pregunta: 'Una partícula se encuentra sobre el borde de una rueda de bicicleta describiendo una trayectoria tal como indica la figura.<br><div class="center-align" id="borderueda"></div><div><img class="borderuedaimg responsive-img" src="mateEAES/funciongrafica1.png"></div><script>{  functionPlot({  target: "#borderueda",  disableZoom:true,  height:400,  width:650,  yAxis: { domain: [-1.5, 1.5], label:"x(m)" },  xAxis: { domain: [-0.5, 6.5],label:"t(s)"  },    grid:true,    data: [{      fn: "sin(2x)",	  color:"purple",    }],	annotations: [{    x: 3.1416,    text: "x = π"  }, {    x: 6.2831,    text: "x = 2π"  }]  });}</script>Si la rueda gira dos vueltas, seleccione los enunciados correctos.<br><br><ol><li>La gráfica representa a una función par</li><li>La gráfica representa a una función impar</li><li>La gráfica de la función tiene un período de π</li><li>La gráfica de la función tiene un período de 2π</li></ol>',
		opcion: ['1,4<!--ruedabicicleta-->', '1,3<!--ruedabicicleta-->', '2,3<!--ruedabicicleta-->', '2,4<!--ruedabicicleta-->'],
		respuesta: 3,
	},
	{
		pregunta: 'Una partícula se encuentra sobre el borde de una rueda de bicicleta describiendo una trayectoria tal como indica la figura.<br><div class="center-align" id="borderueda"></div><div><img class="borderuedaimg responsive-img" src="mateEAES/funciongrafica1.png"></div><script>{  functionPlot({  target: "#borderueda",  disableZoom:true,  height:400,  width:650,  yAxis: { domain: [-1.5, 1.5], label:"x(m)" },  xAxis: { domain: [-0.5, 6.5],label:"t(s)"  },    grid:true,    data: [{      fn: "sin(2x)",	  color:"purple",    }],	annotations: [{    x: 3.1416,    text: "x = π"  }, {    x: 6.2831,    text: "x = 2π"  }]  });}</script>Si la rueda gira dos vueltas, seleccione los enunciados correctos.<br><br><ol><li>La gráfica representa a una función par</li><li>La gráfica representa a una función impar</li><li>La gráfica de la función tiene un período de π</li><li>La gráfica de la función tiene un período de 2π</li></ol>',
		opcion: ['1,4<!--ruedabicicleta-->', '1,3<!--ruedabicicleta-->', '2,3<!--ruedabicicleta-->', '2,4<!--ruedabicicleta-->'],
		respuesta: 3,
	},
	{
		pregunta: 'Una partícula se encuentra sobre el borde de una rueda de bicicleta describiendo una trayectoria tal como indica la figura.<br><div class="center-align" id="borderueda"></div><div><img class="borderuedaimg responsive-img" src="mateEAES/funciongrafica1.png"></div><script>{  functionPlot({  target: "#borderueda",  disableZoom:true,  height:400,  width:650,  yAxis: { domain: [-1.5, 1.5], label:"x(m)" },  xAxis: { domain: [-0.5, 6.5],label:"t(s)"  },    grid:true,    data: [{      fn: "sin(2x)",	  color:"purple",    }],	annotations: [{    x: 3.1416,    text: "x = π"  }, {    x: 6.2831,    text: "x = 2π"  }]  });}</script>Si la rueda gira dos vueltas, seleccione los enunciados correctos.<br><br><ol><li>La gráfica representa a una función par</li><li>La gráfica representa a una función impar</li><li>La gráfica de la función tiene un período de π</li><li>La gráfica de la función tiene un período de 2π</li></ol>',
		opcion: ['1,4<!--ruedabicicleta-->', '1,3<!--ruedabicicleta-->', '2,3<!--ruedabicicleta-->', '2,4<!--ruedabicicleta-->'],
		respuesta: 3,
	},
	{
		pregunta: 'Una partícula se encuentra sobre el borde de una rueda de bicicleta describiendo una trayectoria tal como indica la figura.<br><div class="center-align" id="borderueda"></div><div><img class="borderuedaimg responsive-img" src="mateEAES/funciongrafica1.png"></div><script>{  functionPlot({  target: "#borderueda",  disableZoom:true,  height:400,  width:650,  yAxis: { domain: [-1.5, 1.5], label:"x(m)" },  xAxis: { domain: [-0.5, 6.5],label:"t(s)"  },    grid:true,    data: [{      fn: "sin(2x)",	  color:"purple",    }],	annotations: [{    x: 3.1416,    text: "x = π"  }, {    x: 6.2831,    text: "x = 2π"  }]  });}</script>Si la rueda gira dos vueltas, seleccione los enunciados correctos.<br><br><ol><li>La gráfica representa a una función par</li><li>La gráfica representa a una función impar</li><li>La gráfica de la función tiene un período de π</li><li>La gráfica de la función tiene un período de 2π</li></ol>',
		opcion: ['1,4<!--ruedabicicleta-->', '1,3<!--ruedabicicleta-->', '2,3<!--ruedabicicleta-->', '2,4<!--ruedabicicleta-->'],
		respuesta: 3,
	},
	{
		pregunta: 'Una partícula se encuentra sobre el borde de una rueda de bicicleta describiendo una trayectoria tal como indica la figura.<br><div class="center-align" id="borderueda"></div><div><img class="borderuedaimg responsive-img" src="mateEAES/funciongrafica1.png"></div><script>{  functionPlot({  target: "#borderueda",  disableZoom:true,  height:400,  width:650,  yAxis: { domain: [-1.5, 1.5], label:"x(m)" },  xAxis: { domain: [-0.5, 6.5],label:"t(s)"  },    grid:true,    data: [{      fn: "sin(2x)",	  color:"purple",    }],	annotations: [{    x: 3.1416,    text: "x = π"  }, {    x: 6.2831,    text: "x = 2π"  }]  });}</script>Si la rueda gira dos vueltas, seleccione los enunciados correctos.<br><br><ol><li>La gráfica representa a una función par</li><li>La gráfica representa a una función impar</li><li>La gráfica de la función tiene un período de π</li><li>La gráfica de la función tiene un período de 2π</li></ol>',
		opcion: ['1,4<!--ruedabicicleta-->', '1,3<!--ruedabicicleta-->', '2,3<!--ruedabicicleta-->', '2,4<!--ruedabicicleta-->'],
		respuesta: 3,
	},
	{
		pregunta: 'Una partícula se encuentra sobre el borde de una rueda de bicicleta describiendo una trayectoria tal como indica la figura.<br><div class="center-align" id="borderueda"></div><div><img class="borderuedaimg responsive-img" src="mateEAES/funciongrafica1.png"></div><script>{  functionPlot({  target: "#borderueda",  disableZoom:true,  height:400,  width:650,  yAxis: { domain: [-1.5, 1.5], label:"x(m)" },  xAxis: { domain: [-0.5, 6.5],label:"t(s)"  },    grid:true,    data: [{      fn: "sin(2x)",	  color:"purple",    }],	annotations: [{    x: 3.1416,    text: "x = π"  }, {    x: 6.2831,    text: "x = 2π"  }]  });}</script>Si la rueda gira dos vueltas, seleccione los enunciados correctos.<br><br><ol><li>La gráfica representa a una función par</li><li>La gráfica representa a una función impar</li><li>La gráfica de la función tiene un período de π</li><li>La gráfica de la función tiene un período de 2π</li></ol>',
		opcion: ['1,4<!--ruedabicicleta-->', '1,3<!--ruedabicicleta-->', '2,3<!--ruedabicicleta-->', '2,4<!--ruedabicicleta-->'],
		respuesta: 3,
	},
	{
		pregunta: 'Una partícula se encuentra sobre el borde de una rueda de bicicleta describiendo una trayectoria tal como indica la figura.<br><div class="center-align" id="borderueda"></div><div><img class="borderuedaimg responsive-img" src="mateEAES/funciongrafica1.png"></div><script>{  functionPlot({  target: "#borderueda",  disableZoom:true,  height:400,  width:650,  yAxis: { domain: [-1.5, 1.5], label:"x(m)" },  xAxis: { domain: [-0.5, 6.5],label:"t(s)"  },    grid:true,    data: [{      fn: "sin(2x)",	  color:"purple",    }],	annotations: [{    x: 3.1416,    text: "x = π"  }, {    x: 6.2831,    text: "x = 2π"  }]  });}</script>Si la rueda gira dos vueltas, seleccione los enunciados correctos.<br><br><ol><li>La gráfica representa a una función par</li><li>La gráfica representa a una función impar</li><li>La gráfica de la función tiene un período de π</li><li>La gráfica de la función tiene un período de 2π</li></ol>',
		opcion: ['1,4<!--ruedabicicleta-->', '1,3<!--ruedabicicleta-->', '2,3<!--ruedabicicleta-->', '2,4<!--ruedabicicleta-->'],
		respuesta: 3,
	},
	{
		pregunta: 'Una partícula se encuentra sobre el borde de una rueda de bicicleta describiendo una trayectoria tal como indica la figura.<br><div class="center-align" id="borderueda"></div><div><img class="borderuedaimg responsive-img" src="mateEAES/funciongrafica1.png"></div><script>{  functionPlot({  target: "#borderueda",  disableZoom:true,  height:400,  width:650,  yAxis: { domain: [-1.5, 1.5], label:"x(m)" },  xAxis: { domain: [-0.5, 6.5],label:"t(s)"  },    grid:true,    data: [{      fn: "sin(2x)",	  color:"purple",    }],	annotations: [{    x: 3.1416,    text: "x = π"  }, {    x: 6.2831,    text: "x = 2π"  }]  });}</script>Si la rueda gira dos vueltas, seleccione los enunciados correctos.<br><br><ol><li>La gráfica representa a una función par</li><li>La gráfica representa a una función impar</li><li>La gráfica de la función tiene un período de π</li><li>La gráfica de la función tiene un período de 2π</li></ol>',
		opcion: ['1,4<!--ruedabicicleta-->', '1,3<!--ruedabicicleta-->', '2,3<!--ruedabicicleta-->', '2,4<!--ruedabicicleta-->'],
		respuesta: 3,
	},
	{
		pregunta: 'Una partícula se encuentra sobre el borde de una rueda de bicicleta describiendo una trayectoria tal como indica la figura.<br><div class="center-align" id="borderueda"></div><div><img class="borderuedaimg responsive-img" src="mateEAES/funciongrafica1.png"></div><script>{  functionPlot({  target: "#borderueda",  disableZoom:true,  height:400,  width:650,  yAxis: { domain: [-1.5, 1.5], label:"x(m)" },  xAxis: { domain: [-0.5, 6.5],label:"t(s)"  },    grid:true,    data: [{      fn: "sin(2x)",	  color:"purple",    }],	annotations: [{    x: 3.1416,    text: "x = π"  }, {    x: 6.2831,    text: "x = 2π"  }]  });}</script>Si la rueda gira dos vueltas, seleccione los enunciados correctos.<br><br><ol><li>La gráfica representa a una función par</li><li>La gráfica representa a una función impar</li><li>La gráfica de la función tiene un período de π</li><li>La gráfica de la función tiene un período de 2π</li></ol>',
		opcion: ['1,4<!--ruedabicicleta-->', '1,3<!--ruedabicicleta-->', '2,3<!--ruedabicicleta-->', '2,4<!--ruedabicicleta-->'],
		respuesta: 3,
	},
	{
		pregunta: 'Una partícula se encuentra sobre el borde de una rueda de bicicleta describiendo una trayectoria tal como indica la figura.<br><div class="center-align" id="borderueda"></div><div><img class="borderuedaimg responsive-img" src="mateEAES/funciongrafica1.png"></div><script>{  functionPlot({  target: "#borderueda",  disableZoom:true,  height:400,  width:650,  yAxis: { domain: [-1.5, 1.5], label:"x(m)" },  xAxis: { domain: [-0.5, 6.5],label:"t(s)"  },    grid:true,    data: [{      fn: "sin(2x)",	  color:"purple",    }],	annotations: [{    x: 3.1416,    text: "x = π"  }, {    x: 6.2831,    text: "x = 2π"  }]  });}</script>Si la rueda gira dos vueltas, seleccione los enunciados correctos.<br><br><ol><li>La gráfica representa a una función par</li><li>La gráfica representa a una función impar</li><li>La gráfica de la función tiene un período de π</li><li>La gráfica de la función tiene un período de 2π</li></ol>',
		opcion: ['1,4<!--ruedabicicleta-->', '1,3<!--ruedabicicleta-->', '2,3<!--ruedabicicleta-->', '2,4<!--ruedabicicleta-->'],
		respuesta: 3,
	},
	{
		pregunta: 'Una partícula se encuentra sobre el borde de una rueda de bicicleta describiendo una trayectoria tal como indica la figura.<br><div class="center-align" id="borderueda"></div><div><img class="borderuedaimg responsive-img" src="mateEAES/funciongrafica1.png"></div><script>{  functionPlot({  target: "#borderueda",  disableZoom:true,  height:400,  width:650,  yAxis: { domain: [-1.5, 1.5], label:"x(m)" },  xAxis: { domain: [-0.5, 6.5],label:"t(s)"  },    grid:true,    data: [{      fn: "sin(2x)",	  color:"purple",    }],	annotations: [{    x: 3.1416,    text: "x = π"  }, {    x: 6.2831,    text: "x = 2π"  }]  });}</script>Si la rueda gira dos vueltas, seleccione los enunciados correctos.<br><br><ol><li>La gráfica representa a una función par</li><li>La gráfica representa a una función impar</li><li>La gráfica de la función tiene un período de π</li><li>La gráfica de la función tiene un período de 2π</li></ol>',
		opcion: ['1,4<!--ruedabicicleta-->', '1,3<!--ruedabicicleta-->', '2,3<!--ruedabicicleta-->', '2,4<!--ruedabicicleta-->'],
		respuesta: 3,
	},
	{
		pregunta: 'Una partícula se encuentra sobre el borde de una rueda de bicicleta describiendo una trayectoria tal como indica la figura.<br><div class="center-align" id="borderueda"></div><div><img class="borderuedaimg responsive-img" src="mateEAES/funciongrafica1.png"></div><script>{  functionPlot({  target: "#borderueda",  disableZoom:true,  height:400,  width:650,  yAxis: { domain: [-1.5, 1.5], label:"x(m)" },  xAxis: { domain: [-0.5, 6.5],label:"t(s)"  },    grid:true,    data: [{      fn: "sin(2x)",	  color:"purple",    }],	annotations: [{    x: 3.1416,    text: "x = π"  }, {    x: 6.2831,    text: "x = 2π"  }]  });}</script>Si la rueda gira dos vueltas, seleccione los enunciados correctos.<br><br><ol><li>La gráfica representa a una función par</li><li>La gráfica representa a una función impar</li><li>La gráfica de la función tiene un período de π</li><li>La gráfica de la función tiene un período de 2π</li></ol>',
		opcion: ['1,4<!--ruedabicicleta-->', '1,3<!--ruedabicicleta-->', '2,3<!--ruedabicicleta-->', '2,4<!--ruedabicicleta-->'],
		respuesta: 3,
	},
	{
		pregunta: 'Una partícula se encuentra sobre el borde de una rueda de bicicleta describiendo una trayectoria tal como indica la figura.<br><div class="center-align" id="borderueda"></div><div><img class="borderuedaimg responsive-img" src="mateEAES/funciongrafica1.png"></div><script>{  functionPlot({  target: "#borderueda",  disableZoom:true,  height:400,  width:650,  yAxis: { domain: [-1.5, 1.5], label:"x(m)" },  xAxis: { domain: [-0.5, 6.5],label:"t(s)"  },    grid:true,    data: [{      fn: "sin(2x)",	  color:"purple",    }],	annotations: [{    x: 3.1416,    text: "x = π"  }, {    x: 6.2831,    text: "x = 2π"  }]  });}</script>Si la rueda gira dos vueltas, seleccione los enunciados correctos.<br><br><ol><li>La gráfica representa a una función par</li><li>La gráfica representa a una función impar</li><li>La gráfica de la función tiene un período de π</li><li>La gráfica de la función tiene un período de 2π</li></ol>',
		opcion: ['1,4<!--ruedabicicleta-->', '1,3<!--ruedabicicleta-->', '2,3<!--ruedabicicleta-->', '2,4<!--ruedabicicleta-->'],
		respuesta: 3,
	},
	{
		pregunta: 'Una partícula se encuentra sobre el borde de una rueda de bicicleta describiendo una trayectoria tal como indica la figura.<br><div class="center-align" id="borderueda"></div><div><img class="borderuedaimg responsive-img" src="mateEAES/funciongrafica1.png"></div><script>{  functionPlot({  target: "#borderueda",  disableZoom:true,  height:400,  width:650,  yAxis: { domain: [-1.5, 1.5], label:"x(m)" },  xAxis: { domain: [-0.5, 6.5],label:"t(s)"  },    grid:true,    data: [{      fn: "sin(2x)",	  color:"purple",    }],	annotations: [{    x: 3.1416,    text: "x = π"  }, {    x: 6.2831,    text: "x = 2π"  }]  });}</script>Si la rueda gira dos vueltas, seleccione los enunciados correctos.<br><br><ol><li>La gráfica representa a una función par</li><li>La gráfica representa a una función impar</li><li>La gráfica de la función tiene un período de π</li><li>La gráfica de la función tiene un período de 2π</li></ol>',
		opcion: ['1,4<!--ruedabicicleta-->', '1,3<!--ruedabicicleta-->', '2,3<!--ruedabicicleta-->', '2,4<!--ruedabicicleta-->'],
		respuesta: 3,
	},
	{
		pregunta: 'Una partícula se encuentra sobre el borde de una rueda de bicicleta describiendo una trayectoria tal como indica la figura.<br><div class="center-align" id="borderueda"></div><div><img class="borderuedaimg responsive-img" src="mateEAES/funciongrafica1.png"></div><script>{  functionPlot({  target: "#borderueda",  disableZoom:true,  height:400,  width:650,  yAxis: { domain: [-1.5, 1.5], label:"x(m)" },  xAxis: { domain: [-0.5, 6.5],label:"t(s)"  },    grid:true,    data: [{      fn: "sin(2x)",	  color:"purple",    }],	annotations: [{    x: 3.1416,    text: "x = π"  }, {    x: 6.2831,    text: "x = 2π"  }]  });}</script>Si la rueda gira dos vueltas, seleccione los enunciados correctos.<br><br><ol><li>La gráfica representa a una función par</li><li>La gráfica representa a una función impar</li><li>La gráfica de la función tiene un período de π</li><li>La gráfica de la función tiene un período de 2π</li></ol>',
		opcion: ['1,4<!--ruedabicicleta-->', '1,3<!--ruedabicicleta-->', '2,3<!--ruedabicicleta-->', '2,4<!--ruedabicicleta-->'],
		respuesta: 3,
	},
	{
		pregunta: 'Una partícula se encuentra sobre el borde de una rueda de bicicleta describiendo una trayectoria tal como indica la figura.<br><div class="center-align" id="borderueda"></div><div><img class="borderuedaimg responsive-img" src="mateEAES/funciongrafica1.png"></div><script>{  functionPlot({  target: "#borderueda",  disableZoom:true,  height:400,  width:650,  yAxis: { domain: [-1.5, 1.5], label:"x(m)" },  xAxis: { domain: [-0.5, 6.5],label:"t(s)"  },    grid:true,    data: [{      fn: "sin(2x)",	  color:"purple",    }],	annotations: [{    x: 3.1416,    text: "x = π"  }, {    x: 6.2831,    text: "x = 2π"  }]  });}</script>Si la rueda gira dos vueltas, seleccione los enunciados correctos.<br><br><ol><li>La gráfica representa a una función par</li><li>La gráfica representa a una función impar</li><li>La gráfica de la función tiene un período de π</li><li>La gráfica de la función tiene un período de 2π</li></ol>',
		opcion: ['1,4<!--ruedabicicleta-->', '1,3<!--ruedabicicleta-->', '2,3<!--ruedabicicleta-->', '2,4<!--ruedabicicleta-->'],
		respuesta: 3,
	},
	{
		pregunta: 'Una partícula se encuentra sobre el borde de una rueda de bicicleta describiendo una trayectoria tal como indica la figura.<br><div class="center-align" id="borderueda"></div><div><img class="borderuedaimg responsive-img" src="mateEAES/funciongrafica1.png"></div><script>{  functionPlot({  target: "#borderueda",  disableZoom:true,  height:400,  width:650,  yAxis: { domain: [-1.5, 1.5], label:"x(m)" },  xAxis: { domain: [-0.5, 6.5],label:"t(s)"  },    grid:true,    data: [{      fn: "sin(2x)",	  color:"purple",    }],	annotations: [{    x: 3.1416,    text: "x = π"  }, {    x: 6.2831,    text: "x = 2π"  }]  });}</script>Si la rueda gira dos vueltas, seleccione los enunciados correctos.<br><br><ol><li>La gráfica representa a una función par</li><li>La gráfica representa a una función impar</li><li>La gráfica de la función tiene un período de π</li><li>La gráfica de la función tiene un período de 2π</li></ol>',
		opcion: ['1,4<!--ruedabicicleta-->', '1,3<!--ruedabicicleta-->', '2,3<!--ruedabicicleta-->', '2,4<!--ruedabicicleta-->'],
		respuesta: 3,
	}
]
let quizoflenguaje = [

	{
		pregunta: '<b>Identifique el tipo de argumento marcado con negrita en el texto. </b><br><br>La educación posee la capacidad incomparable de reducir la pobreza extrema y potenciar los objetivos de desarrollo demás amplio espectro. Esto concuerda con la concepción de educación que menciona que es el conjunto de actividades realizadas en contextos diferentes (formal, no formal e informal) para satisfacer las necesidades educativas básicas. Según datos preliminares del Informe del Fondo de las Naciones Unidas para la infancia (Unicef), las principales estadísticas publicadas constituyen una prueba de que la inversión en educación mitiga la pobreza extrema. Es necesario reconocer que destinar recursos que mejoren la educación garantiza beneficios considerables en materia de salud y productividad. Sin embargo, para poner en marcha esta capacidad transformadora de la educación, será preciso ampliar los nuevos objetivos de desarrollo para que aseguren no solo la igualdad de acceso a la instrucción primaria para todos los niños, sino también una enseñanza secundaria de calidad. "Las conclusiones dadas a conocer hoy confirman con mayor nitidez que la educación puede mejorar la vida y la sociedad", afirmó la directora general de Unicef, Irina Bokova. <br><br>',
		opcion: ['Argumento de analogía', 'Argumento histórico — científico', 'Argumento de sabiduría popular', 'Argumento de autoridad'],
		respuesta: 4,
	},
	{
		pregunta: 'Con base en el texto, identifique al escritor de la obra literaria<br><br>Una de las principales obras ensayísticas lleva por título Las Catilinarias (1880-82) y son un fresco de la vida del Ecuador en tiempos del dictador Ignacio de Veintimilla. En este estudio vamos a analizar esta obra desde tres perspectivas diferentes, aunque complementarias. Al ser un ensayo sobre la política de la época no podemos olvidarnos de la situación del país en los años setenta del siglo XIX. Las intrigas políticas y los personajes que las protagonizaban son piezas esenciales en los doce ensayos que componen el libro, por lo que es imprescindible tener nociones sobre el momento exacto de la política ecuatoriana de esta década.<br><br>',
		opcion: ['A.	Luis A. Martínez', 'B. Juan Montalvo', 'C. Jorge Carrera Andrade', 'D.	Miguel Río Frío'],
		respuesta: 2,
	},
	{
		pregunta: ' Con base en el texto, identifique el propósito del autor<br><br>Bibliotecas virtuales<br>Funcionan corno las tradicionales, pero tienen como ventaja poder consultar sus catálogos desde cualquier parte que te permita acceso a Internet. Una de las más visitadas es la Biblioteca Virtual Miguel de Cervantes (www.cervantesvirtual.com). Entra y escribe en el buscador el autor, el título, o el tema que te interesa. Inmediatamente aparecerán en tu pantalla varias opciones que te permitirán acotar tu búsqueda y llegar a la información que necesitas.<br><br>',
		opcion: ['A. Mencionar que las bibliotecas virtuales son idénticas a las bibliotecas tradicionales', 'B. Señalar que la Biblioteca Virtual Miguel de Cervantes es la más utilizada', 'C. Evidenciar el avance que ha tenido la biblioteca gracias al desarrollo digital', 'D. Destacar que hay que escribir el autor, el título en el buscador'],
		respuesta: 2,
	},
	{
		pregunta: ' Con base en el texto, identifique el tipo de falacia.<br><br>En 2012, México se preparaba para las elecciones presidenciales. Los candidatos finalistas ofrecieron un debate, uno de ellos afirmó, acerca de su oponente que: “No queremos un candidato joven que representa lo que ustedes han padecido en Veracruz, representa autoritarismo, representa rendición frente al crimen y que adeudará sus promesas al pueblo por su inexperiencia”<br><br>',
		opcion: ['A. Ad populum', 'B. Ad ignorantiam', 'C. Ad verecundiam', 'D. Ad hominem'],
		respuesta: 4,
	},
	{
		pregunta: ' Con base en el texto, identifique la obra literaria <br><br>Cumandá es una bella joven que vive en la selva peruano-amazónica con su familia indígena. Su belleza es tal, que se la distingue y premia al seleccionarla como la nueva esposa del cacique de los Paloras. Cumandá, sin embargo, ha conocido y se ha enamorado de Carlos Orozco, un joven blanco, con quien secretamente planea casarse. Tanto Cumandá como Carlos crean distancia cultural entre la joven y su familia y tribu, destacando las diferencias existentes. Cuando Tongana, el padre de Cumandá, descubre los planes de su hija, hace todo lo posible por impedirlo (con amenazas y golpes). El casamiento de Cumandá con el cacique será parte de una importante celebración: el curaca debe reafirmar su poderío, lo que logra venciendo al cacique retador, y se hace merecedor de los brazaletes de piel de culebra, que entrega a Cumandá en señal de afecto. Carios, que ha seguido a la tribu a la espesura de la selva, intenta frustradamente rescatar a Cumandá; solo logra caer prisionero.<br><br>',
		opcion: ['A. Baldomera', 'B. Huasipungo', 'C. La emancipada', 'D. Cumandá'],
		respuesta: 4,
	},
	{
		pregunta: ' Con base en el fragmento señalado con negrita, identifique el tipo de argumento.<br><br>Según la Unesco, “la población no posee elementos para decidir ante la desinformación”. La difusión de noticias falsas, a través de las redes, en las últimas elecciones presidenciales de Estados Unidos, México y Brasil, reavivó una preocupación global: el riesgo de las democracias occidentales ante la desinformación. Un estudio internacional muestra que los llamados nativos digitales no logran identificar una noticia real de una falsa. <b>El estudio reveló que el 80% de los chicos solo ingresa al primer enlace que aparece en una búsqueda en Internet, el 70% admite que confía en un contenido a partir de quién lo replica y el 50% confunde información y publicidad.</b> Roxana Morduchowicz, experta en comunicación digital, afirma que: “al compartir información sin chequear, en forma inconsciente se enturbia la opinión de las personas y se pone en peligro la democracia”. Por ello, “la escuela actualmente debe enfatizar en la alfabetización informacional”, señaló.<br><br>',
		opcion: ['A. Causal', 'B. Definición', 'C. Autoridad', 'D. Hecho'],
		respuesta: 4,
	},
	{
		pregunta: ' Con base en el texto, identifique la transformación de la cultura escrita en la red social Twitter<br><br>Me alegra especialmente ver a @CarlosMayo entre los mejores de nuevo después de la lesión de rodlla que le tuvo parado más de un año. Un atleta al que se le ha etrañado en el #CampeonatodeEspaña. Muchas Felicidades a su entrenador @JoseMareca<br><br>',
		opcion: ['A. El uso de etiquetas digitales como parte fundamental de la constitución del mensaje', 'B. La abreviatura de palabras para cumplir con a limitación del número de caracteres', 'C. Uso sostenido de las mayúsculas para denotar la emoción de la persona que escribe', '0'],
		respuesta: 1,
	},
	{
		pregunta: ' Con base en el texto, identifique la paráfrasis<br><br>Es preciso informar el momento en que se llegará, así las personas se sientes contentas con anterioridad y, a medida que avance el tiempo, se sentirán más felices<br><br>',
		opcion: ['A. Para ser alegres, las costumbres será necesarias a medida que pase el tiempo', 'B. Es necesario que se manifieste cuando se llegará para estar alegre con antelación', 'C. A veces se hace necesario establecer tiempos para todas las acciones iniciadas', '0'],
		respuesta: 2,
	},
	{
		pregunta: ' Completa la analogía<br><br>_______ es a cuero como oveja es a _______.<br><br>',
		opcion: ['A. Toro-lana', 'B. Duro-bramido', 'C. Resistente-mamífero', 'D. Piel-rumiante'],
		respuesta: 1,
	},
	{
		pregunta: 'Basado en la situación, ¿Qué se puede deducir? <br><br>Cuentan que un día estaba Mullah en la calle, en cuatro patas, buscando algo, cuando se le acercó un amigo y le preguntó: — Mullah, ¿qué buscas? Y él le respondió: — Perdí mi llave. — Oh, Mullah, qué terrible. Te ayudaré a encontrarla. Se arrodilló y luego preguntó: — ¿Dónde la perdiste? — En mi casa. — Entonces, ¿por qué la buscas aquí afuera? — Porque aquí hay más luz. <br><br>',
		opcion: ['A. Aquello que buscamos suele estar oculto por la oscuridad interior, pero nos empeñamos en buscar en la claridad de lo superficial.', 'B. La gente actúa de tal manera que se puede dudar de su capacidad de raciocinio.', 'C. A Mullah le daba miedo la oscuridad.', 'D. Mullah pretendía llevar la luz exterior hacia el interior de su casa para poder encontrar su llave.'],
		respuesta: 2,
	},
	{
		pregunta: 'Con base en el texto, identifique la transformación que ha tenido el libro <br><br>El futuro del libro está sellado, aunque habrá un período de transición cuando los medios digitales tratarán de imitar lo que se hacía en el libro, igual que la fotografía trató de imitar a pintura o las primeras obras impresas a los manuscritos. La literatura va a sobrevivir, pero bajo otras formas: que para mí serán radicalmente distintas. El paso del libro a lo electrónico implica una transformación total y uno está esperando a los artistas de esos nuevos medios.<br><br>',
		opcion: ['A. El libro pasa a un formato digital', 'B. El libro mantiene su estado físico', 'C. El futuro del libro está sellado', 'D. El libro no ha presentado ninguna transformación'],
		respuesta: 1,
	},
	{
		pregunta: 'Relacione el tipo de periódico con sus características.<br><br>Tipo de periódico<br>  1) Impreso <br> 2) Digital <br><br>Características<br>a) Empleo de maquetaciones<br>b) Uso de fotografía analógica<br>c) Interacción con los lectores<br>d) Área de distribución limitada<br>e) Uso de recursos multimedia<br>f) Inmediatez de la información<br><br>',
		opcion: ['A. 1abd, 2cef', 'B. 1acd, 2bef', 'C. 1bef, 2adc', 'D. 1cef, 2abd'],
		respuesta: 1,
	},
	{
		pregunta: 'Identifique el texto literario al que pertenece la reseña<br><br>Este texto de la poetisa ecuatoriana Dolores Veintimilla de Galindo, de principios del siglo XIX, es reconocido como uno de sus poemas más difundidos. Se desarrolla alrededor de elementos como la tristeza, resultado de un amor no correspondido. Se dice que esta composición se origina en su fracaso matrimonial así, describe la insatisfacción de su corazón que no era amado en la misma medida en que amaba. En los versos que lo constituyen se evidencia el desconsuelo de un amor no correspondido.<br><br>',
		opcion: ['A. A mi corazón', 'B. Quejas', 'C. Cansancio', 'D. Emoción vesperal'],
		respuesta: 2,
	},
	{
		pregunta: 'Identifique el tipo de texto<br><br>El protagonista de esta historia me jodió la tarde. Él no lo recuerda, fue hace tiempo. La única vez que lo visité en la céntrica prisión en la que lo encerraron, Cromwell Gálvez huyó de mí y se apresuró a decir que no hablaba con la prensa. Le habían quitado la libertad, pero la fama insistía en quedársele, no podía sacársela de encima ni dentro de los cuatro muros de una celda. Cromwell, el hombre que había robado un banco durante años sólo para poder acostarse con las vedettes más deseables de Lima, estaba finalmente preso y las carátulas de los diarios populares seguían poniendo su fotografía junto a letras grandes multicolores. Yo había dado su nombre en la entrada del penal diciendo que era su amigo, arriesgándome a lo que a veces nos arriesgamos los reporteros: a que la persona que buscas te reciba mal.<br><br><span style="font-size:15px">Recuperado el 26 de noviembre de 2017 enhttps://cronicasperiodisticas.wordpress.com/2008/10/01/cromwell-el-cajero-generoso/</span><br><br>',
		opcion: ['A. Crónica', 'B. Noticia', 'C. Ensayo', 'D. Reportaje científico'],
		respuesta: 1,
	},
	{
		pregunta: 'Con base en el texto, complete el organizador gráfico. <br><br>Tipos de argumentos<br>Argumento de autoridad: Se citan las palabras de estudiosos, expertos, organizaciones verídicas que manifiestan una opinión semejante a la que estamos defendiendo.<br>Argumento de conocimiento general: Defendemos una idea que es ampliamente aceptada por la sociedad (suponiendo con esto que la mayoría no se equivoca lo que lleva en muchos casos a formular lo que llamamos tópicos) o saberes que la sociedad ha admitido como válidos.<br><br><img src="lenguaEAES/tiposdeargumentoscuadro.png" alt="tipos_de_argumentos_cuadro_imagen" class="voltaje1" style="height:auto;width:20%"><br><br>1. Cita palabras de estudiosos, expertos u organizaciones verídicas que manifiestan una opinión semejante<br>2. Defiende una idea ampliamente aceptada por la sociedad (suponiendo que no es equívoca)<br>3.	De autoridad<br><br>',
		opcion: ['A.	2a, 1b, 3c', 'B.	2b, 1a, 3c', 'C.	2a, 1c, 3b', 'D.	2c, lb, 3a'],
		respuesta: 1,
	},
	{
		pregunta: 'Identifique el enunciado que manifieste una ambigüedad.<br><br>',
		opcion: ['A. Se citaron en el banco donde se habían conocido.', 'B. Los datos financieros del banco en el que depositaste el dinero no son confiables.', 'C. Las bancas en las que se sentaron fueron testigos de su amor.', 'D. Las mascotas de los vecinos hacen mucho ruido.'],
		respuesta: 1,
	},
	{
		pregunta: 'Con base en la intervención del foro, identifique el tipo de argumento marcado en negrita<br><br>Es un verdadero placer intervenir esta mañana en el Foro Bienestar Social y Voluntariado. Iniciaré mi disertación afirmando que los humanos somos una especie extremadamente prosocial. En comparación con la mayoría de los primates, los humanos brindan másasistencia a familiares, amigos y extraños. ¿Por qué las personas dedican sus recursos a ayudar a los demás? Principalmente porque abarca un efecto positivo y una mayor satisfacción con la vida. Uno de los beneficios de brindar tiempo a los demás es el voluntariado. El voluntariado se define como ayudar a otra persona sin esperar una compensación monetaria. Una gran cantidad de investigaciones correlacionadas muestran que pasar tiempo ayudando a otros está asociado con beneficios emocionales para el donante.<b>Según Lara B. Aknin, profesora Asociada en la Universidad Simon Fraser,“el voluntariado desarrolla mayor satisfacción en la vida, afecto positivo y reducción de la depresión”</b>Esta conclusión se extrae de una investigación que la catedrática realizó de 37 estudios correlacionales con muestras que van desde 15 hasta más de 2 100 adultos voluntarios, donde se obtuvo puntuaciones significativamente más altas en las mediciones de calidad de vida, en comparación con los no voluntarios.<br><br>',
		opcion: ['A.	Causal', 'B. Hecho', 'C. Definición', 'D. Autoridad'],
		respuesta: 4,
	},
	{
		pregunta: 'Complete el siguiente párrafo <br><br>___________, en su carácter ya era innato su inclinación hacia la literatura lo que le produjo amistades en el mundillo intelectual de su época. A partir de allí inicia una cercana relación con Joaquín Gallegos Lara y Demetrio Aguilera Malta. Formó parte del Grupo de Guayaquil o también llamados «________________» en conjunto con Alfredo Pareja Diezcanseco, Demetrio Aguilera Malta, José de la Cuacha, Joaquín Gallegos Cara. En 1930 se edita {a mayor obra del Grupo de Guayaquil llamada "Los Que Se Van" (Cuentos del Cholo y de los Montubios), con el que se inició la etapa del realismo en el Ecuador. Apuntando a su bella obra en la literatura, hemos de indicar que en 1933 edita «Yunga» en donde exhibe un estilo suficientemente socialista. «Relatos De Emmanuel» que se edita en 1939 y la reconocida y bella pieza ___________ hecha pública en el año de 1942. En esta obra se detalla con 9. <br><br>',
		opcion: ['A. Joaquín Gallegos Lara — Los que se van — Las cruces sobre el agua', 'B. Jorge Icaza — Huasipungo- El chulla Romero y Flores', 'C. Jorge Enrique Adoum — Tzántzicos — Entre Marx y una mujer desnuda ', 'D. Enrique Gil Gilbert — Los cinco como un puño - Nuestro pan'],
		respuesta: 4,
	},
	{
		pregunta: 'Con base en el texto, identifique el tipo de falacia.<br><br>Hace muchos años surgió la teoría de que probablemente el único satélite natural de la Tierra, la Luna, era una bola enorme de queso, para cornprobarlo se ha realizado un experimento con el fin de recrear las mismas condciones y características lumínicas sobre varios trozos de queso y se ha comprobado que brillan igual. A no poseer los instrumentos ni los recursos necesarios para viajar a la Luna, se ha aceptado que la materia de su superficie es similar a la del queso<br><br>',
		opcion: ['Falacia ad verecundiarn', 'Falacia ad baculum', 'Falacia ad ignorantiam', 'Falacia ad hominem'],
		respuesta: 3,
	},//
	{
		pregunta: 'Con base en el texto, identifique el tipo de falacia utilizada por Carolina<br><br>En un país vecino, un congresista denuncia, de manera argumentada, ante un medio de comunicación televisivo, los actos de corrupción en los que habría incurrido Carolina, funcionaría de turno al gestionar cargos públicos. La aludida, al hacer uso de su derecho a la réplica, expresa lo siguiente: “¿cómo puede, usted señor congresista, hablar de corrupción, si cuando ustedes (los de su partido político) gobernaban, cada día había un escándalo de corrupción” <br><br>',
		opcion: ['Ad Verecundiam', 'Ad Baculum', 'Ad Ignorantiam', 'Ad hominem'],
		respuesta: 4,
	},
	{
		pregunta: 'Complete la analogía. <br><br>Comino es a _________ como plomo es a _______________ <br><br>',
		opcion: ['Aromático - bala', 'Amarillo - mina', 'Especia - metal', 'Planta - dúctil'],
		respuesta: 3,
	},
	{
		pregunta: 'Lea el siguiente párrafo y, luego, relacione la columna izquierda (autores ecuatorianos) con la columna derecha (el período al que pertenecen sus obras).<br><br>Ecuador ha sido cuna de grandes escritores a través de los años. En sus entrañas surgieron ensayistas como Juan Montalvo (1832-1889), autor de libros como El Cosmopolita y Las Catilinarias (1866-1882), quien logró posicionar su nombre entre afamados ensayistas latinoamericanos como Faustino Sarmiento, José Enrique Rodo, José Vasconcelos, Pedro Henríquez Ureña, José Carlos Mariátegui y Alfonso Reyes. Más tarde, las abismales inequidades sociales inspiraron las obras de grandes autores como Jorge Icaza, Alcides Arguedas, Ciro Alegría y José de La Cuadra como los máximos representantes de la narrativa indigenista ecuatoriana. La primera novela de Jorge Icaza, Huasipungo (1934) ostenta ser la obra más traducida de la literatura ecuatoriana. En el mismo año, José de La Cuadra, publicó su famosa novela montubia, Los Sangurimas, caracterizada por su realismo social. Posteriormente, Ecuador fue testigo del surgimiento de grandes autores como Raúl Pérez Torres (1941), Gabriela Alemán (1968) y Xavier Oquendo (1972), quienes dejarían muy en alto el nombre de Ecuador por sus contribuciones frescas y originales al mundo de la literatura contemporánea.<br><br><table class="centered responsive-table">         <thead>          <tr>              <th><b>Autores ecuatorianos</b></th>              <th><b>Periodo</b></th>          </tr>        </thead>        <tbody>          <tr>            <td>1) Jorge Icaza</td>            <td>a) Segunda mitad del siglo XX</td>          </tr>          <tr>            <td>2) Xavier Oquendo</td>            <td>b) Siglo XIX</td>          </tr>		  <tr>            <td>3) Juan Montalvo</td>            <td>c) Primera mitad del siglo XX</td>          </tr>		  <tr>            <td>4) José de la cuadra</td>            <td></td>          </tr>        </tbody>      </table><br><br>',
		opcion: ['1c, 2b, 3a, 4c<!--obras-->', '1c, 2a, 3b, 4c<!--obras-->', '1a, 2b, 3c, 4d<!--obras-->', '1a, 2b, 3d, 4c<!--obras-->'],
		respuesta: 2,
	},
	{
		pregunta: 'Para presidente no se estudia. No hay licencias, maestrías ni doctorados para una función de tanta responsabilidad. Y, sin embargo, las supersticiones modernas dicen que nada de cierta responsabilidad deba estar a cargo de empíricos, de gente que no se haya preparado universitariamente para esa función y precisamente ésa. Así se llega a establecer un derecho monopólico por demás conveniente para los propietarios del título en cuestión. Si hubiera doctorados en presidencia de la república, el gremio trataría de que nadie ejerciera sin título. Huelga decir que, de lograrlo, serían grandes las colas de aspirantes a recibir una preparación tan útil para servir a los demás. Sin embargo, no hay manera de aprender a ser presidente fuera de la oportunidad de serlo. Nada prepara para el poder fuera del poder. No se aprende antes de ejercer: se aprende ejerciendo. Se aprende a ser presidente después de que oficialmente se es. Lo cual no se debe a que, desgraciadamente, exista la licenciatura, maestría, doctorado, presidencial. Si se estudia para presidente, la situación sería la misma. El título serviría no para definir quién aprendió previamente y por lo tanto tienen derecho a aprender, sino para definir quién tiene derecho a la oportunidad de aprender posteriormente si es que llega a aprender.<br><br> ¿Cuál es la dea principal del texto?<br><br>',
		opcion: ['Sería de utilidad crear una carrera para presidente de la república', 'Para gobernar daría lo mismo que existiera una carrera universitaria como si no la hubiera', 'Se está planificando crear una carrera para presidente', 'A gobernar se aprende ejerciendo el poder'],
		respuesta: 3,//pendiente de ver
	},
	{
		pregunta: 'Con base en la información, identifique la contribución de la tecnonlogía a los períodicos.<br><br>El proceso de elaboración de un periódico se prolonga, prácticamente, a lo largo de las 24 horas de día. Desde las primeras horas de la mañana, los redactores trabajan para obtener a información que contarán a sus lectores en el periódico del día siguente. Después, se procede a imprimir el periódico en la rotativa, lo que implica un uso abundante de materia prima como papel y tinta. Al mismo tiempo que los diarios llegan a los quioscos y domicilios de los lectores, los periodistas ya están iniciando una nueva jornada de trabajo para preparar el periódico del próximo día. Esto, en cuanto al diario en su formato tradicional de papel, porque en su versión digital los contenidos se actualizan permanentemente, durante las 24 horas del día, los 365 días del año.<br><br>',
		opcion: ['Rebaja en el tiempo empleado para recabar información', 'Transmición de la información en tiempo real', 'Disminución de la jornada laboral del periodista', 'Aumento de materia prima en procesos de elaboración'],
		respuesta: 2,
	},
	{
		pregunta: 'Con base en la información, complete el mapa jerárquico.<br><br>Partiendo de la tradicional oposición que establecía la Retórica clásica en torno a las figuras o recursos literarios, distinguiendo entre figuras de dicción relacionadas con el plano del significante: la aliteración, la anáfora, el retruécano o el calambur; y figuras de pensamiento, que se refieren al plano del significado, afectando concretamente a la concepción de ideas o pensamientos: la antítesis, el epíteto, la hipérbole o la lítote. La retórica clásica ha establecido una clasificación de las figuras literarias; incluyendo otros dos tipos o clases de figuras: las de construcción, que las denominaba figuras de dicción por variación del orden (transmutatio), y los tropos, incluidos tradicionalmente por parte de la retórica dentro de las figuras de pensamiento, siendo la metáfora la más conocida de ellas. <br><br><div class="material-placeholder" style=""><img src="lenguaEAES/figurasliterarias.png" alt="figurasliterarias-ejercicio-EAES-pilas" class="responsive-img materialboxed" style="height:auto;width:50%;z-index:1000;"></div><script>  $(".materialboxed").materialbox();</script>',
		opcion: ['1a, 2c, 3b, 4d<!--figurasliter-->', '1b, 2a, 3d, 4c<!--figurasliter-->', '1b, 2d, 3a, 4c<!--figurasliter-->', '1c, 2a, 3b, 4d<!--figurasliter-->'],
		respuesta: 4,
	},
	{
		pregunta: 'Identifique la forma más adecuada de comunicar esta noticia<br><br>La municipalidad quiere informar a los habitantes que el servicio de agua potable no estará disponible en cierto sector de la ciudad, para que tomen sus debidas precauciones.<br><br>',
		opcion: ['Se comunica a todos los pobladores de la zona centro de la ciudad que el servicio de agua potable será suspendido desde las 21:00 del día de hoy 15 de julio hasta las 18:00 de mañana 16 de julio.', 'Ponte pilas varón, no va a haber agua todo el día.', 'Queridos amigos, a todos lo que viven en el centro de la ciudad, lamentamos decirles que durante un día, desde hoy en la noche, hasta mañana en la tarde, no tendrán agua potable. ', 'A toda la comunidad se informa que debido a la presión excesiva (medida en pascales) de una de las tuberías; esta necesita de un mantenimiento basado en la normativa de control ambiental impuesto por las organizaciones internacionales, por lo que el líquido vital (H20) será escaso en la zona centro de la ciudad, entre las 21:00 de hoy hasta las 18:00 de mañana. '],
		respuesta: 1,
	},
	{
		pregunta: 'Con base en el fragmento, identifique el recurso literario que se empleó.<br><br>Era don Cayetano un viejecillo de setenta y seis años, vivaracho, alegre, flaco (...) era miope y corregía el defecto con gafas de oro montadas en nariz larga y corva. Detrás de los cristales brillaban unos ojuelos inquietos, muy negros y redondos.',
		opcion: ['Elipsis', 'Prosopografía', 'Prosopopeya', 'Polisíndeton'],
		respuesta: 1,
	},
	{
		pregunta: 'Elija la respuesta correcta.<br>¿Qué héroe le impresionó vivamente el espíritu poético y patriótico de José Joaquín de Olmedo para que este lo exaltara en el poema épico "La victoria de Junín"?<br>',
		opcion: ['Simón Bolívar', 'Atahualpa', 'Sucre', 'Rumiñahui'],
		respuesta: 1,
	},
	{
		pregunta: 'Seleccione la opción que resume el significado de la frase.<br>“La diferencia entre un esclavo y un ciudadano es que el ciudadano puede preguntarse por su vida y cambiarla”.<br><br>(Alejandro Gándara)Sánchez, E. (2020). Plan de crecimiento personal: cómo hacerlo y no dejarlo en el papel. (f.c. 27 dediciembre de 2020).<br>https://lamenteesmaravillosa.com/plan-de-crecimiento-personal-como-hacerlo-y-no-dejarlo-en-el-papel/<br><br>',
		opcion: ['La posibilidad de actuar que tienen las personas libres.', 'Diferencias entre sociedades esclavistas y las que no lo son.', 'Cambios que el ser humano puede generar en su propia vida.', 'La vida cotidiana para quien obtiene la ciudadanía.'],
		respuesta: 3,//OJO
	},
	{
		pregunta: 'Determine la respuesta correcta, de tal manera que las palabras elegidas completen los espacios pendientes según la conjugación de los verbos irregulares.<br><br>La sorpresa de ayer me _______ una fuerte emoción.<br>Luisa pidió que él _______ hasta la ciudad.<br>Las medidas _______ los accidentes de tránsito.<br>Le dije que _______ ese cuadro la presentación.<br>Ayer se _______ cambios de última hora.<br><br>',
		opcion: ['produció, conduzca, reducieron, reproduciera, introdujeron', 'produjo, condujera, redujieron, reprodujera, introducieron', 'produjo, condujera, redujeron, reprodujera, introdujeron', 'produjo, condujiera, redujeron, reprodujieron, introdujieron'],
		respuesta: 3,
	},
	{
		pregunta: 'Con base en el texto, relacione lo siguiente.<br>Las relaciones semánticas comprenden aquellas relaciones que se establecen entre las palabras, dígase: sinonimia, polisemia, homonimia y antonimia. Es decir, constituye la relación que existe entre dos elementos con significado.<br><br><table class="centered responsive-table">        <thead>          <tr>              <th><b>Relaciones semánticas</b></th>              <th><b>Ejemplo</b></th>          </tr>        </thead>        <tbody>          <tr>            <td>1) Sinonimia</td>            <td>a) Pluma</td>          </tr>          <tr>            <td>2) Antonimia</td>            <td>b) Vivo/muerto</td>          </tr>		  <tr>            <td>3) Polisemia</td>            <td>c) Vino</td>          </tr>		  <tr>            <td>4) Homonimia</td>            <td>d) Sacerdote/cura</td>          </tr>        </tbody>      </table><br><br>',
		opcion: ['1a, 2d, 3b, 4c<!--s.a.h.p-->', '1a, 2d, 3c, 4b<!--s.a.h.p-->', '1c, 2b, 3d, 4a<!--s.a.h.p-->', '1d, 2b, 3a, 4c<!--s.a.h.p-->'],
		respuesta: 4,
	},
	{
		pregunta: 'A partir del análisis del fragmento de la obra La Linares (Egüez, 1982), relacione al personaje de lacolumna izquierda con su descripción en la columna derecha.<br><br>Yo soy La Linares bella, yo soy La Linares fatal. Estudie hasta los dieciséis años con las monjas del Sagrado Corazón. Mi padre fue de Riobamba y se llamó Ernesto Martínez. Estuvo enamorado de mi madre y no se casó con ella porque a los sesenta se comienza a creer en Dios pero se deja de creer en la liturgia. A la sazón mi madre tenía veinticinco años y creía en el amor, en las leyes y en las buenas costumbres. Las bodas no son para la pareja sino para contentar o defraudar a una docena de inquisidores, le decía él. Yo creo que en el fondo debe haber pesado la diferencia de edad entre ellos y el consecuente trago amargo del ridículo, o quizás esas fantasías sobre amores libres e incestuosos que mi madre me relataba medio ida y que nunca supe si en verdad era una historia contada por mi padre a ella o simples alucinaciones suyas. A las dos semanas de mi nacimiento murió mi padre. Era, como se decía en ese tiempo, rico y de buena familia, aunque de mala reputación.<br><br><table class="centered responsive-table">        <thead>          <tr>              <th><b>Personaje</b></th>              <th><b>Descripción</b></th>          </tr>        </thead>        <tbody>          <tr>            <td>1) La Linares</td>            <td>a) persona adinerada, pudiente y creyente</td>          </tr>          <tr>            <td>2) Ernesto Martínez</td>            <td>b) persona joven, bien parecido(a) y lleno(a) de preguntas sobre su familia.</td>          </tr>		  <tr>            <td>3) Madre de la Linares</td>            <td>c) persona joven, fantasioso(a) y viudo(a)</td>          </tr></tbody>      </table><br><br>',
		opcion: ['1b, 2a, 3c<!--linares-->', '1c, 2a, 3b<!--linares-->', '1a, 2c, 3b<!--linares->', '1c, 2b, 3a<!--linares-->'],
		respuesta: 1,
	},
	{
		pregunta: 'Responda. ¿Cuál es el mensaje implícito de la conversación?<br><br><b>Ana:</b> Algunas personas están acostumbradas a dar coimas para agilizar sus trámites u obtener un resultado a favor suyo.<br><b>Juan:</b> Esas acciones deberán ser juzgadas con la ley en la mano.<br><b>Ana:</b> Sí. Esos actos perjudican a la sociedad.<br><br>',
		opcion: ['Las costumbres son acciones realizadas tradicionalmente por un grupo social', 'La corrupción es un tema que se enseña tanto en las escuelas como en los colegios', 'Las leyes son un conjunto de normas que se encuentran en textos legales', 'Las coimas son actos de corrupción que se encuentran penadas por la justicia'],
		respuesta: 4,//ojo
	},
	{
		pregunta: 'Con base en el refrán identifique el significado implícito.<br><br> Donde menos se piensa, salta la liebre.<br><br>',
		opcion: ['Todos piensan que las liebres saltan muy alto y son astutas.', 'Seamos como las liebres, animales muy ágiles.', 'La liebre es un animal que salta igual que el hombre.', 'A veces suceden cosas sorprendentes y cuando menos se lo espera.'],
		respuesta: 4,
	},
	{
		pregunta: 'Con base en los dos elementos propuestos, determine los que complementan de manera correcta la analogía.<br><br>María es a _______ como _______ es a Verónica.<br><br>',
		opcion: ['Cristina - Diana', 'Cuenca - Montevideo', 'Juan - Fernanda', 'Bety - Crisantemo'],
		respuesta: 2,
	},
	{
		pregunta: 'Elija la respuesta correcta: ¿En qué época nació José Joaquín de Olmedo?<br><br>',
		opcion: ['Republicana<!--nacimientoJJO-->', 'Independentista<!--nacimientoJJO-->', 'Colonial<!--nacimientoJJO-->', '0'],
		respuesta: 3,
	},
	{
		pregunta: "Identifique la idea implícita en el siguiente texto:<br><br>  En una carta de 1818 a su hermano, John Keats escribió: «Creo que estaré entre los poetas ingleses tras mi muerte». Tenía veintitrés años y hacía apenas dos que escribía poesía con dedicación. Se refería, claro está, a los grandes poetas ingleses: Chaucer, Spenser, Shakespeare y Milton (el mismo linaje que reclamaban para sí Wordsworth y Blake). Solo dos años antes, en octubre de 1816, había escrito su primer poema notable, el soneto On First Looking into Chapman's Homer —tras una noche en casa de su amigo Chales Cowden Clarke leyendo en voz alta una antigua traducción de Homero—, y había dejado su carrera como cirujano para dedicarse a la poesía. Solo dos años después, en septiembre de 1820, la enfermedad lo obligó a abandonar la escritura y a buscar un clima más benigno en Roma, donde murió a los veinticinco años, destruido en cuerpo y en alma. «No he dejado ninguna obra inmortal», escribió poco antes en una carta llena de amargura, «nada que haga que mis amigos se enorgullezcan de mi recuerdo, pero he amado el principio de la belleza en todas las cosas y, si hubiera tenido tiempo, habría hecho que me recordasen».<br><br>",
		opcion: ['John Keats era un ferviente admirador de los clásicos griegos, lo cual se evidenció en la calidad de su obra poética, especialmente en los sonetos.', 'John Keats mantuvo correspondencia con su hermano en relación a los mejores poetas ingleses de su tiempo.', 'Jhon Keats sufrió una destrucción física y emocional a lo largo de toda su vida, lo cual le impidió alcanzar sus metas literarias.', 'La correspondencia refleja el desencanto de Keats al final de su vida, a pesar de la ilusión que albergó en el inicio de su carrera poética.'],
		respuesta: 1,
	},
	{
		pregunta: 'Lea la siguiente oración e identifique cuál es el tipo de error que se presenta.<br><br>De acuerdo con el Centro para las Enfermedades Infecciosas (CDC), el año pasado la influenza cobró la vida de unas 35.000 personas. En promedio, anualmente, no mueren mas de 30.000 personas y solo se han registrado un par de momentos en la historia cuando esa cifra ha subido a 60.000, enfatizo la institucion.<br><br>',
		opcion: ['Ausencia de signos de puntuación.', 'Tiempo de los verbos incorrectos.', 'Ausencia de tildes.', 'Repetición de palabras.'],
		respuesta: 3,
	},
	{
		pregunta: 'Con base en la lectura del siguiente texto adaptado, identifique cuál es la intención del discurso.<br><br>"No obstante, gran parte de la controversia del término migración se encuentra asociada a la falta de información sobre este fenómeno, así como a la falsa creencia de que la inmigración es negativa, algo que desmienten grandes economías como la del Reino Unido, Francia, Australia, Canadá, Estados Unidos o España, que han crecido gracias a estos flujos migratorios; de igual modo, también tendemos a creer en varios mitos sencillos de desmontar, como que los migrantes no son personas preparadas —lo que niegan, categóricamente, movimientos de masas como la fuga de cerebros en España, Grecia, Portugal, Italia, México, Ecuador, Venezuela o Argentina en el siglo XXI— o que se limitan a la búsqueda de mejores condiciones económicas: pudiendo tratarse de diversas causas; ecológicas, políticas y bélicas, entre otras". Ayuda en acción. (2018). Tipos de migración humana: ejemplos del fenómeno migratorio. (f.c. el 20 de julio de diciembre de 2018).<br> https://ayudaenaccion.org/ong/blog/ayuda-humanitaria/tipos-de-migracion-humana/ <br><br>',
		opcion: ['Explicar sobre el debate del vocablo migración.', 'Explicar sobre la fuga de cerebros.', 'Explicar sobre las consecuencias de la migración ', 'Explicar sobre las causas de la migración.'],
		respuesta: 1,
	},
	{
		pregunta: 'Lee el siguiente fragmento y responde a la pregunta.<br><br>El español, segunda lengua de Estados Unidos y discriminada El español gana peso como lengua franca en la vida pública y económica del país, pero su crecimiento futuro está ligado a la migración. Estados Unidos será el segundo país hispanohablante del mundo en 2060, después de México. Si la proyección se cumple, para ese año habrá 119 millones de personas que hablarán español en el país. Serán cerca de uno de cada tres habitantes. Sin ir tan lejos en el tiempo, el español estadounidense, como prefieren llamarlo algunos académicos, actúa ya como lengua franca en ciudades como Nueva York, el lugar elegido por el Instituto Cervantes para presentar su anuario. Pero pese a su visibilidad, es un idioma discriminado y su futuro depende de la evolución de la inmigración.  (…) Esta última cifra incluye tanto a familias que se definen como hispanas y a estadounidenses que sin identificarse hispanos se comunican en español en sus casas. A estos se suman 15,8 millones que tienen un dominio “limitado” del idioma. Se trata de hispanos que abandonaron el uso la lengua madre o estudiantes de español con un nivel de conocimiento bajo de la lengua. El español es el idioma más estudiado a todos los niveles de la enseñanza primaria y secundaria, hasta el punto de que triplica a otras lenguas como el francés, el alemán o el chino. De 11 millones de estudiantes que cursaron lengua extrajera, más de siete millones lo hicieron en cursos de español. “El margen de crecimiento como lengua extranjera aún es muy amplio”, afirman los autores del anuario. El 25% de los alumnos en las escuelas públicas de EE UU era de origen hispano en 2015. Los programas de inmersión dual son lo que mejor contribuyen al desarrollo del inglés de una manera consistente. En el instituto hay material educativo y programas de estudio dirigidos a los “hablantes de herencia”. Pero carecen de profesores debidamente formados. Pozzi, S. y Morales, M. (2019). El español, segunda lengua de Estados Unidos y discriminada. (f. c. 6 de diciembre 2020). https://elpais.com/cultura/2019/10/10/actualidad/1570743952_542098.html <br><br>Elija tres causas por las cuales se ha dado el crecimiento del idioma español en Estados Unidos<br><br><ol><li>La migración masiva de hispanohablantes. </li><li>La creación del anuario del Instituto Cervantes en Nueva York. </li><li>Familias hispanas y estadounidenses se comunican en español.</li><li>El aprendizaje del idioma español como segunda lengua. </li><li>La creación de programas de inmersión dual.</li></ol><br><br>',
		opcion: ['1, 2, 4<!--españolEEUU-->', '2, 3, 5<!--españolEEUU-->', '2, 4, 5<!--españolEEUU-->', '1, 3, 4<!--españolEEUU-->'],
		respuesta: 4,
	},
	{
		pregunta: '¿Cuál de las siguientes opciones es la idea principal del texto?<br><br>Estudios preliminares han encontrado que la sandía combate la acumulación de placa en las arterias que podría afectar al corazón. Según un nuevo estudio del  Journal of Agricultural Food and Chemistry, el consumo de zumo de sandía, antes de un entrenamiento  duro,  ayuda  a  reducir  la  frecuencia cardíaca de los atletas y el dolor muscular al día siguiente.  La sandía es baja en grasa y calorías (sólo 30 calorías por 100 g de sandía) pero rica en numerosos fitonutrientes y antioxidantes que son esenciales para una salud óptima. Estudios demuestran que un mayor consumo de licopeno se asocia con una mejor salud de la próstata y aminora el riesgo de desarrollar cáncer de próstata. Según un estudio  publicado por el  fisiólogo de la universidad  de Florida Arturo Figueroa, las mujeres posmenopáusicas experimentan una   mejor salud cardiovascular después de tomar suplementos de extracto de sandía durante 6 semanas. Además, en otro estudio de 2012, publicado por Figueroa, confirmaba que tales suplementos ayudaban a aliviar la presión arterial en adultos obesos de mediana edad... También es cierto que para conseguir los efectos deseados es necesario ingerirla en grandes cantidades lo que puede causar otros efectos no deseados ya que la Sandía es considerada como un buen diurético. Se  suele pensar  que la  Sandía  tiene  poco  valor nutricional ya que el 80% de su composición es agua. Sin embargo 300ml (una cuña) de sandía es alrededor de un tercio de la cantidad diaria de vitaminas A y C  recomendadas. La sandía es una de las mejores fuentes dietéticas de licopeno, un antioxidante ligado tanto a la prevención y el tratamiento del cáncer de próstata, aunque los científicos todavía están investigando los detalles de esa conexión.<br><br>',
		opcion: ['Existen múltiples razones que hacen recomendable la ingesta de sandía en la dieta diaria.', 'La reducción de la frecuencia cardiaca y el dolor muscular, la mejora de la circulación, entre otras razones, hacen favorable el consumo de sandía.', 'El consumo de sandía ayuda a aliviar la presión arterial en adultos obesos de mediana edad.', 'Las mujeres posmenopáusicas experimentan una mejor salud cardiovascular después de tomar suplementos de extracto de sandía.'],
		respuesta: 1,
	},
	{
		pregunta: 'Seleccione el propósito comunicativo del fragmento del poema Ojos africanos, de Medardo Ángel Silva.<br><br>Ayer miré unos ojos africanos<br>en una linda empleada de una tienda<br>Eran ojos de noche y de leyenda<br>eran ojos de trágicos arcanos...<br><br>Eran ojos tan negros, tan gitanos,<br>vagabundos y enfermos, ojos serios<br>que encierran cierto encanto de misterios<br>y cierta caridad con los hermanos...<br><br>Ayer miré unos ojos de leyenda<br>en una linda empleada de una tienda<br>ojos de huríes, débiles, huraños.<br><br>Quiero que me devuelva la mirada<br>que tiene su pupila apasionada<br>con el lazo sutil de sus pestañas.<br><br>Silva, M. (1914). Ojos africanos. (f.c. 13 de diciembre de 2020). https://ciudadseva.com/texto/ojos-africanos/<br><br>',
		opcion: ['Exponer argumentos y contraargumentos.', 'Presentar un discurso expositivo.', 'Expresar emociones y sentimientos.', 'Incluir falacias y ambigüedades.'],
		respuesta: 3,
	},
	{
		pregunta: 'Lea el texto y responda: ¿por qué se afirma que la sociedad actual está basada en la Grecia antigua?<br><br><span class="center-align"><b>Aportes de Grecia al mundo</b><span><br>Los principales conceptos de la sociedad actual surgen, precisamente, en la época de la Grecia antigua; conceptoscomo democracia, justicia y estado. En un momento en que se asocia el nombre de Grecia con lo corrupto y las cosas mal hechas, es también hora de reconocer que si vivimos en democracia ahora es, en parte, gracias a losaportes de los griegos. Grecia fue y seguirá siendo un ejemplo a seguir en muchísimo casos. Por otra parte, Sófocles, Mirón y un sinfín de personajes griegos están y estarán presentes en los libros de texto de nuestros hijos, nietos y bisnietos. Grecia extendió su influencia hasta tres continentes (Europa, África y Asia) y su imperio fue uno de los más grandes de la historia.<br><br>',
		opcion: ['Los principales conceptos de la sociedad actual surgen, precisamente, en la época de la Grecia antigua.', 'Si hoy vivimos en democracia, en parte, es gracias a los aportes del mundo griego. Sófocles, Mirón y un sinfín de personajes griegos están y estarán presentes en los libros de texto de nuestros hijos, nietos y bisnietos.', 'Grecia extendió su influencia hasta tres continentes (Europa, África y Asia) y su Imperio fue uno de los más grandes de la historia.', 'En la actualidad, se asocia el nombre de Grecia con lo corrupto y las cosas mal hechas.'],
		respuesta: 2,
	},
	{
		pregunta: 'Indique cuál de las siguientes opciones explica mejor el sentido del anuncio publicitario. <br><br>«Martha es una mujer emprendedora que ha decidido abrir un nuevo restaurante en la calle principal de su ciudad. El periódico local le hizo una entrevista y le pidió que hiciera una invitación a los vecinos para que se acercaran a degustar sus platos. Entonces, ella expresó: "A veces, el ritmo de vida actual nos hace olvidar que el buen humor es clave para la felicidad. Anímense a sonreír más con estas recetas". A partir de entonces, ella puso un anuncio publicitario en la entrada del local: "Platos para sonreír"». Bien Natural. (2020). Alimentos que ayudan a conservar el buen humor. (f.c. 17 de diciembre de 2020). <br>https://www.biennatural.com.ar/vivir-en-armonia/lifestyle/alimentos-que-ayudan-a-conservar-elbuen-humor.<br><br>',
		opcion: ['La presentación de los platos creados por Martha es muy divertida.', 'Los platos que se emplean para atender a los comensales, tienen diseños humorísticos.', 'La comida puede dar alegría a las personas.', 'Las recetas son preparadas con mucha alegría y, por eso, la gente es feliz al probarlas.'],
		respuesta: 3,//ojo
	},
	{
		pregunta: 'Relacione los sinónimos en la tabla según el contexto de la historia.<br><br>Santiago Nasar era un hombre de fiestas, y su gozo mayor lo tuvo la víspera de su muerte, calculando los costos de la boda. En la iglesia estimó que habían puesto adornos florales por un valor igual al de catorce entierros de primera clase. Esa precisión había de perseguirme durante muchos años, pues Santiago Nasar me había dicho a menudo que el olor de las flores encerradas tenía para él una relación inmediata con la muerte, y aquel día me lo repitió al entrar en el templo. «No quiero flores en mi entierro», me dijo, sin pensar que yo había de ocuparme al día siguiente de que no las hubiera. En el trayecto de la iglesia a la casa de los Vicario sacó la cuenta de las guirnaldas de colores con que adornaron las calles, calculó el precio de la música y los cohetes, y hasta de la granizada de arroz crudo con que nos recibieron en la fiesta. En el <b>sopor</b> del medio día los recién casados hicieron la ronda del patio. Bayardo San Román se había hecho muy amigo nuestro, amigo de tragos, como se decía entonces, y parecía muy a gusto en nuestra mesa. Ángela Vicario, sin el velo y la corona y con el vestido de raso ensopado de sudor, había asumido de pronto su cara de mujer casada. Santiago Nasar calculaba, y se lo dijo a Bayardo San Román, que la boda iba costando hasta ese momento unos nueve mil pesos. Fue evidente que ella lo entendió como una <b>impertinencia</b>. « Mi madre me había enseñado que nunca se debe hablar de plata delante de la otra gente», me dijo. Bayardo San Román, en cambio, lo recibió de muy buen <b>talante</b> y hasta con una cierta <b>jactancia</b>. <br><br>Fragmento de la novela Crónica de una muerte anunciada (García Marquez, 1981, p. 20) .<br><br>  <table class="centered responsive-table"><thead><tr><th><b>Palabra</b></th><th><b>Sinónimo</b></th></tr></thead><tbody><tr><td>1) Talante</td>            <td>a) somnolencia</td>          </tr>          <tr>            <td>2) Sopor</td>            <td>b) manera</td>          </tr>		  <tr>            <td>3) Impertinencia</td>            <td>c) Indiscreción</td>          </tr>		  <tr>            <td>4) Jactancia</td>            <td>d) Fanfarria</td>          </tr>        </tbody>      </table><br>',
		opcion: ['1d, 2c, 3a, 4b<!--sinonimoscronicadeunamuerte-->', '1c, 2d, 3a, 4b<!--sinonimoscronicadeunamuerte-->', '1b, 2a, 3c, 4d<!--sinonimoscronicadeunamuerte-->', '1c, 2a, 3b, 4d<!--sinonimoscronicadeunamuerte-->'],
		respuesta: 3,
	},
	{
		pregunta: 'Analice el siguiente fragmento adaptado e identifique el argumento del autor, considerando que la tesis que defiende es la siguiente: <br><br> La intoxicación perversa de las fake news o noticias falsas, a propósito de la pandemia del coronavirus, siembra gran desasosiego en la población mundial. La pandemia del coronavirus se desarrolla en un planeta que está más informado que nunca. Las redes sociales nos mantienen constantemente conectados, aunque no necesariamente informados. En las autopistas por las que navegan las noticias oficiales, e incontables ideas positivas, circulan también otros mensajes disfrazados. La intoxicación perversa de las fake news o noticias falsas siembra gran desasosiego en la población mundial. Millones de mensajes catastróficos y mentiras maquilladas de verosimilitud aterrizan en los dispositivos de usuarios de WhatsApp, Messenger e Instagram de todo el planeta, y mucha gente crédula —presa del pánico y de la ansiedad— reenvía estos mensajes, provocando mayor caos.  Entre tanto, se especula que buena parte de esta información podría llegar desde México, pero aún no hay certezas. Hay que investigar la situación con rigurosidad, identificar a los autores reales, y establecer cuáles son los intereses que se mueven detrás de este propósito malintencionado para juzgar a los culpables con todo el peso de la ley.<br><br> Diario El Comercio https://www.elcomercio.com/opinion/editorial/beneficiarios-noticias-falsas-editorial-opinion.html<br>',
		opcion: ['La pandemia del coronavirus se desarrolla en un planeta que está más informado que nunca.', 'La intoxicación perversa de las fake news o noticias falsas siembra gran desasosiego en la población mundial.', 'Hay que investigar la situación con rigurosidad, identificar a los autores reales y establecer cuáles son los intereses que se mueven detrás de este propósito malintencionado para juzgar a los culpables con todo el peso de la ley.', 'Millones de mensajes catastróficos y mentiras maquilladas de verosimilitud invaden WhatsApp, Messenger e Instagram de todo el planeta. Y mucha gente crédula reenvía los mensajes, provocando mayor caos.'],
		respuesta: 4,
	},
	{
		pregunta: 'Determine la idea principal del texto.<br><br>Un estudio de la Universidad de Granada analiza en los niños la influencia y los significados del contexto social a la hora de realizar actividad física. Los amigos son condicionantes y se sitúan como núcleo facilitador de sus actividades motrices. La práctica de actividades físico deportivas de niños y adolescentes está condicionada por la influencia de diferentes contextos, como puede ser el familiar, el escolar, el social, etc. Pero en este caso, el estudio se centra en este último, entendiendo por contexto social el conjunto de personas y otros agentes que comparten una cultura y que interactúan entre sí.<br>',
		opcion: ['El estudio de la Universidad de Granada, sobre la actividad física, determina que el contexto familiar en el que se desenvuelven los niños inciden de manera indirecta en su desarrollo.', 'El estudio de la Universidad de Granada, sobre la actividad física, determina que el contexto escolar en el que se desenvuelven los niños inciden de manera indirecta en su desarrollo.', 'El estudio de la Universidad de Granada, sobre la actividad física, determina que el contexto social en el que se desenvuelven los niños inciden de manera indirecta en su desarrollo.', 'El estudio de la Universidad de Granada, sobre la actividad física, determina que el contexto grupal en el que se desenvuelven los niños inciden de manera indirecta en su desarrollo.'],
		respuesta: 3,
	},
	{
		pregunta: 'Lea el siguiente fragmento: <br><br>“En cuanto a la lectura y escritura Chomsky y Piaget coinciden en afirmar que el aprendizaje de la lectura y escritura es un proceso que sirve de base para la formación integral del ser humano y que es necesario para salir adelante en un mundo competitivo. Esto indica que los niños entre los 7 y 9 años no desarrollaron adecuadamente la capacidad para identificar y analizar letras y palabras; asimismo, al no decodificar los signos escritos, no lograron extraer las ideas principales ni comprender lo que leían.”  Peñaloza, F. y Suaza, M. (2018). Impacto de la Internet en la lectura y escritura en los estudiantes del grado quinto de la institución educativa San Antonio – Cunday – Tolima. p. 39. (f.c. 07 de diciembre de 2020).<br><br> http://repository.ut.edu.co/bitstream/001/2550/1/T%200945%20633%20CD6044.pdf <br><br>Indique según Chomsky y Piaget: ¿Cuáles son las desventajas de la comunicación virtual en el aprendizaje de la lectura y la escritura en los niños de 7 y 9 años?<br>',
		opcion: ['Decodifican los signos escritos sin mayor dificultad, captación de la información más rápida.', 'La comunicación es más fluida, los procesos cognitivos se desarrollan de manera gradual.', 'Dificultad en la manera de interrelacionarse entre sus pares y sus padres.', 'Problemas al reconocer las letras y las palabras, dificultad reconocimiento ideas principales.'],
		respuesta: 4,
	}
]

let quizofcienfico = [

	{
		pregunta: 'Un proyectil es lanzado con un ángulo de 30° y una rapidez inicial de 40m/s. Si la gravedad tiene un valor de <fmath alttext="10 {m}/{s^2}" class="fm-inline"><mrow><mn>10</mn><span mtagname="mfrac" style="vertical-align: -0.126em;"><span class="fm-vert fm-frac"><table><tbody><tr><td class="fm-num-frac fm-inline"><mi class="fm-mi-length-1" mathvariant="italic">m</mi></td></tr><tr><td class="fm-den-frac fm-inline"><msup><mi class="fm-mi-length-1" mathvariant="italic">s</mi><span class="fm-script fm-inline" style="vertical-align: 0.7em;"><mn>2</mn></span></msup></td></tr></tbody></table></span></span></mrow></fmath>, calcule la altura en metros, a la cual el proyectil empieza a bajar.</b><br>',
		opcion: ['40', '80', '20', '10'],
		respuesta: 3,
	},
	{
		pregunta: 'Un automóvil se desplaza hacia el Este en línea recta, como se muestra en la figura:<br><br><img src="fisicaEAES/5B.jpg" alt="tipos_de_argumentos_cuadro_imagen" class="voltaje1" style="height:auto;width:45%"><br><br>Cuando el conductor del automóvl visualiza el semáfoo en rojo, en la distancia mostrada, aplica los frenos hasta detenerse totalmente. Si el proceso de frenado lo realiza con aceleración constante, y el eje de las abscisas coincide con a dirección de desplazamiento del automóvil, determine el vector aceleración, en <fmath alttext="{m}/{s^2}" class="fm-inline"><span mtagname="mfrac" style="vertical-align: -0.126em;"><span class="fm-vert fm-frac"><table><tbody><tr><td class="fm-num-frac fm-inline"><mi class="fm-mi-length-1" mathvariant="italic">m</mi></td></tr><tr><td class="fm-den-frac fm-inline"><msup><mi class="fm-mi-length-1" mathvariant="italic">s</mi><span class="fm-script fm-inline" style="vertical-align: 0.7em;"><mn>2</mn></span></msup></td></tr></tbody></table></span></span></fmath>, que interviene en el proceso de frenado.<br><br>',
		opcion: ['-20i', '-5i', '25i', '10i'],
		respuesta: 2,
	},
	{
		pregunta: 'El técnico de seguridad de un parque de diversiones revisa las seguridades que ofrecen los diferentes juegos a sus usuarios y observa que, al llegar a una rapidez uniforme, un juego giratorio de 4 m de diámetro da 5 vueltas completas en un tiempo de 10 segundos. Determine el módulo de la aceleración centrípeta, en <fmath alttext="{m}/{s^2} " class="fm-inline"><span mtagname="mfrac" style="vertical-align: -0.126em;"><span class="fm-vert fm-frac"><table><tbody><tr><td class="fm-num-frac fm-inline"><mi class="fm-mi-length-1" mathvariant="italic">m</mi></td></tr><tr><td class="fm-den-frac fm-inline"><msup><mi class="fm-mi-length-1" mathvariant="italic">s</mi><span class="fm-script fm-inline" style="vertical-align: 0.7em;"><mn>2</mn></span></msup></td></tr></tbody></table></span></span></fmath>, que necesita el técnico para verificar que los seguros del juego resisten la fuerza centrífuga desarrollada.',
		opcion: ['4π<sup>2</sup>', '-8π<sup>2</sup>', '7π<sup>2</sup>', '2π<sup></sup>'],
		respuesta: 4,
	},
	{
		pregunta: '<b>Determine a distancia total recorrida, en metros, por el móvil.</b><br>Un móvil parte desde el origen hasta el punto A para luego trasladarse al punto B, como indica la figura.<br><br><img src="fisicaEAES/graficavyt.png" alt="gráfica-velocidad-tiempo-ejercicio-EAES" class="responsive-img gvelocidadyt"><br><br>',
		opcion: ['29', '87/2', '1/25', '15'],
		respuesta: 1,
	},
	{
		pregunta: 'En la figura se muestra un resorte implementado en una silla de oficina para mejorar la comodidad del usuario. El segmento <b>AC</b> se diseña con el triple de longitud que el segmento <b>AB</b>; de esta manera, el eslabón <b>CAB</b>, mediante el pasador en <b>A</b>, transmite al resorte en <b>B</b> una fuerza equivalente al triple de la fuerza <b>F</b> recibida en el espaldar.<br><br><img src="fisicaEAES/sillahooke.jpg" class="responsive-img" alt="silla-ejercicio-ley-de-hooke"><br><br>Si la constante elástica del resorte es de <fmath alttext="20 000 N/m" class="fm-inline"><mrow><mrow><mn>20</mn><mn>000</mn></mrow><span mtagname="mfrac" style="vertical-align: 0em;"><span class="fm-vert fm-frac"><table><tbody><tr><td class="fm-num-frac fm-inline"><mi class="fm-mi-length-1" mathvariant="italic">N</mi></td></tr><tr><td class="fm-den-frac fm-inline"><mi class="fm-mi-length-1" mathvariant="italic">m</mi></td></tr></tbody></table></span></span></mrow></fmath>, determine la variación de longitud, en cm, que experimenta el resorte ante la acción de esta fuerza.<br><br>',
		opcion: ['3.00', '4.00', '1.00', '3.50'],
		respuesta: 1,
	},
	{
		pregunta: 'En el estudio de un material aleado, se ha obtenido que absorbe 1500J de calor al pasar de 10°C a 20°C, si se tiene una masa de 50g, ¿Cuál es el calor específico, en <fmath alttext="{KJ}/{Kg°C}" class="fm-inline"><span mtagname="mfrac" style="vertical-align: 0em;"><span class="fm-vert fm-frac"><table><tbody><tr><td class="fm-num-frac fm-inline"><mrow><mi class="fm-mi-length-1" mathvariant="italic">K</mi><mi class="fm-mi-length-1" mathvariant="italic">J</mi></mrow></td></tr><tr><td class="fm-den-frac fm-inline"><mrow><mrow><mi class="fm-mi-length-1" mathvariant="italic">K</mi><mrow><mi class="fm-mi-length-1" mathvariant="italic">g</mi><mo>°</mo></mrow></mrow><mi class="fm-mi-length-1" mathvariant="italic">C</mi></mrow></td></tr></tbody></table></span></span></fmath>, del material?<br><br>',
		opcion: ['1', '3', '1.00', '3.50'],
		respuesta: 2,
	},
	{
		pregunta: 'Al equipo de jardineros encargado de cuidar una cancha de fútbol se les pide abonar el césped, para lo cual pueden escoger entre los siguientes insumos:<br><br>La condición exigida es que el material utilizado debe ser el de mayor resistividad eléctrica. De esta manera se minimizan accidentes por rayos que puedan caer en la cancha.<br><br><table class="centered responsive-table">        <thead>          <tr>              <th>INSUMOS</th>              <th>Conductividad eléctrica</th>          </tr>        </thead>        <tbody>          <tr>            <td>Humus de lombriz</td>            <td>1.56</td>          </tr>          <tr>            <td>Melaza, urea y carbonato de calcio</td>            <td>0.6</td>          </tr>		    <tr>            <td>Hojas secas y machacadas</td>            <td>0.10</td>          </tr>        </tbody>      </table><br><br>Con base a esta información, ¿qué insumo es la mejor opción para abonar la cancha?<br><br>',
		opcion: ['A) Hojas secas y trituradas', 'B) Melaza, urea y carbonato de calcio', 'C) Humus de lombriz', '0'],
		respuesta: 1,
	},
	{
		pregunta: 'Carlos debe arrastrar un saco de papas de 40 kg de masa, desde la entrada de su casa hasta la cocina, ubicada a 2 metros de la misma. Considerando la gravedad con el valor de <b><fmath alttext="10 {m}/{s^2}" class="fm-inline"><mrow><mn>10</mn><span mtagname="mfrac" style="vertical-align: -0.126em;"><span class="fm-vert fm-frac"><table><tbody><tr><td class="fm-num-frac fm-inline"><mi class="fm-mi-length-1" mathvariant="italic">m</mi></td></tr><tr><td class="fm-den-frac fm-inline"><msup><mi class="fm-mi-length-1" mathvariant="italic">s</mi><span class="fm-script fm-inline" style="vertical-align: 0.7em;"><mn>2</mn></span></msup></td></tr></tbody></table></span></span></mrow></fmath></b> y que la superficie presenta un coeficiente de rozamiento dinámico de 0,5, determine el trabajo realizado por la fuerza de rozamiento, en kJ, que se efectúa durante esta tarea<br><br>',
		opcion: ['A) -400', 'B) -0,4', 'C) 0,4', 'D) 400'],
		respuesta: 2,
	},
	{
		pregunta: 'Con base en el texto, identifique el compuesto que contiene al grupo funcional descrito.<br>Las amidas son compuestos orgánicos nitrogenados que pueden considerarse como derivados de los ácidos carboxílicos, cuando se sustituye el grupo hidroxilo de un alcohol por el grupo amino. Estos compuestos tienen un punto de fusión bastante alto, algunos poseen un olor irritante y otros se utilizan en la medicina como anestésicos y analgésicos<br><br>',
		opcion: ['A) CH<sub>3</sub>-CH<sub>2</sub>-CO-NH<sub>2</sub>', 'B)  CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-NH<sub>2</sub>', '0', '0'],
		respuesta: 1,
	},
	{
		pregunta: 'Con base en el texto, identifique la clase de hidrocarburo a la que pertenece el compuesto descrito.<br><br> Un hidrocarburo en el que los átomos de carbono comparten un par de electrones entre sí, es decir, están unidos por enlaces simples carbono-carbono, es el compuesto orgánico 4-etil-2-metil-octano.<br><br>',
		opcion: ['A) Alquinos', 'B) Alquenos', 'C) Alcanos', '0'],
		respuesta: 3,
	},
	{
		pregunta: 'Las moléculas A y B son productos de reacciones de sustitución, ambas pertenecen al grupo de compuestos nitrogenados.<br><br><img src="quimicaEAES/Grupofun2.png" alt="grupofuncional2" class="responsive-img"><br><br>Con base en la información, seleccione las afirmaciones correctas:<br>1. El compuesto A es un nitrilo<br>2. El compuesto A es una amida<br>3. El compuesto B es una amina primaria<br>4. El compuesto B es una amina secundaria<br><br>',
		opcion: ['A) 2,4', 'B) 1,3', 'C) 2,3', 'D) 1,4'],
		respuesta: 3,
	},
	{
		pregunta: 'Calcule la velocidad, en m/s, que alcanza la caja de herramientas de 5 kg cuando se le da un golpe con una fuerza de 20i N, durante un intervalo de tiempo de una décima de segundo, como se muestra en la gráfica. Considere que la caja estaba en reposo antes de ser golpeada, asimismo, desprecie fuerzas externas como el rozamiento.<br><br><img src="fisicaEAES/puñoejercicio.png" alt="cajadeherramientasdibujo" style="width:20%"><br><br>',
		opcion: ['A) 5/2', 'B) 2/5', 'C) 3/5', 'D) 5/3'],
		respuesta: 2,
	},
	{
		pregunta: 'Con base en el texto, ¿cuál es el órgano en el que ocurre la infección descrita?<br><br>Un paciente presenta una patología conocida como cistitis, que consiste en la colonización y multiplicación microbiana, habitualmente bacteriana, en el órgano que tiene la forma de una bolsa esférica dilatable, cuya principal función se ve afectada por esta enfermedad, reduciendo su capacidad de retención a solo 50 ml de orina. Los síntomas de esta enfermedad son disuria y dolor suprapúbico.<br><br>',
		opcion: ['A) Uretra', 'B) Riñones', 'C) Uréter', 'D) Vejiga'],
		respuesta: 2,
	},
	{
		pregunta: 'La hemofilia (h) es una enfermedad recesiva ligada al cromosoma X, donde la coagulación de la sangre está alterada por la falta o deficiencia de factores de coagulación. Si en una pareja, la madre es (XX<sup>h</sup>) y se encuentra embarazada de una niña, mientras que el padre es sano (XY), ¿cuál es el porcentaje de probabilidad de que su hija sea portadora de la enfermedad? <br><br>',
		opcion: ['A) 25', 'B) 0', 'C) 50', '0'],
		respuesta: 3,
	},
	{
		pregunta: 'Con base en la información, identifique la nomenclatura del producto.<br><br>La ecuación química muestra la formación de un compuesto que disuelve el oro, por lo que se requiere de protección adecuada para su manejo<br><br> <fmath alttext="SeO_3 + H_2O →  H_2SeO_4" display="block" class="ma-block"><mrow><mrow><mrow><mrow><mi class="fm-mi-length-1" mathvariant="italic">S</mi><mi class="fm-mi-length-1" mathvariant="italic">e</mi></mrow><msub><mi class="fm-mi-length-1" mathvariant="italic">O</mi><span class="fm-script fm-inline" style="vertical-align: -0.5em;"><mn>3</mn></span></msub></mrow><mo class="fm-infix">+</mo><mrow><msub><mi class="fm-mi-length-1" mathvariant="italic">H</mi><span class="fm-script fm-inline" style="vertical-align: -0.5em;"><mn>2</mn></span></msub><mi class="fm-mi-length-1" mathvariant="italic">O</mi></mrow></mrow><mo class="fm-infix-loose">→</mo><mrow><mrow><mrow><msub><mi class="fm-mi-length-1" mathvariant="italic">H</mi><span class="fm-script fm-inline" style="vertical-align: -0.5em;"><mn>2</mn></span></msub><mi class="fm-mi-length-1" mathvariant="italic">S</mi></mrow><mi class="fm-mi-length-1" mathvariant="italic">e</mi></mrow><msub><mi class="fm-mi-length-1" mathvariant="italic">O</mi><span class="fm-script fm-inline" style="vertical-align: -0.5em;"><mn>4</mn></span></msub></mrow></mrow></fmath><br><br>',
		opcion: ['A) Ácido selénico', 'B) Anhídrido selenioso', '0', '0'],
		respuesta: 1,
	},
	{
		pregunta: 'El elemento químico mercurio posee un número atómico de 80, con base en la anterior información ¿cuál es el número máximo de electrones distribuidos en su tercer nivel de energía?',
		opcion: ['A) 24', 'B) 14', 'C) 6', 'D) 18'],
		respuesta: 1,
	},
	{
		pregunta: 'Complete el enunciado.<br><br>Para explicar el movimiento del planeta Marte alrededor del Sol, la segunda ley de Kepler establece que el vector posición de Marte respecto al Sol cubre áreas iguales de su recorrido elíptico en intervalos de tiempo similares; entonces, se puede afirmar que la velocidad de Marte es _______ cuando se encuentra más cerca del Sol, y es _______ cuando está más alejado de este.<br><br>',
		opcion: ['menor- mayor', 'mayor - menor', '0', '0'],
		respuesta: 2,
	},
	{
		pregunta: 'Relacione el postulado de la teoría de la evolución darwinista con los ejemplos que lo representan.<br><br<b>Postulado</b><ol><li>Ancestro común</li><li>Selección natural</li></ol><br><br><b>Ejemplo</b><ol style="list-style-type: lower-alpha"><li>Los Leones marinos macho pelean a muerte con sus adversarios y solo aquellos que poseen colmillos más largos y fuertes se quedan con las hembras</li><li>Se predice que en 100 años, el oso polar podría extinguirse debido al deshielo y a la ausencia de las focas, que son su principal fuente de alimento</li><li>Uno de los primeros homínidos, el Australopithecus sediba, apareció en África hace más de dos millones de años.</li><li>Un estudio demostró que una larga secuencia de ADN en el Tyrannosaurus rex es la misma que la de las aves actuales</li></ol><br><br>',
		opcion: ['1cd, 2ab', '1ab, 2cd', '1da, 2cb', '0'],
		respuesta: 1,
	},
	{
		pregunta: 'Complete el enunciado.<br><br>Las células animales y vegetales poseen _______ que realizan procesos catabólicos donde liberan energía a partir de la degradación de macromoléculas hasta convertirlas en sustancias inorgánicas y obtener energía aprovechable. Sin embargo, las células vegetales son las únicas que tienen _______, en donde ocurren procesos anabólicos que requieren energía para generar macromoléculas.<br><br>',
		opcion: ['Aparato de Golgi - Nucleolo', 'cloroplastos - mitocondrias', 'mitocondrias - cloroplastos', '0'],
		respuesta: 3
	},
	{
		pregunta: 'Las nubes están formadas por cristales o gotas de agua microscópicas suspendidas en la atmósfera. Cuando el hidrógeno gaseoso se quema en presencia de aire que contiene oxígeno gaseoso, se forma el agua, tal como se muestra en la ecuación química:<br><br><b><fmath alttext="2H_2 + O_2 → 2H_2O" display="block" class="ma-block"><mrow><mrow><mrow><mn>2</mn><msub><mi class="fm-mi-length-1" mathvariant="italic">H</mi><span class="fm-script fm-inline" style="vertical-align: -0.5em;"><mn>2</mn></span></msub></mrow><mo class="fm-infix">+</mo><msub><mi class="fm-mi-length-1" mathvariant="italic">O</mi><span class="fm-script fm-inline" style="vertical-align: -0.5em;"><mn>2</mn></span></msub></mrow><mo class="fm-infix-loose">→</mo><mrow><mrow><mn>2</mn><msub><mi class="fm-mi-length-1" mathvariant="italic">H</mi><span class="fm-script fm-inline" style="vertical-align: -0.5em;"><mn>2</mn></span></msub></mrow><mi class="fm-mi-length-1" mathvariant="italic">O</mi></mrow></mrow></fmath></b><br><br>Considerando la masa molar del <fmath alttext="H_2 = \text&quot;2 &quot; {g}/{mol}, O_2= \text&quot;32 &quot;{g}/{mol}\text&quot; y &quot; H_2O =  \text&quot;18 &quot; {g}/{mol} " class="fm-inline"><mrow><mrow><msub><mi class="fm-mi-length-1" mathvariant="italic">H</mi><span class="fm-script fm-inline" style="vertical-align: -0.5em;"><mn>2</mn></span></msub><mo class="fm-infix-loose">=</mo><mrow><mtext>2 </mtext><span mtagname="mfrac" style="vertical-align: 0em;"><span class="fm-vert fm-frac"><table><tbody><tr><td class="fm-num-frac fm-inline"><mi class="fm-mi-length-1" mathvariant="italic">g</mi></td></tr><tr><td class="fm-den-frac fm-inline"><mrow><mrow><mi class="fm-mi-length-1" mathvariant="italic">m</mi><mi class="fm-mi-length-1" mathvariant="italic">o</mi></mrow><mi class="fm-mi-length-1" mathvariant="italic">l</mi></mrow></td></tr></tbody></table></span></span></mrow></mrow><mo class="fm-separator">,</mo><mrow><mrow><msub><mi class="fm-mi-length-1" mathvariant="italic">O</mi><span class="fm-script fm-inline" style="vertical-align: -0.5em;"><mn>2</mn></span></msub><mo class="fm-infix-loose">=</mo><mrow><mrow><mrow><mrow><mtext>32 </mtext><span mtagname="mfrac" style="vertical-align: 0em;"><span class="fm-vert fm-frac"><table><tbody><tr><td class="fm-num-frac fm-inline"><mi class="fm-mi-length-1" mathvariant="italic">g</mi></td></tr><tr><td class="fm-den-frac fm-inline"><mrow><mrow><mi class="fm-mi-length-1" mathvariant="italic">m</mi><mi class="fm-mi-length-1" mathvariant="italic">o</mi></mrow><mi class="fm-mi-length-1" mathvariant="italic">l</mi></mrow></td></tr></tbody></table></span></span></mrow><mtext> y </mtext></mrow><msub><mi class="fm-mi-length-1" mathvariant="italic">H</mi><span class="fm-script fm-inline" style="vertical-align: -0.5em;"><mn>2</mn></span></msub></mrow><mi class="fm-mi-length-1" mathvariant="italic">O</mi></mrow></mrow><mo class="fm-infix-loose">=</mo><mrow><mtext>18 </mtext><span mtagname="mfrac" style="vertical-align: 0em;"><span class="fm-vert fm-frac"><table><tbody><tr><td class="fm-num-frac fm-inline"><mi class="fm-mi-length-1" mathvariant="italic">g</mi></td></tr><tr><td class="fm-den-frac fm-inline"><mrow><mrow><mi class="fm-mi-length-1" mathvariant="italic">m</mi><mi class="fm-mi-length-1" mathvariant="italic">o</mi></mrow><mi class="fm-mi-length-1" mathvariant="italic">l</mi></mrow></td></tr></tbody></table></span></span></mrow></mrow></mrow></fmath>, ¿cuáles son los valores de reactivos que se necesitan para producir 18 g de agua?<br><br>',
		opcion: ['2 gramos de hidrógeno reaccionan con 16 gramos de oxígeno', '4 gramos de hidrógeno reaccionan con 32 gramos de oxígeno', '8 gramos de hidrógeno reaccionan con 64 gramos de oxígeno', '0'],
		respuesta: 1,
	},
	{
		pregunta: 'Complete el párrafo<br><br>La digestión dentro del intestino delgado se efectúa con la ayuda de secreciones digestivas de tres fuentes. El hígado tiene la función de almacenar hierro y producir _______ que ayuda a emulsificar lípidos. El _______ secreta varias enzimas digestivas como las proteasas que desdoblan las proteínas en péptidos; además, produce hormonas que intervienen en la regulación del azúcar en la sangre. Finalmente, el _______, que presenta numerosas vellosidades para aumentar la superficie de absorción de los nutrientes, produce disacaridasas que desdoblan los disacáridos en monosacáridos.',
		opcion: ['bilis - páncreas - intestino delgado', 'hígado – estomago – colon', 'corazón – cerebro – cráneo', 'pies – manos - ojos'],
		respuesta: 1,
	},
	{
		pregunta: 'Utilizando corriente eléctrica continua, como una batería o una pila, se puede descomponer el agua en sus gases: oxígeno e hidrógeno, como muestra la ecuación química:<br><br><b><fmath alttext="H_2O → H_2 + 0_2" display="block" class="ma-block"><mrow><mrow><msub><mi class="fm-mi-length-1" mathvariant="italic">H</mi><span class="fm-script fm-inline" style="vertical-align: -0.5em;"><mn>2</mn></span></msub><mi class="fm-mi-length-1" mathvariant="italic">O</mi></mrow><mo class="fm-infix-loose">→</mo><mrow><msub><mi class="fm-mi-length-1" mathvariant="italic">H</mi><span class="fm-script fm-inline" style="vertical-align: -0.5em;"><mn>2</mn></span></msub><mo class="fm-infix">+</mo><msub><mn>0</mn><span class="fm-script fm-inline" style="vertical-align: -0.5em;"><mn>2</mn></span></msub></mrow></mrow></fmath></b><br><br>Si se considera que la masa del hidrógeno es <fmath alttext="1 {g}/{mol} \text&quot; y del oxígeno &quot; 16 {g}/{mol}" class="fm-inline"><mrow><mrow><mrow><mrow><mn>1</mn><span mtagname="mfrac" style="vertical-align: 0em;"><span class="fm-vert fm-frac"><table><tbody><tr><td class="fm-num-frac fm-inline"><mi class="fm-mi-length-1" mathvariant="italic">g</mi></td></tr><tr><td class="fm-den-frac fm-inline"><mrow><mrow><mi class="fm-mi-length-1" mathvariant="italic">m</mi><mi class="fm-mi-length-1" mathvariant="italic">o</mi></mrow><mi class="fm-mi-length-1" mathvariant="italic">l</mi></mrow></td></tr></tbody></table></span></span></mrow><mtext> y del oxígeno </mtext></mrow><mn>16</mn></mrow><span mtagname="mfrac" style="vertical-align: 0em;"><span class="fm-vert fm-frac"><table><tbody><tr><td class="fm-num-frac fm-inline"><mi class="fm-mi-length-1" mathvariant="italic">g</mi></td></tr><tr><td class="fm-den-frac fm-inline"><mrow><mrow><mi class="fm-mi-length-1" mathvariant="italic">m</mi><mi class="fm-mi-length-1" mathvariant="italic">o</mi></mrow><mi class="fm-mi-length-1" mathvariant="italic">l</mi></mrow></td></tr></tbody></table></span></span></mrow></fmath> y si se aplica la ley de conservación de la masa, ¿cuál es la cantidad de productos, en gramos?<br><br>',
		opcion: ['36<!--corriente.elec-->', '34<!--corriente.elec-->', '0', '0'],
		respuesta: 1,
	},
	{
		pregunta: 'El óxido de calcio, conocido comúnmente como cal viva, es un producto utilizado en construcción, albañilería y como catalizador para la cocción de algunos alimentos. Se forma por la reacción de calcio con oxigeno, como se muestra en la ecuacion quimica: <br><br><fmath alttext="{2Ca}↙{80g} + 0_2↙{32g} →  {CaO}↙{112g}" display="block" class="ma-block"><mrow><mrow><span mtagname="munder" style="vertical-align: -0.426em;"><span class="fm-vert"><table><tbody><tr><td class="fm-underover-base"><mrow><mrow><mn>2</mn><mi class="fm-mi-length-1" mathvariant="italic">C</mi></mrow><mi class="fm-mi-length-1" mathvariant="italic">a</mi></mrow></td></tr><tr><td class="fm-script fm-inline"><mrow><mn>80</mn><mi class="fm-mi-length-1" mathvariant="italic">g</mi></mrow></td></tr></tbody></table></span></span><mo class="fm-infix">+</mo><span mtagname="munder" style="vertical-align: -0.533em;"><span class="fm-vert"><table><tbody><tr><td class="fm-underover-base"><msub><mn>0</mn><span class="fm-script fm-inline" style="vertical-align: -0.5em;"><mn>2</mn></span></msub></td></tr><tr><td class="fm-script fm-inline"><mrow><mn>32</mn><mi class="fm-mi-length-1" mathvariant="italic">g</mi></mrow></td></tr></tbody></table></span></span></mrow><mo class="fm-infix-loose">→</mo><span mtagname="munder" style="vertical-align: -0.426em;"><span class="fm-vert"><table><tbody><tr><td class="fm-underover-base"><mrow><mrow><mi class="fm-mi-length-1" mathvariant="italic">C</mi><mi class="fm-mi-length-1" mathvariant="italic">a</mi></mrow><mi class="fm-mi-length-1" mathvariant="italic">O</mi></mrow></td></tr><tr><td class="fm-script fm-inline"><mrow><mn>112</mn><mi class="fm-mi-length-1" mathvariant="italic">g</mi></mrow></td></tr></tbody></table></span></span></mrow></fmath><br><br>Si se considera que existe suficiente cantidad de ambos reactivos, ¿qué cantidad se necesita para formar 56 gramos de producto?<br><br>',
		opcion: ['A) 18 g de oxígeno', 'B) 32 g de oxigeno', 'C) 20 g de calcio', 'D) 40 g de calcio'],
		respuesta: 4, //
	},
	{
		pregunta: 'Las imágenes muestran la distribución electrónica de los elementos más abundantes en el universo. Uno de ellos es el hidrógeno, que posee un número atómico de 1, por lo que es el elemento más ligero de la tabla periódica. El otro corresponde al helio, el cual posee un número atómico de 2 y su máximo nivel de energía se encuentra lleno, por eso se considera un gas noble.<br><br><img src="quimicaEAES/CONFIG2.png" style="width:25%><br><br>Con base en la información, son características que describen a los elementos descritos, excepto<br><br>',
		opcion: ['El hidrógeno tiene un número cuántico principal igual a 1', 'El helio tiene un número cuántico principal igual a 1', 'El hidrógeno tiene un número de spin igual a +1/2', 'El helio posee una distribución electrónica 1s<sup>1</sup>'],
		respuesta: 4,
	},
	{
		pregunta: 'Con base en el texto, identifique electrónica del elemento descrito.<br><br>Un elemento determinado se encuentra en cuarto periodo y tiene cinco electrones de valencia; es decir que está ubicado en la familia VA.<br><br>',
		opcion: ['1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>2</sup>4p<sup>3</sup>', '1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>2</sup>3d<sup>10</sup>4p<sup>3</sup>', '1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>3d<sup>10</sup>4s<sup>2</sup>4p<sup>3</sup>', '1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>3d<sup>10</sup>4p<sup>5</sup>'],
		respuesta: 3,//consultar //
	},
	{
		pregunta: 'Identifique la teoría de evolución que explica el fenómeno descrito.<br><br>Desde finales de 1980, los centros de prevención de enfermedades de Nueva York han documentado un incremento alarmante de tuberculosis (TB), durante unos años antes de esa fecha el número de casos de TB había declinado en el país, en gran medida como resultado del tratamiento con antibióticos. Sin embargo, la TB ha exhibido una perturbadora tendencia, en la cual se han desarrollado cepas mutantes farmacorresistentes generación tras generación. El desarrollo de la resistencia bacteriana de la TB es un ejemplo de evolución explicado por la variabilidad que presentan los individuos.<br><br>',
		opcion: ['A) Neodarwinismo', 'B) Lamarckismo', '0', '0'],
		respuesta: 1,
	},
	{
		pregunta: 'Con base en el texto, identifique la ley de los gases a la que se hace referencia.<br><br>La respiración es un proceso en el que se crean continuamente gradientes de presión. Al momento de inhalar, el diafragma se contrae, causando un aumento en el volumen de la cavidad torácica, con una disminución de la presión dentro de los pulmones. Inversamente, al exhalar, el diafragma se relaja y se extiende hacia la cavidad torácica, disminuyendo su volumen, lo que ocasiona que la presión en los pulmones sea mayor que la atmosférica.<br><br>',
		opcion: ['A) Gay-Lussac', 'B) Charles', 'C) Boyle', '0'],
		respuesta: 3,//
	},
	{
		pregunta: 'Complete el párrafo.<br><br>El café es una bebida que se consume de manera frecuente. Para obtener uno fuerte con sabor amargo, se añade abundante café en polvo en agua. Las cantidades de café oscilan entre 30 y 35 gramos por cada 500 mililitros, lo cual corresponde a una solución;  por consiguiente, existen pocos espacios intermoleculares vacios. <br><br>',
		opcion: ['A) Concentrada', 'B) Diluida', 'C) Saturada', '0'],
		respuesta: 1,
	},
	{
		pregunta: 'Complete el enunciado.<br><br>El síndrome de Bloom es un proceso hereditario asociado a una baja estatura, susceptibilidad a infecciones y predisposición al cáncer. Este síndrome está causado por mutaciones en el gen <i>BLM</i>, una de estas mutaciones modifica el marco de lectura de los codones, cambiando un codón codificante por uno de terminación, con la consecuente generación de una proteína BLM más corta. La prevalencia del síndrome de Bloom es baja, ya que si ambos padres son portadores de la enfermedad existe un 25 % de probabilidad de que un descendiente herede la enfermedad, Por tanto, el síndrome de Bloom es un claro ejemplo de mutación __________ que posee una herencia autosómica __________.<br><br>',
		opcion: ['A) cromosómica - recesiva', 'B) génica - recesiva', 'C) génica - dominante', 'D) cromosómica - dominante'],
		respuesta: 3,
	},
	{
		pregunta: 'El daltonismo es una enfermedad en la cual las personas presentan dificultad para distinguir algunos colores, llegando incluso a no distinguir ninguno de ellos. Se presenta con un patrón de herencia recesiva ligada al cromosoma X. Considere que una mujer que no posee el alelo afectado tiene descendencia con un hombre que presenta daltonismo.<br><br>Modificado con fines evaluativos. Recuperado el 07 de agosto de 2019 de https•//bit.ly/2TctfjY<br><br>Con base en el enunciado, identifique cual es la afirmación correcta.<br><br>',
		opcion: ['A) Toda la descendencia presenta la enfermedad', 'B) El 50 las hijas presentan la enfermedad', 'C) Todas las hijas descendientes son normales y portadoras del gen', 'D) El 50 % de los hijos varones son normales y portadores del gen'],
		respuesta: 4 ////
	},
	{
		pregunta: 'Un objeto que se mueve en una trayectoria circular tiene un radio vector <fmath alttext="{𝑟}↖{→}=(8{𝑖}↖{→}+15{𝑗}&nbsp;↖{→})m" class="fm-inline"><mrow><span mtagname="mover" style="vertical-align: 0.35em;"><span class="fm-vert"><table><tbody><tr><td><mo style="display: block; margin-top: -0.25em; margin-bottom: -0.25em;">→</mo></td></tr><tr><td class="fm-underover-base"><mi mathvariant="normal">𝑟</mi></td></tr></tbody></table></span></span><mo class="fm-infix-loose">=</mo><mrow><mrow><mo class="fm-mo-Luc" style="font-size: 1.508em; vertical-align: 0.118em; display: inline-block; transform: scaleX(0.5);">(</mo><mrow><mrow><mn>8</mn><span mtagname="mover" style="vertical-align: 0.35em;"><span class="fm-vert"><table><tbody><tr><td><mo style="display: block; margin-top: -0.25em; margin-bottom: -0.25em;">→</mo></td></tr><tr><td class="fm-underover-base"><mi mathvariant="normal">𝑖</mi></td></tr></tbody></table></span></span></mrow><mo class="fm-infix">+</mo><mrow><mn>15</mn><span mtagname="mover" style="vertical-align: 0.35em;"><span class="fm-vert"><table><tbody><tr><td><mo style="display: block; margin-top: -0.25em; margin-bottom: -0.25em;">→</mo></td></tr><tr><td class="fm-underover-base"><mi mathvariant="normal">𝑗</mi></td></tr></tbody></table></span></span></mrow></mrow><mo class="fm-mo-Luc" style="font-size: 1.508em; vertical-align: 0.118em; display: inline-block; transform: scaleX(0.5);">)</mo></mrow><mi class="fm-mi-length-1" mathvariant="italic">m</mi></mrow></mrow></fmath> y posee una aceleración centrípeta de módulo <fmath alttext="3 {m}/{s^2}" class="fm-inline"><mrow><mn>3</mn><span mtagname="mfrac" style="vertical-align: -0.126em;"><span class="fm-vert fm-frac"><table><tbody><tr><td class="fm-num-frac fm-inline"><mi class="fm-mi-length-1" mathvariant="italic">m</mi></td></tr><tr><td class="fm-den-frac fm-inline"><msup><mi class="fm-mi-length-1" mathvariant="italic">s</mi><span class="fm-script fm-inline" style="vertical-align: 0.7em;"><mn>2</mn></span></msup></td></tr></tbody></table></span></span></mrow></fmath>. Determine la rapidez del objeto, en m/s, en ese instante.<br><br>',
		opcion: ['A) √51', 'B) √17', '√25', '√36'],
		respuesta: 1,
	},
	{
		pregunta: 'En un estudio de ruido se determina que una cuerda tensada oscila 5 veces en 10 segundos. Determine la frecuencia generada por la oscilación de la cuerda<br><br>',
		opcion: ['A) 1/2<!--oscilacioncuerda-->', 'B) 2<!--oscilacioncuerda-->', '0', '0'],
		respuesta: 2,
	},
	{
		pregunta: 'Con base en el texto, determine el porcentaje en masa de la mezcla antes de ser sometida al fuego.<br><br>Para preparar una porción de merrnelada de una fruta exótica se coloca 200 gramos de sacarosa en 300 gramos de agua, la mezcla se somete a fuego hasta lograr una consistencia espesa.<br><br>',
		opcion: ['A) 60<!--%masa-->', 'B) 40<!--%masa-->', 'C) 50<!--%masa-->', 'D) 70<!--%masa-->'],
		respuesta: 2,
	},
	{
		pregunta: 'Los planetas azul y verde de igual masa, orbitan sobre la misma estrella de forma elíptica y circular, respectivamente. La distancia del foco al afelio es de 2 * 10<sup>8</sup> km y la distancia del foco al perihelio es de 1*10<sup>8</sup> km. Utilice la tercera ley de Kepler para determinar el período rotacional del planeta azul sabiendo que el del verde es de 1,5 años.<br><br><img src="mateEAES/periodoplaneta.png" class="responsive-img "style="width:35%;"><br><br>',
		opcion: ['3√2', '9*√6/8', '18', '243/32'],//consulta
		respuesta: 2,
	},
	{
		pregunta: 'Elija la equivalencia de tiempo que corresponde a 360 minutos.<br><br>',
		opcion: ['2 160 segundos', '216 000 milisegundos', '5 horas', '0,25 días'],
		respuesta: 4,
	},
	{
		pregunta: 'La configuración electrónica del último nivel del átomo de un gas noble utilizado en soldaduras, es:<br><br>3<b>p</b><sup>6</sup><br><br>Identifique el número cuántico de la parte sombreada de la configuración del gas noble.<br><br>',
		opcion: ['0<!--c.elec3p6-->', '1<!--c.elec3p6-->', '2<!--c.elec3p6-->', '3<!--c.elec3p6-->'],
		respuesta: 2,
	},
	{
		pregunta: 'Un tanque de acero inoxidable completamente sellado, sin fugas y de 100 litros de capacidad, está lleno de Dióxido de Carbono (CO2) a 20°C y 1 atm, es sometido a calentamiento hasta 313°C.<br>Indique el valor de la presión al final de este proceso.<br><br>',
		opcion: ['16 atm<!--tanquedeacero-->', '2 atm<!--tanquedeacero-->', '20 atm<!--tanquedeacero-->', '10 atm<!--tanquedeacero-->'],
		respuesta: 2,
	},
	{
		pregunta: 'Con base en el texto, identifique la fase de la mitosis que se describe.<br><br>En un etapa de la división celular de la mitosis o meiosis, durante esta fase, los cromosomas se alinean en el centro de la célula en división. Los cromosomas se utilizan en la determinación del cariotipo, que se realiza para buscar anormalidades cromosómicas,<br><br>',
		opcion: ['Profase<!--mitosis1-->', 'Metafase<!--mitosis1-->', 'Anafase<!--mitosis1-->', 'Telofase<!--mitosis1-->'],
		respuesta: 2,
	},
	{
		pregunta: 'Seleccione la unidad de medida que no corresponde o no es aceptada al Sistema Internacional de Unidades (S.I)<br><br>',
		opcion: ['a) Gramo', 'b) Kilogramo', 'c) Libra', 'd) Tonelada'],
		respuesta: 4,
	},
	{
		pregunta: '¿Cuál es la fuerza centrípeta, en N, ejercida sobre un objeto de 4,5kg moviendose circularmente alrededor de un eje central ubicado a 2,5m y a una distancia tangencial de 13m/s?',
		opcion: ['304,2 [N]', '67,60 [N]', '152,10 [N]', '15,02 [N]'],
		respuesta: 4,
	},
	{
		pregunta: 'La imagen muestra tres instantes (1 es el punto más alto, 2 es el punto intermedio y 3 es el punto más bajo) en que una niña se mece en el columpio de un parque. Si se considera un sistema conservativo, con nivel de referencia cero en el piso, se puede afirmar que:<br><br><img class="center-align responsive-img" src="mateEAES/columpioenergia.png"><br>',
		opcion: ['En el punto 1 hay mayor energía cinética que en los puntos 3 y 2.', 'En el punto 1 existe la mayor energía potencial.', 'En los tres puntos las energías mecánicas no son las mismas.', 'En el punto 2 hay la mitad de energía mecánica que en los puntos 1 y 3.'],
		respuesta: 4,
	},
	{
		pregunta: 'Organelo el cual se encuentra presente únicamente en células vegetales es...<br>',
		opcion: ['Cloroplasto<!--organeloc.vegetal-->', 'Mitocondria<!--organeloc.vegetal--', 'Ribosoma<!--organeloc.vegetal--', 'Citoplasma<!--organeloc.vegetal--'],
		respuesta: 1,
	}
]

// mate = 18, lengua = 24, cienttifico = 31 sociales=16

//preguntasparaocultarboton debe ser igual al valor de numerodepreguntaspararesultado
let index = 0, indexlengua = 0, indexcentifico = 0, indexsociales = 0, indexcajalengua = 17/*al # de preguntas de matemática se resta 1*/, indexcajalcientifico = 41/*a la suma del # de preguntas de matemática y lengua se resta 1*/, indexcajasociales = 72/*a la suma del # de preguntas de matemática, lengua y cientifico se resta 1*/,/* indexmas2 = 18, indexmas3 = 42, indexmas4 = 73*/ desaciertos = 0;
var numerofoto1 = Math.floor(Math.random() * 88) + 1;
console.log(numerofoto1);
let preguntas = quiz.sort(function () {
	return 0.5 - Math.random();
});
let preguntaslenguaje = quizoflenguaje.sort(function () {
	return 0.5 - Math.random();
});
let preguntascientifico = quizofcienfico.sort(function () {
	return 0.5 - Math.random();
});

let numerodepreguntaspararesultado = 16; //debe ser igual al valor de 16 por ser la ultima pregunta del simulador
let preguntastotales = 89;

//0 es sin responder 1 es contestada 2 correcta y 3 incorrecta
//imprimir las preguntas 
function printQuestion(i) {

	$(".textopregunta").html(preguntas[i].pregunta);
	let mateopciones = preguntas[i].opcion.sort(function () {
		return 0.5 - Math.random();
	});
	$(".opcionesderespuestas span").eq(0).html(preguntas[i].opcion[0]);
	$(".opcionesderespuestas span").eq(1).html(preguntas[i].opcion[1]);
	$(".opcionesderespuestas span").eq(2).html(preguntas[i].opcion[2]);
	$(".opcionesderespuestas span").eq(3).html(preguntas[i].opcion[3]);

	if (preguntas[i].opcion[0] == "0") {
		$(".opcionesderespuestas span").eq(0).hide();
	} else {
		$(".opcionesderespuestas span").eq(0).show();
	} if (preguntas[i].opcion[1] == "0") {
		$(".opcionesderespuestas span").eq(1).hide();
	} else {
		$(".opcionesderespuestas span").eq(1).show();
	} if (preguntas[i].opcion[2] == "0") {
		$(".opcionesderespuestas span").eq(2).hide();
	} else {
		$(".opcionesderespuestas span").eq(2).show();
	}
	if (preguntas[i].opcion[3] == "0") {
		$(".opcionesderespuestas span").eq(3).hide();
	} else {
		$(".opcionesderespuestas span").eq(3).show();
	}

	return;

}

function printQuestionl(i) {
	$(".textopregunta").css({ "border-top": "2px solid #d21919" });
	$(".textopregunta").html(preguntaslenguaje[i].pregunta);
	let lenguaopciones = preguntaslenguaje[i].opcion.sort(function () {
		return 0.5 - Math.random();
	});
	$(".opcionesderespuestas span").eq(0).html(preguntaslenguaje[i].opcion[0]);
	$(".opcionesderespuestas span").eq(1).html(preguntaslenguaje[i].opcion[1]);
	$(".opcionesderespuestas span").eq(2).html(preguntaslenguaje[i].opcion[2]);
	$(".opcionesderespuestas span").eq(3).html(preguntaslenguaje[i].opcion[3]);

	if (preguntaslenguaje[i].opcion[0] == "0") {
		$(".opcionesderespuestas span").eq(0).hide();
	} else {
		$(".opcionesderespuestas span").eq(0).show();
	} if (preguntaslenguaje[i].opcion[1] == "0") {
		$(".opcionesderespuestas span").eq(1).hide();
	} else {
		$(".opcionesderespuestas span").eq(1).show();
	} if (preguntaslenguaje[i].opcion[2] == "0") {
		$(".opcionesderespuestas span").eq(2).hide();
	} else {
		$(".opcionesderespuestas span").eq(2).show();
	}
	if (preguntaslenguaje[i].opcion[3] == "0") {
		$(".opcionesderespuestas span").eq(3).hide();
	} else {
		$(".opcionesderespuestas span").eq(3).show();
	}

	return;
}

function printQuestionc(i) {
	$(".textopregunta").css({ "border-top": "2px solid #19d21c" });
	$(".textopregunta").html(preguntascientifico[i].pregunta);
	let cientificoopciones = preguntascientifico[i].opcion.sort(function () {
		return 0.5 - Math.random();
	});
	$(".opcionesderespuestas span").eq(0).html(preguntascientifico[i].opcion[0]);
	$(".opcionesderespuestas span").eq(1).html(preguntascientifico[i].opcion[1]);
	$(".opcionesderespuestas span").eq(2).html(preguntascientifico[i].opcion[2]);
	$(".opcionesderespuestas span").eq(3).html(preguntascientifico[i].opcion[3]);

	if (preguntascientifico[i].opcion[0] == "0") {
		$(".opcionesderespuestas span").eq(0).hide();
	} else {
		$(".opcionesderespuestas span").eq(0).show();
	} if (preguntascientifico[i].opcion[1] == "0") {
		$(".opcionesderespuestas span").eq(1).hide();
	} else {
		$(".opcionesderespuestas span").eq(1).show();
	} if (preguntascientifico[i].opcion[2] == "0") {
		$(".opcionesderespuestas span").eq(2).hide();
	} else {
		$(".opcionesderespuestas span").eq(2).show();
	}
	if (preguntascientifico[i].opcion[3] == "0") {
		$(".opcionesderespuestas span").eq(3).hide();
	} else {
		$(".opcionesderespuestas span").eq(3).show();
	}

	return;
}

function printQuestions(i) {
	$(".textopregunta").css({ "border-top": "2px solid #e37419" });
	$(".textopregunta").html(preguntassociales[i].pregunta);
	let socialesopciones = preguntassociales[i].opcion.sort(function () {
		return 0.5 - Math.random();
	});
	$(".opcionesderespuestas span").eq(0).html(preguntassociales[i].opcion[0]);
	$(".opcionesderespuestas span").eq(1).html(preguntassociales[i].opcion[1]);
	$(".opcionesderespuestas span").eq(2).html(preguntassociales[i].opcion[2]);
	$(".opcionesderespuestas span").eq(3).html(preguntassociales[i].opcion[3]);

	if (preguntassociales[i].opcion[0] == "0") {
		$(".opcionesderespuestas span").eq(0).hide();
	} else {
		$(".opcionesderespuestas span").eq(0).show();
	} if (preguntassociales[i].opcion[1] == "0") {
		$(".opcionesderespuestas span").eq(1).hide();
	} else {
		$(".opcionesderespuestas span").eq(1).show();
	} if (preguntassociales[i].opcion[2] == "0") {
		$(".opcionesderespuestas span").eq(2).hide();
	} else {
		$(".opcionesderespuestas span").eq(2).show();
	}
	if (preguntassociales[i].opcion[3] == "0") {
		$(".opcionesderespuestas span").eq(3).hide();
	} else {
		$(".opcionesderespuestas span").eq(3).show();
	}

	return;
}

//imprimir las preguntas termina aqui

//timer 
$("#empiezosimu2").click(function () {

	$(".EAES h5").html("<div style='transition:5s'>Simulador 1<div>");
	if (sessionStorage.getItem('cerraravisolupas') === "true") {
		$('.tap-target').remove();
	} else {
		$('.tap-target').show();
	}

	let timerInterval
	Swal.fire({
		title: 'Preparando banco de preguntas de todos los dominios',
		html: '<b class="blue-text"></b>',
		timer: 1500,
		timerProgressBar: true,
		allowOutsideClick: false,
		allowEscapeKey: false,
		allowEnterKey: false,
		stopKeydownPropagation: false,
		didOpen: () => {
			Swal.showLoading()
			timerInterval = setInterval(() => {
				const content = Swal.getContent()
				if (content) {
					const b = content.querySelector('b')
					if (b) {
						b.textContent = Swal.getTimerLeft()
					}
				}
			}, 100)
		},
		willClose: () => {
			clearInterval(timerInterval)
			$('.tap-target').tapTarget('open');
			$("header, .sidenav").slideUp(1000);
			anime({
				targets: 'body',
				backgroundColor: '#fafafa',
				easing: 'easeInOutQuad',
				duration: 2000
			})
			$("#cuentaregresiva, .tablasimulador, #simu2, .nombreuser, .numerocedula").show();
			$("#simu2").addClass("animate__animated animate__backInRight");
			$(".nombreuser").addClass("animate__animated animate__zoomIn animate__delay-2s");
			$("video").css({ "margin": "auto" });
			$("#empiezosimu2, .empiezotext, .sincamara").hide();
			$(".tablasimulador").addClass("animate__animated animate__backInLeft");
			$(".coi").text("N/A");

			anime({
					targets: '#videocam',
					scaleY: [0, 1],
					delay: anime.stagger(300),
					easing: 'easeOutQuart',
				});


			//lupas
			$("#lupamas").click(function () {
				$("#simu2").animate({ fontSize: "+=1px" }, 300);
			});

			$("#lupamenos").click(function () {
				$("#simu2").animate({ fontSize: "-=1px" }, 300);
			});

			$("#lupanormal").click(function () {
				$("#simu2").animate({ fontSize: "14px" }, 300);
			});
		}
	}).then((result) => {
		if (result.dismiss === Swal.DismissReason.timer) {
			console.log('#')
		}
	})

	window.addEventListener("keyup", function (e) {
		if (e.keyCode == 44) {
			clearInterval(countdownTimer);
			swal.fire({
				title: "Se detectó un intento de copia",
				html: "<b>No</b> intentes tomar capturas de pantalla o salirte del programa durante tu examen<br>sino tu nota es de cero automáticamente, no te arriesgues",
				icon: "warning",
				allowOutsideClick: false,
				allowEscapeKey: false,
				allowEnterKey: false,
				stopKeydownPropagation: true,
				showCloseButton: false,
				showConfirmButton: true,
				confirmButtonText: "Volver a intentar el simulador",

			}).then((result) => {
				if (result.isConfirmed) {
					location.reload();
					intentocopia++;
				} else {
					intentocopia++;
				}

			});
		}
	});

	window.addEventListener("keypress", function (event) {
		if (event.keyCode == 13) {
			event.preventDefault();
		}
	}, false);

	var seconds = 3600;
	let randomnumber = Math.floor(Math.random() * 4);
	var intentocopia = 0;
	function timer() {

		var days = Math.floor(seconds / 24 / 60 / 60);
		var hoursLeft = Math.floor((seconds) - (days * 86400));
		var hours = Math.floor(hoursLeft / 3600);
		if (hours <= 2) {
			hours = "0" + hours;
		}
		var minutesLeft = Math.floor((hoursLeft) - (hours * 3600));
		var minutes = Math.floor(minutesLeft / 60);
		if (minutes <= 9) {
			minutes = "0" + minutes;
		}
		//console.log(Math.floor(minutesLeft/60));
		var remainingSeconds = seconds % 60;
		if (remainingSeconds < 10) {
			remainingSeconds = "0" + remainingSeconds;
		}
		$("#tiemposesion").html("&#9201;&#65039;" + hours + ":" + minutes + ":" + remainingSeconds);


		if (seconds == 0) {
			clearInterval(countdownTimer);
			$("#simu2, .lupas, #lupasocultos2, .fixed-action-btn, .videocam").hide(500);
			$('.tiemporestantes2').show();
			Webcam.reset();
			swal.fire({
				title: "Se terminó tu tiempo en el simulador",
				html: "No se permiten más respuestas",
				icon: "warning",
				allowOutsideClick: false,
				allowEscapeKey: false,
				allowEnterKey: false,
				stopKeydownPropagation: false,
				confirmButtonText: "Ver puntaje total del simulador",
				confirmButtonColor: "#F44336",

			}).then((result) => {
				if (result.isConfirmed) {
					window.addEventListener("keyup", function (e) {
						if (e.keyCode == 44) {
							swal.close();
						}
					});
					let randomnumber = Math.floor(Math.random() * 4);
					hours = 2;
					let nuevahora = hours;
					$(".resultados, .Reload").show(500);
					anime({
						targets: 'body',
						backgroundColor: '#f1f3f4',
						easing: 'easeInOutQuad',
						duration: 1000
					})
					$("nav, #dropdown1, #dropdown2, .sidenav").slideDown(1000);
					anime({
						targets: 'body',
						backgroundColor: '#f1f3f4',
						easing: 'easeInOutQuad',
						duration: 1000
					})
					$('.tiemporestantes2').html("<span font-size='22px'><b>Tu tiempo fue de </b><br>&#9201;&#65039;" + nuevahora + " horas" + consejos[randomnumber].consejo);
					anime.timeline({ loop: false })
						.add({
							targets: '.consejobox',
							scaleY: [0, 1],
							easing: "easeInOutExpo",
							duration: 2000
						}).add({
							targets: '.progressbar',
							translateX: [-5000, 0],
							delay: anime.stagger(50),
							easing: 'easeInOutBack'
						});
					mostrarresult(0);
					$(".Reload").click(function () {
						location.reload();
					})
				} else {

				}

			});


		} else {


			$("#versimu2").click(function () {
				$("nav, #dropdown1, #dropdown2, .sidenav").slideDown(1000);
				anime({
					targets: 'body',
					backgroundColor: '#f1f3f4',
					easing: 'easeInOutQuad',
					duration: 1000
				})
				swal.close();
				$(".videocam").hide(1000);
				Webcam.reset();
				window.addEventListener("keyup", function (e) {
					if (e.keyCode == 44) {
						swal.close();
					}
				});
				$(".tiemporestantes2").show();
				let nuevahora = 1 - hours;
				let nuevominuto = 60 - minutes;
				let nuevosegundo = 60 - remainingSeconds;
				if (seconds >= 3500) {
					$('.tiemporestantes2').html("<span font-size='22px'><b>Tu tiempo fue de </b><br>&#9201;&#65039;" + nuevahora + " hora con " + nuevominuto + " minuto y " + nuevosegundo + " segundos</span>" + consejos[randomnumber].consejo);
					clearInterval(countdownTimer);
					anime.timeline({ loop: false })
						.add({
							targets: '.consejobox',
							scaleY: [0, 1],
							easing: "easeInOutExpo",
							duration: 2000
						}).add({
							targets: '.progressbar',
							translateX: [-5000, 0],
							delay: anime.stagger(50),
							easing: 'easeInOutBack'
						});
					$(".Reload").show(500);
					$(".Reload").click(function () {
						location.reload();
					})

				} else if (seconds < 3400) {
					$('.tiemporestantes2').html("<span font-size='22px'><b>Tu tiempo fue de </b><br>&#9201;&#65039;" + nuevahora + " hora con " + nuevominuto + " minuto y " + nuevosegundo + " segundos</span>" + consejos[randomnumber].consejo);
					clearInterval(countdownTimer);
					anime.timeline({ loop: false })
						.add({
							targets: '.consejobox',
							scaleY: [0, 1],
							easing: "easeInOutExpo",
							duration: 2000
						}).add({
							targets: '.progressbar',
							translateX: [-5000, 0],
							delay: anime.stagger(50),
							easing: 'easeInOutBack'
						});
					$(".Reload").show(500);
					$(".Reload").click(function () {
						location.reload();
					})

				} else {
					$('.tiemporestantes2').html("<span font-size='22px'><b>Tu tiempo fue de </b><br>&#9201;&#65039;" + nuevahora + " hora con " + nuevominuto + " minuto y " + nuevosegundo + " segundos</span>" + consejos[randomnumber].consejo);
					clearInterval(countdownTimer);
					anime.timeline({ loop: false })
						.add({
							targets: '.consejobox',
							scaleY: [0, 1],
							easing: "easeInOutExpo",
							duration: 2000
						}).add({
							targets: '.progressbar',
							translateX: [-5000, 0],
							delay: anime.stagger(50),
							easing: 'easeInOutBack'
						});
					$(".Reload").show(500);
					$(".Reload").click(function () {
						location.reload();
					})
				}
			})

			seconds--;
		}
	}//termina function 
	var countdownTimer = setInterval(timer, 1000);

	printQuestion(index);



});
// checar respuestas
function checkAnswer(opcion) { //225 19points
	let optionClicked = $(opcion).html();
	if (optionClicked === "[-9;-1]" || optionClicked === "A=B/C<sup>T</sup>" || optionClicked === "[-12;4]" || optionClicked === "40" || optionClicked === "C) La r<sub>2</sub> y la r<sub>3</sub> son rectas perpendiculares entre sí" || optionClicked === "6<!--mareasfuncion-->" || optionClicked === "-2<sup>3</sup>+(-2)<sup>3</sup>3=(2+(-2))<sup>3</sup>" || optionClicked === "A" || optionClicked === "6<!--volley-->" || optionClicked === "10<!--lactobacillus-->" || optionClicked === "8<!--tanqueagua-->" || optionClicked === "(-3/5;-13/5)" || optionClicked === "[12;15]" || optionClicked === "25" || optionClicked === "(x+10)(x+5)" || optionClicked === "t= ln2/k" || optionClicked === "1<!--n-->" || optionClicked === "(-∞,-5)∪(4,+∞)" || optionClicked === "El barco B lleva una trayectoria perpendicular al barco C" || optionClicked === "300<!--semaforo-->" || optionClicked === "1,3<!--pezvolador-->" || optionClicked === "3/16<!--sumaexp-->" || optionClicked === "$16<!--ines-->" || optionClicked === "8/7<!--niguala1-->" || optionClicked === "2,3<!--ruedabicicleta-->") {
		notransparent();
		$(opcion).css({ "border": "2px solid #0d47a1", "background": "#e1f5fe", "cursor": "pointer" });
	} else {
		notransparent3();//indicación para incorrectas (se le asignó el número 3)
		$(opcion).css({ "border": "2px solid #0d47a1", "background": "#e1f5fe", "cursor": "pointer" });
	}
	$(".simu2cambiarespuesta").show(100);
	$(".simu2cambiarespuesta").click(function () {
		$(opcion).css({ "border": "2px solid #bdbdbd", "background": "transparent", "cursor": "pointer" });
		$(".tablasimulador span").eq(index).removeClass("2 3 m");
		$(".barraprogreso ol li, .collapsible-body ol li").eq(index).text("");
		$(".simu2cambiarespuesta").hide();
		if ($(".opcionesderespuestas span").eq(2).text() == "0") {
			$(".opcionesderespuestas span").eq(2).hide();
		} else if ($(".opcionesderespuestas span").eq(3).text() == "0") {
			$(".opcionesderespuestas span").eq(3).hide();
		} else {
			$(".opcionesderespuestas span").eq(2).show();
			$(".opcionesderespuestas span").eq(3).show();
		}
		$(".opcionesderespuestas span").attr("onclick", "checkAnswer(this)");
	})
	$(".opcionesderespuestas span").attr("onclick", "");
}
function checkAnswerl(opcion) { //LENGUAJE 274 suma 153 = 427 hasta lengua

	let optionClicked = $(opcion).html();
	if (optionClicked === "Argumento de autoridad" || optionClicked === "B. Juan Montalvo" || optionClicked === "B. Señalar que la Biblioteca Virtual Miguel de Cervantes es la más utilizada" || optionClicked === "D. Ad hominem" || optionClicked === "D. Cumandá" || optionClicked === "D. Hecho" || optionClicked === "A. El uso de etiquetas digitales como parte fundamental de la constitución del mensaje" || optionClicked === "B. Es necesario que se manifieste cuando se llegará para estar alegre con antelación" || optionClicked === "A. Toro-lana" || optionClicked === "B. La gente actúa de tal manera que se puede dudar de su capacidad de raciocinio." || optionClicked === "A. El libro pasa a un formato digital" || optionClicked === "A. 1abd, 2cef" || optionClicked === "B. Quejas" || optionClicked === "A. Crónica" || optionClicked === "A.	2a, 1b, 3c" || optionClicked === "A. Se citaron en el banco donde se habían conocido." || optionClicked === "D. Autoridad" || optionClicked === "D. Enrique Gil Gilbert — Los cinco como un puño - Nuestro pan " || optionClicked === "Falacia ad ignorantiam" || optionClicked === "Ad hominem" || optionClicked === "Especia - metal" || optionClicked === "1c, 2a, 3b, 4c<!--obras-->" || optionClicked === "Se está planificando crear una carrera para presidente" || optionClicked === "Transmición de la información en tiempo real" || optionClicked === "1c, 2a, 3b, 4d<!--figurasliter-->" || optionClicked === "Se comunica a todos los pobladores de la zona centro de la ciudad que el servicio de agua potable será suspendido desde las 21:00 del día de hoy 15 de julio hasta las 18:00 de mañana 16 de julio" || optionClicked === "Prosopografía" || optionClicked === "Simón Bolívar" || optionClicked === "Cambios que el ser humano puede generar en su propia vida." || optionClicked === "produjo, condujera, redujeron, reprodujera, introdujeron" || optionClicked === "1d, 2b, 3a, 4c<!--s.a.h.p-->" || optionClicked === "1b, 2a, 3c<!--linares-->" || optionClicked === "Las coimas son actos de corrupción que se encuentran penadas por la justicia" || optionClicked === "A veces suceden cosas sorprendentes y cuando menos se lo espera." || optionClicked === "Cuenca - Montevideo" || optionClicked === "Colonial<!--nacimientoJJO-->" || optionClicked === "John Keats era un ferviente admirador de los clásicos griegos, lo cual se evidenció en la calidad de su obra poética, especialmente en los sonetos." || optionClicked === "Ausencia de tildes." || optionClicked === "Explicar sobre el debate del vocablo migración." || optionClicked === "1, 3, 4<!--españolEEUU-->" || optionClicked === "Existen múltiples razones que hacen recomendable la ingesta de sandía en la dieta diaria." || optionClicked === "Expresar emociones y sentimientos." || optionClicked === "Si hoy vivimos en democracia, en parte, es gracias a los aportes del mundo griego. Sófocles, Mirón y un sinfín de personajes griegos están y estarán presentes en los libros de texto de nuestros hijos, nietos y bisnietos." || optionClicked === "La comida puede dar alegría a las personas." || optionClicked === "1b, 2a, 3c, 4d<!--sinonimoscronicadeunamuerte-->" || optionClicked === "Millones de mensajes catastróficos y mentiras maquilladas de verosimilitud invaden WhatsApp, Messenger e Instagram de todo el planeta. Y mucha gente crédula reenvía los mensajes, provocando mayor caos." || optionClicked === "El estudio de la Universidad de Granada, sobre la actividad física, determina que el contexto social en el que se desenvuelven los niños inciden de manera indirecta en su desarrollo." || optionClicked === "Problemas al reconocer las letras y las palabras, dificultad reconocimiento ideas principales.") {
		$(opcion).css({ "border": "2px solid #0d47a1", "background": "#e1f5fe", "cursor": "pointer" });
		notransparentl();
	} else {
		$(opcion).css({ "border": "2px solid #0d47a1", "background": "#e1f5fe", "cursor": "pointer" });
		notransparent3l();
	}
	$(".simu2cambiarespuesta").show(100);
	$(".simu2cambiarespuesta").click(function () {
		$(opcion).css({ "border": "2px solid #bdbdbd", "background": "transparent", "cursor": "pointer" });
		$(".tablasimulador span").eq(index).removeClass("2 3 l");
		$(".barraprogreso ol li, .collapsible-body ol li").eq(index).text("");
		$(".simu2cambiarespuesta").hide();
		if ($(".opcionesderespuestas span").eq(2).text() == "0") {
			$(".opcionesderespuestas span").eq(2).hide();
		} else if ($(".opcionesderespuestas span").eq(3).text() == "0") {
			$(".opcionesderespuestas span").eq(3).hide();
		} else {
			$(".opcionesderespuestas span").eq(2).show();
			$(".opcionesderespuestas span").eq(3).show();
		}
		$(".opcionesderespuestas span").attr("onclick", "checkAnswerl(this)");
	})
	$(".opcionesderespuestas span").attr("onclick", "");
}

function checkAnswerc(opcion) { //cientifico 468 + 384 = 852 hasta cientifico

	let optionClicked = $(opcion).html();
	if (optionClicked === "20" || optionClicked === "-5i" || optionClicked === "2π<sup></sup>" || optionClicked === "87/2" || optionClicked === "3.00" || optionClicked === "3" || optionClicked === "A) Hojas secas y trituradas" || optionClicked === "B) -0,4" || optionClicked === "A) CH<sub>3</sub>-CH<sub>2</sub>-CO-NH<sub>2</sub>" || optionClicked === "C) Alcanos" || optionClicked === "C) 2,3" || optionClicked === "B) 2/5" || optionClicked === "B) Riñones" || optionClicked === "C) 50" || optionClicked === "A) Ácido selénico" || optionClicked === "A) 24" || optionClicked === "mayor - menor" || optionClicked === "1cd, 2ab" || optionClicked === "mitocondrias - cloroplastos" || optionClicked === "2 gramos de hidrógeno reaccionan con 16 gramos de oxígeno" || optionClicked === "bilis - páncreas - intestino delgado" || optionClicked === "36<!--corriente.elec-->" || optionClicked === "D) 40 g de calcio" || optionClicked === "El helio posee una distribución electrónica 1s<sup>1</sup>" || optionClicked === "1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>3d<sup>10</sup>4s<sup>2</sup>4p<sup>3</sup>" || optionClicked === "A) Neodarwinismo" || optionClicked === "C) Boyle" || optionClicked === "A) Concentrada" || optionClicked === "C) génica - dominante" || optionClicked === "D) El 50 % de los hijos varones son normales y portadores del gen" || optionClicked === "A) √51" || optionClicked === "B) 2<!--oscilacioncuerda-->" || optionClicked === "B) 40<!--%masa-->" || optionClicked === "9*√6/8" || optionClicked === "0,25 días" || optionClicked === "1<!--c.elec3p6-->" || optionClicked === "2 atm<!--tanquedeacero-->" || optionClicked === "Metafase<!--mitosis1-->" || optionClicked === "d) Tonelada" || optionClicked === "304,2 [N]" || optionClicked === "En el punto 1 existe la mayor energía potencial." || optionClicked === "Cloroplasto<!--organeloc.vegetal-->") {
		notransparentc();
		$(opcion).css({ "border": "2px solid #0d47a1", "background": "#e1f5fe", "cursor": "pointer" });
	} else {
		notransparent3c();
		$(opcion).css({ "border": "2px solid #0d47a1", "background": "#e1f5fe", "cursor": "pointer" });
	}
	$(".simu2cambiarespuesta").show(100);
	$(".simu2cambiarespuesta").click(function () {
		$(opcion).css({ "border": "2px solid #bdbdbd;", "background": "transparent", "cursor": "pointer" });
		$(".tablasimulador span").eq(index).removeClass("2 3 c");
		$(".barraprogreso ol li, .collapsible-body ol li").eq(index).text("");
		$(".simu2cambiarespuesta").hide();
		if ($(".opcionesderespuestas span").eq(2).text() == "0") {
			$(".opcionesderespuestas span").eq(2).hide();
		} else if ($(".opcionesderespuestas span").eq(3).text() == "0") {
			$(".opcionesderespuestas span").eq(3).hide();
		} else {
			$(".opcionesderespuestas span").eq(2).show();
			$(".opcionesderespuestas span").eq(3).show();
		}
		$(".opcionesderespuestas span").attr("onclick", "checkAnswerc(this)");
	})
	$(".opcionesderespuestas span").attr("onclick", "");
}

//checar respuestas fin
//poncentaje mate funcion
function porcentajesmate() {
	let porcentajemates = 0;
	porcentajemates = ($(".tablasimulador span").filter(".m").length * 6);
	$(".DominioMatemático").css({ "animation-name": ["dominios" + porcentajemates], "animation-duration": "2s", "animation-fill-mode": "both", "animation-delay": "2.8s" });
	switch (porcentajemates) {
		case 6:
			$("#DominioMatemáticos2").text("6% Tienes que reforzar tus conocimientos");
			break;
		case 12:
			$("#DominioMatemáticos2").text("12% Tienes que reforzar tus conocimientos");
			break;
		case 18:
			$("#DominioMatemáticos2").text("18% Tienes que reforzar tus conocimientos");
			break;
		case 24:
			$("#DominioMatemáticos2").text("24% Tienes que reforzar tus conocimientos un poco más");
			break;
		case 30:
			$("#DominioMatemáticos2").text("30% Tienes que reforzar tus conocimientos un poco más");
			break;
		case 36:
			$("#DominioMatemáticos2").text("36% Practica más");
			break;
		case 42:
			$("#DominioMatemáticos2").text("42% Practica más");
			break;
		case 48:
			$("#DominioMatemáticos2").text("48% Sigue así solo es cuestión de práctica");
			break;
		case 54:
			$("#DominioMatemáticos2").text("54% Sigue así solo es cuestión de práctica");
			break;
		case 60:
			$("#DominioMatemáticos2").text("60% Sigue así solo es cuestión de práctica");
			break;
		case 66:
			$("#DominioMatemáticos2").text("64% Sigue así solo es cuestión de práctica");
			break;
		case 72:
			$("#DominioMatemáticos2").html("70% Ya vas mejorando");
			break;
		case 78:
			$("#DominioMatemáticos2").text("76% Ya vas mejorando");
			break;
		case 84:
			$("#DominioMatemáticos2").text("81% Genial ya vas mejorando");
			break;
		case 90:
			$("#DominioMatemáticos2").html("88% Genial ya vas mejorando");
			break;
		case 96:
			$("#DominioMatemáticos2").text("92% Genial ya vas mejorando");
			break;
		case 102:
			$("#DominioMatemáticos2").text("96% Genial ya vas mejorando");
			break;
		case 108:
			$("#DominioMatemáticos2").html("100% PERFECTO TUS CONOCIMIENTOS SON BUENOS &#128293");
			break;
	}
	return porcentajemates;
}

//poncentaje mate funcion fin 
//PORCENTAJE LENGUAJE Funcion
function porcentajeslengua() {
	let porcentajelenguajes = 0;
	porcentajelenguajes = ($(".tablasimulador span").filter(".l").length * 4);
	$(".DominioLingüístico").css({ "animation-name": ["dominios" + porcentajelenguajes], "animation-duration": "2s", "animation-fill-mode": "both", "animation-delay": "2.8s" });
	switch (porcentajelenguajes) {
		case 4:
			$("#DominioLingüístico1").text("4% Tienes que reforzar tus conocimientos");
			break;
		case 8:
			$("#DominioLingüístico1").text("8% Practica más");
			break;
		case 12:
			$("#DominioLingüístico1").text("12% Practica más");
			break;
		case 16:
			$("#DominioLingüístico1").text("16% Practica más");
			break;
		case 20:
			$("#DominioLingüístico1").text("20% Practica más");
			break;
		case 24:
			$("#DominioLingüístico1").text("24% Practica más todavía te falta");
			break;
		case 28:
			$("#DominioLingüístico1").text("28% Practica más todavía te falta");
			break;
		case 32:
			$("#DominioLingüístico1").text("32% Practica más todavía te falta");
			break;
		case 36:
			$("#DominioLingüístico1").text("36% Ya vas mejorando");
			break;
		case 40:
			$("#DominioLingüístico1").text("40% Practica un poco más");
			break;
		case 44:
			$("#DominioLingüístico1").text("44% Practica un poco más");
			break;
		case 48:
			$("#DominioLingüístico1").text("48% Practica un poco más");
			break;
		case 52:
			$("#DominioLingüístico1").text("52% Practica un poco más");
			break;
		case 56:
			$("#DominioLingüístico1").text("56% Tienes buenas bases");
			break;
		case 60:
			$("#DominioLingüístico1").text("60% Sigue así solo es cuestión de práctica");
			break;
		case 64:
			$("#DominioLingüístico1").text("64% Sigue así solo es cuestión de práctica");
			break;
		case 68:
			$("#DominioLingüístico1").html("68% Sigue así solo es cuestión de práctica");
			break;
		case 72:
			$("#DominioLingüístico1").text("72% Sigue así solo es cuestión de práctica");
			break;
		case 76:
			$("#DominioLingüístico1").text("76% Ya vas mejorando");
			break;
		case 80:
			$("#DominioLingüístico1").text("84% Genial ya vas mejorando");
			break;
		case 84:
			$("#DominioLingüístico1").text("88% Tienes muy buen conocimiento");
			break;
		case 88:
			$("#DominioLingüístico1").text("92% Tienes muy buen conocimiento");
			break;
		case 92:
			$("#DominioLingüístico1").html("96% Tienes muy buen conocimiento");
			break;
		case 96:
			$("#DominioLingüístico1").html("100% PERFECTO TUS CONOCIMIENTOS SON BUENOS &#128293");
			break;
	}
	return porcentajelenguajes;
}
//PORCENTAJE LENGUAJE Funcion end
//PORCENTAJE cientifico Funcion
function porcentajescientifico() {
	let porcentajescientificos = 0;
	porcentajescientificos = ($(".tablasimulador span").filter(".c").length * 3);
	$(".DominioCientífico").css({ "animation-name": ["dominios" + porcentajescientificos], "animation-duration": "2s", "animation-fill-mode": "both", "animation-delay": "2.8s" });
	switch (porcentajescientificos) {
		case 3:
			$("#DominioCientífico1").text("3% Tienes que reforzar tus conocimientos");
			break;
		case 6:
			$("#DominioCientífico1").text("6% Tienes que reforzar tus conocimientos");
			break;
		case 9:
			$("#DominioCientífico1").text("9% Tienes que reforzar tus conocimientos");
			break;
		case 12:
			$("#DominioCientífico1").text("12% Tienes que reforzar tus conocimientos");
			break;
		case 15:
			$("#DominioCientífico1").text("15% Tienes que reforzar tus conocimientos un poco más");
			break;
		case 18:
			$("#DominioCientífico1").text("18% Tienes que reforzar tus conocimientos un poco más");
			break;
		case 21:
			$("#DominioCientífico1").text("21% Debes seguir practicando más");
			break;
		case 24:
			$("#DominioCientífico1").text("24% Debes seguir practicando más");
			break;
		case 27:
			$("#DominioCientífico1").text("27% Debes seguir practicando más");
			break;
		case 30:
			$("#DominioCientífico1").text("30% Debes seguir practicando más");
			break;
		case 33:
			$("#DominioCientífico1").text("33% Debes seguir practicando más");
			break;
		case 36:
			$("#DominioCientífico1").text("36% Debes seguir practicando más");
			break;
		case 39:
			$("#DominioCientífico1").text("39% Debes seguir practicando más");
			break;
		case 42:
			$("#DominioCientífico1").text("42% Solo es cuestión de práctica");
			break;
		case 45:
			$("#DominioCientífico1").text("45% Tienes buenas bases");
			break;
		case 48:
			$("#DominioCientífico1").text("48% Tienes buenas bases");
			break;
		case 51:
			$("#DominioCientífico1").text("51% Ya vas mejorando");
			break;
		case 54:
			$("#DominioCientífico1").text("54% Ya vas mejorando");
			break;
		case 57:
			$("#DominioCientífico1").text("57% Ya vas mejorando");
			break;
		case 60:
			$("#DominioCientífico1").text("60% Ya vas mejorando");
			break;
		case 63:
			$("#DominioCientífico1").text("63% Genial sigue así");
			break;
		case 66:
			$("#DominioCientífico1").text("66% Genial sigue así");
			break;
		case 69:
			$("#DominioCientífico1").text("69% Genial sigue así");
			break;
		case 72:
			$("#DominioCientífico1").text("72% Genial sigue así");
			break;
		case 75:
			$("#DominioCientífico1").text("75% Genial, se nota tu trabajo duro");
			break;
		case 78:
			$("#DominioCientífico1").text("78% Genial, se nota tu trabajo duro");
			break;
		case 81:
			$("#DominioCientífico1").text("81% Genial, se nota tu trabajo duro");
			break;
		case 84:
			$("#DominioCientífico1").text("84% Genial, se nota tu trabajo duro");
			break;
		case 87:
			$("#DominioCientífico1").text("88% Genial, se nota tu trabajo duro");
			break;
		case 90:
			$("#DominioCientífico1").text("91% Sigue puliendo esas fallas vas muy bien");
			break;
		case 93:
			("#DominioCientífico1").text("100% PERFECTO TUS CONOCIMIENTOS SON BUENOS &#128293");
			break;
		default:
	}
	return porcentajescientificos;
}

//PORCENTAJE cientifico Funcion end

//notransparent function mate
function notransparent() {
	$(".tablasimulador span").eq(index).css({ "animation-name": "cajasmate", "animation-duration": "1s", "animation-fill-mode": "both" });
	$(".tablasimulador span").eq(index).addClass("1 2 m");
	$(".barraprogreso ol li, .collapsible-body ol li").eq(index).text("Correcta");
}

function notransparentl() {
	$(".tablasimulador span").eq(index).css({ "animation-name": "cajaslengua", "animation-duration": "1s", "animation-fill-mode": "both" });
	$(".tablasimulador span").eq(index).addClass("1 2 l");
	$(".barraprogreso ol li, .collapsible-body ol li").eq(index).text("Correcta");
}

function notransparentc() {
	$(".tablasimulador span").eq(index).css({ "animation-name": "cajascientifico", "animation-duration": "1s", "animation-fill-mode": "both" });
	$(".tablasimulador span").eq(index).addClass("1 2 c");
	$(".barraprogreso ol li, .collapsible-body ol li").eq(index).text("Correcta");
}

function notransparent3() { //mate
	$(".tablasimulador span").eq(index).css({ "animation-name": "cajasmate", "animation-duration": "1s", "animation-fill-mode": "both" });
	$(".tablasimulador span").eq(index).addClass("1 3");
	$(".barraprogreso ol li, .collapsible-body ol li").eq(index).text("Incorrecta");
}

function notransparent3l() { //lengua
	$(".tablasimulador span").eq(index).css({ "animation-name": "cajaslengua", "animation-duration": "1s", "animation-fill-mode": "both" });
	$(".tablasimulador span").eq(index).addClass("1 3");
	$(".barraprogreso ol li, .collapsible-body ol li").eq(index).text("Incorrecta");
}
function notransparent3c() { //cientifico
	$(".tablasimulador span").eq(index).css({ "animation-name": "cajascientifico", "animation-duration": "1s", "animation-fill-mode": "both" });
	$(".tablasimulador span").eq(index).addClass("1 3");
	$(".barraprogreso ol li, .collapsible-body ol li").eq(index).text("Incorrecta");
}

//notransparent function end
//siguiente pregunta
function mostrarsiguientepregunta() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
	$(".textopregunta, .opcionesderespuestas, .footer").hide(0).show(500);
	M.toast({ html: 'Se guardó tu respuesta <i class="material-icons" style="color:#2aff1f">check</i>', classes: 'rounded gray z-depth-3', outDuration: 350, inDuration: 100, displayLength: 1500 });

	index++;

	$(".opcionesderespuestas span").removeClass();
	$(".opcionesderespuestas span").addClass("hoverable");
	$(".simu2cambiarespuesta").hide();
	$(".opcionesderespuestas span").attr({ style: "", onclick: "checkAnswer(this)" });
	printQuestion(index);
	if (index == 40) {
		$(".simu2siguientem").attr("onclick", "mostrarsiguientepreguntal()");
	} else if (index == 41) {
		printQuestionl();
		$(".opcionesderespuestas span").attr("onclick", "checkAnswerl(this)");
	} else if (numerofoto1 == index) {
		//codigo foto
		Webcam.on('error', function (err) {
			$(".empiezotexto").remove();
		});
		$(".simu2siguientem").click(function () {
			Webcam.snap(function (data_uri) {
				document.getElementById('evidencia_foto1').innerHTML = '<img src="' + data_uri + '"/>';
			});
		});
	}
	return index;
}

//siguiente pregunta


// siguiente pregunta lenguaje

function mostrarsiguientepreguntal() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
	$(".textopregunta, .opcionesderespuestas, .footer").hide(0).show(500);
	M.toast({ html: 'Se guardó tu respuesta <i class="material-icons" style="color:#2aff1f">check</i>', classes: 'rounded gray z-depth-3', outDuration: 350, inDuration: 100, displayLength: 1500 });
	indexlengua++;
	indexcajalengua++;

	$(".opcionesderespuestas span").removeClass();
	$(".opcionesderespuestas span").addClass("hoverable");
	$(".simu2cambiarespuesta").hide();
	$(".opcionesderespuestas span").attr({ style: "", onclick: "checkAnswerl(this)" });
	index++;
	printQuestionl(indexlengua);
	if (index == 41) {
		$(".rn").addClass("animate__animated animate__backOutLeft visiblesimulador");
		swal.fire({
			title: "Razonamiento Verbal",
			icon: "info",
			allowOutsideClick: false,
			allowEscapeKey: false,
			allowEnterKey: false,
			stopKeydownPropagation: false,
			showConfirmButton: false,
			grow: 'fullscreen',
			timer: 1400,
			timerProgressBar: true,
			showClass: {
				popup: 'animate__animated animate__bounceInRight'
			},
			hideClass: {
				popup: 'animate__animated animate__bounceOutLeft'
			}
		})
	} else if (index <= 79) {
		swal.close();
	} else if (index == 80) {
		$(".simu2siguientem").attr("onclick", "mostrarsiguientepreguntac()");
	} else if (index == 81) {
		$(".rv").addClass("animate__animated animate__backOutLeft visiblesimulador");
		printQuestionc();
		$(".opcionesderespuestas span").attr("onclick", "checkAnswerc(this)");
	} else if (numerofoto1 == index) {
		//codigo foto
		Webcam.on('error', function (err) {
			$(".empiezotexto").remove();
		});
		$(".simu2siguientem").click(function () {
			Webcam.snap(function (data_uri) {
				document.getElementById('evidencia_foto1').innerHTML = '<img src="' + data_uri + '"/>';
			});
		});
	}
	return index;
}

// siguiente pregunta lenguaje fin
// siguiente pregunta cientifico 
function mostrarsiguientepreguntac() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
	$(".textopregunta, .opcionesderespuestas, .footer").hide(0).show(500);
	M.toast({ html: 'Se guardó tu respuesta <i class="material-icons" style="color:#2aff1f">check</i>', classes: 'rounded gray z-depth-3', outDuration: 350, inDuration: 100, displayLength: 1500 });
	indexcentifico++;
	indexcajalcientifico++;

	$(".opcionesderespuestas span").removeClass();
	$(".opcionesderespuestas span").addClass("hoverable");
	$(".simu2cambiarespuesta").hide();
	$(".opcionesderespuestas span").attr({ style: "", onclick: "checkAnswerc(this)" });
	index++;
	printQuestionc(indexcentifico);

	if (index == 81) {
		swal.isVisible();
		swal.fire({
			title: "Razonamiento Lógico",
			icon: "info",
			allowOutsideClick: false,
			allowEscapeKey: false,
			allowEnterKey: false,
			stopKeydownPropagation: false,
			showConfirmButton: false,
			grow: 'fullscreen',
			timer: 1400,
			timerProgressBar: true,
			showClass: {
				popup: 'animate__animated animate__bounceInRight'
			},
			hideClass: {
				popup: 'animate__animated animate__bounceOutLeft'
			}
		})

	} else if (index <= 119) {
		swal.close();
	} else if (index == 120) {
		$(".simu2siguientem").attr("onclick", "mostrarsiguientepreguntaso()");
	} else if (index == 121) {
		$(".rl").addClass("animate__animated animate__backOutLeft visiblesimulador");
		printQuestions();
		$(".opcionesderespuestas span").attr("onclick", "checkAnswers(this)");
	} else if (numerofoto1 == index) {
		//codigo foto
		Webcam.on('error', function (err) {
			$(".empiezotexto").remove();
		});
		$(".simu2siguientem").click(function () {
			Webcam.snap(function (data_uri) {
				document.getElementById('evidencia_foto1').innerHTML = '<img src="' + data_uri + '"/>';
			});
		});
	}
	return index;
}
// siguiente pregunta cientifico fin

if (index == 170) {

	$(".simu2siguientem").hide();
	$("#versimu2").show();
	M.Toast.dismissAll();
	swal.close();
	$("#versimu2").click(function () {
		$(".fixed-action-btn, .numerocedula, .coitable").hide();
		$(".resultados, .Reload, .tiemporestantes2").show(500);
		$(".videocam").remove();
		anime.timeline({ loop: false })
		add({
			targets: '.consejobox',
			scaleY: [0, 1],
			easing: "easeInOutExpo",
			duration: 700
		}).add({
			targets: '.progressbar',
			translateX: [-1000, 0],
			delay: anime.stagger(300),
			easing: 'easeInOutBack'// increase delay by 100ms for each elements.
		});
		$(".Reload").click(function () {
			location.reload();
		})
	});
}


//resultados
function mostrarresult(j) {
	swal.close();
	let puntos = 0;
	let contestadas = $(".tablasimulador span").filter(".1").length;
	let correctas = $(".tablasimulador span").filter(".2").length;
	let incorrectas = $(".tablasimulador span").filter(".3").length;
	let nocontestadas = preguntastotales - contestadas;
	porcentajesmate(); porcentajeslengua(); porcentajescientifico(); porcentajessocial();
	puntos = (400 + ($(".tablasimulador span").filter(".m").length * 3.53) + ($(".tablasimulador span").filter(".l").length * 3.53) + ($(".tablasimulador span").filter(".c").length * 3.53) + ($(".tablasimulador span").filter(".s").length * 3.53) - 0.1);
	/*Por el momento cada pregunta el puntaje es de 3.53 de lo calculado esperar a ver lo oficial*/
	$("#versimu2").show();
	$(".fixed-action-btn, .numerocedula, .coitable").hide();
	$(".box").slideUp(500);
	$(".resultados, .Reload, .tiemporestantes2").show(500);
	$(".Reload").click(function () {
		location.reload();
	});
	if (window.innerWidth <= 560) {
		$("#imprimir").click(function () {
			$('html, body').animate({
				scrollTop: $(".text-wrapper").offset().top
			}, 1000);
			$(".mobilecoi, .coitable").show();
			$(".resultados,  .tablasimulador, .tableimp, #imprimir2").hide();
			anime({
				targets: '.collapsemate, .collapselengua, .collapsecien, .collapsesocial',
				translateX: [-1000, 0],
				delay: anime.stagger(300),
				easing: 'easeInOutBack'
			});
			var textWrapper = document.querySelector('.ml11 .letters');
			textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

			anime.timeline({ loop: false })
				.add({
					targets: '.ml11 .line',
					scaleY: [0, 1],
					opacity: [0.5, 1],
					easing: "easeOutExpo",
					duration: 400
				})
				.add({
					targets: '.ml11 .line',
					translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
					easing: "easeOutExpo",
					duration: 700,
					delay: 100
				}).add({
					targets: '.ml11 .letter',
					opacity: [0, 1],
					easing: "easeOutExpo",
					duration: 600,
					offset: '-=775',
					delay: (el, i) => 34 * (i + 1)
				}).add({
					targets: '.ml11 .line',
					scaleY: [1, 0],
					opacity: [0.5, 1],
					easing: "easeOutExpo",
					duration: 400
				})

			$(".progressbar2").addClass("animate__animated animate__fadeInDownBig animate__delay-3s");
			$(".repeat").addClass("animate__animated animate__fadeInLeft animate__delay-2s");
			$(".collapsemate").addClass("animate__animated animate__pulse animate__repeat-3");
		});


	} else {
		$("#imprimir").click(function () {
			$(".coitable, .tableimp").show();
			$(".resultados,  .tablasimulador, .mobilecoi").hide();

			var textWrapper = document.querySelector('.ml11 .letters');
			textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

			anime.timeline({ loop: true })
				.add({
					targets: '.ml11 .line',
					scaleY: [0, 1],
					opacity: [0.5, 1],
					easing: "easeOutExpo",
					duration: 400
				})
				.add({
					targets: '.ml11 .line',
					translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
					easing: "easeOutExpo",
					duration: 700,
					rotate: 720,
					delay: 100
				}).add({
					targets: '.ml11 .letter',
					opacity: [0, 1],
					easing: "easeOutExpo",
					duration: 600,
					offset: '-=775',
					delay: (el, i) => 34 * (i + 1)
				}).add({
					targets: '.ml11',
					opacity: 0,
					duration: 2000,
					easing: "easeOutExpo",
					delay: 1000
				});

		});
	}

	$("#puntostotaless2").html("<span style='font-size:22px'><b>Respondiste </b><b class='contestadas'></b> <b>de</b> " + preguntastotales + "<br><b>No respondidas </b><b class='nocontestadas'></b></span>");
	var classcontestadas = document.querySelector('.contestadas');
	var classnocontestadas = document.querySelector('.nocontestadas');

	anime({
		targets: classcontestadas,
		innerHTML: [0, contestadas],
		easing: 'linear',
		round: 10
	});
	anime({
		targets: classnocontestadas,
		innerHTML: [0, nocontestadas],
		easing: 'linear',
		round: 10
	});
	$("#puntossobremils2").html("<b>Obtuviste </b><b class='puntos'></b> de 1000 puntos<br>(CONSIDERA QUE EL PUNTAJE PUEDE VARIAR, NO ES UN PUNTAJE CERTERO EL DE ESTE SIMULADOR SINO ALGO PARECIDO)");
	var classpuntos = document.querySelector('.puntos');

	anime({
		targets: classpuntos,
		innerHTML: [0, puntos],
		easing: 'linear',
		round: 10
	});
	$("#correctass2").html("<b class='green-text'>Correctas </b><b class='correctas'></b>");
	$("#incorrectass2").html("<b class='red-text'>Incorrectas </b><b class='incorrectas'></b>");
	var classcorrectas = document.querySelector('.correctas');
	var classincorrectas = document.querySelector('.incorrectas');

	anime({
		targets: classcorrectas,
		innerHTML: [0, correctas],
		easing: 'linear',
		round: 10
	});
	anime({
		targets: classincorrectas,
		innerHTML: [0, incorrectas],
		easing: 'linear',
		round: 10
	});
	$(".tableimp thead tr:nth-child(1) th:nth-child(2)").html("<h4>" + correctas + "/" + preguntastotales + "</h4>");

}
