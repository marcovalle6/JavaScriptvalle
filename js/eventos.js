var recuadro = document.querySelector("#recuadro");

function cambiarColor(){
	recuadro.style.background = "yellow";
}

var boton = document.querySelector("#boton");

boton.addEventListener("click",moverCaja)

function moverCaja(){
	recuadro.style.width = "700px";
	recuadro.style.transition = "ls width ease";
}