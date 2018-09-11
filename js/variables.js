/*=================================
=            Variables            =
=================================*/

//Variables númericas
var valor = 5;
console.log("valor numerico: ", valor);

//Variables de texto
var palabra = "el mundo es tuyo";
console.log("escritura: ", palabra);

//Variables boleanas
var boleana = true;
console.log("boleana: ", boleana);

//Variables de tipo Arreglo (Array)
var carros = ["kia", "ford" , "chevrolet"];
console.log("carros: ", carros[0]);

//variables de tipo objeto (object: propiedad y el valor)
var batido = {"sustancia1":"mango",
			"sustancia2":"mamey",
			"sustancia3":"platano"};
console.log("batido: ", batido.sustancia1);

//Variables DOM ('Modelo de objetos del documento')
/* El DOM es la estructura de objetos que genera el navegador cuando se carga un documento y se pued alterar mediante javascript para cambiar dinámicamente los contenidos y aspecto de la página */

var caja = document.querySelector("#caja");
console.log("caja: ", caja);

caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "orange";


var cajas = document.querySelectorAll(".cajas");
console.log("cajas: ", cajas)

/*=====  End of Variables  ======*/
