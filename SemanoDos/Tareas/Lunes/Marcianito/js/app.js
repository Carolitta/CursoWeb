function generador(){
	var pregunta = Math.round(Math.random()*5);
	var respuesta;

	if(pregunta==0){
		alert("Si");
	}else if(pregunta == 2){
		alert("No");
	}else if(pregunta==3){
		alert("Puedes ser");
	}else if(pregunta ==4){
		alert("A lo mejor");
	}else{
		respuesta="error"
		return respuesta;
	}
}
var texto = prompt("Preguntale al marcianito: ");
generador();