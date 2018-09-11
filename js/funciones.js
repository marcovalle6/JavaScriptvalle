/*=============================================
Funciones sin parámetros
=============================================*/

//Declaramos la función

function bienvenida(){
	//Tarea de la función
	console.log("Que gusto saludarlo");
}

//Ejecutamos la función

bienvenida();

/*=============================================
Funciones con parámetros
=============================================*/

//Declaramos la función
function problema(digito1, digito2){
	var solucion =  digito1 + digito2;
	console.log("derivado: ", solucion);
}


problema(10, 7);
problema(30, 5);

/*=============================================
Funciones con retorno sin parámetros
=============================================*/

function regreso1(){
	var valor = 10;
	return valor;
}

console.log(regreso1());

/*=============================================
Funciones con retorno con parámetros
=============================================*/

function regreso2(valor){
	return valor;
}

console.log(regreso2(16));