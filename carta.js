const nombre = localStorage.getItem("nombre") || "María";

document.getElementById("titulo").innerHTML =
"Para " + nombre + " ";

const mensaje =

"Hola " + nombre + ".\n" +

"Técnicamente casi no hemos hablado pero eso no impidió que quisiera hacer esto.\n" +

"Digamos que quería llamar tu atención de una forma un poco menos genérica.\n" +

"Por eso armé esto para ti.\n" +

"Espero que te animes a seguir descubriéndolo.\n" +

"Espero que te guste mucho...";

let i = 0;

const texto = document.getElementById("texto");

function escribir(){

if(i < mensaje.length){

texto.innerHTML += mensaje.charAt(i);

i++;

setTimeout(escribir,45);

}else{

document
.getElementById("continuar")
.style.display="inline-block";

}

}

escribir();

document
.getElementById("continuar")
.addEventListener("click",()=>{

window.location.href="preguntas.html";

});
