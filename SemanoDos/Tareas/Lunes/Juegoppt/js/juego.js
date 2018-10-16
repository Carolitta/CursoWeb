var usuarioElige = prompt("¿Piedra, papel o tijera?");
var computadoraElige = Math.random();


if (computadoraElige<=0.33) {
    computadoraElige="piedra";
} else if (computadoraElige>=0.67) {
 computadoraElige="tijera";
} else {
    computadoraElige="papel";
}



function comparar(eleccion1,eleccion2){
    if(eleccion1===eleccion2){
      
        alert("¡Es un empate!");
    }
    
    else if(eleccion1==="piedra"){
        if(eleccion2==="tijera"){
            alert("Tú: "+eleccion1+"\nComputadora: "+eleccion2+"\n\n ¡GANASTE!");
        }else{
            alert("Tú: "+eleccion1+"\nComputadora: "+eleccion2+"\n\n ¡PERDISTE!");
        }   
    }
    
    else if(eleccion1 === "tijera"){
        if(eleccion2 === "piedra"){
            alert("Tú: "+eleccion1+"\nComputadora: "+eleccion2+"\n\n ¡PERDISTE!");
        }else{
            alert("Tú: "+eleccion1+"\nComputadora: "+eleccion2+"\n\n ¡GANASTE!");

        }
    }
    
    else if(eleccion1 === "papel"){
        if(eleccion2 === "piedra"){
            alert("Tú: "+eleccion1+"\nComputadora: "+eleccion2+"\n\n ¡GANASTE!");
        }else{
            alert("Tú: "+eleccion1+"\nComputadora: "+eleccion2+"\n\n ¡PERDISTE!");

        }
    }
}

comparar(usuarioElige,computadoraElige);
