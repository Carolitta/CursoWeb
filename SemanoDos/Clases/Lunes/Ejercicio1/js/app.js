// en esta clase vamos a buscar los elementos con js para recuperar valores o darles movimiento
// vamos a ver queri selector
// vamos a buscar 

document.querySelector("p").innerHTML = "Busque por etiqueta";//con esta linea se va a reemplazar
document.querySelector("p.suClase").innerHTML = "Busque por clase";
document.getElementById("BuscandoId").innerHTML="Busque por id";

var nombre = document.getElementByName('botoncito')[0].value;
alert(nombre);
/*Operadores aritmeticos*/

var y= 5;
var x = y +2;
document.write('\nOperacion suma'+x);
var z=5;
var a= --z;
document.write('\nDecremento'+a);

var b=5;
var c= b%2;
document.write('\nMódulo: '+c);

var d =5;
var e =10;
d=e;

var texto = "HOLA", texto1="Mundo";
var valor=5, valor1=6, valor2 = 7, valor3=8;
var val=true, val1= true;

//Numero´+ numero -> suma 
valor += 2;
//Bolean + numero -> suma
val += 1;
//Numero + string -> concatenacion
valor2+=texto;
//cadena+boleano->
texto1 +=false;

//infinito 
valor3/0;
document.write('\nPrueba1: '+valor+'\nPrueba2: '+val+'\nPrueba3'+valor2+'\nPrueba4'+texto1);

var text = "";
var i;
for(i=0;i<5;i++){
	if(i==4){
		text+= "The number magic is "
	}
}
//typeof devuelve el tipo de variable