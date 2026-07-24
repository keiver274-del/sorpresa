
const boton=document.getElementById("continuar");
 
if(boton){
 
boton.addEventListener("click",()=>{
 
const nombre=document
.getElementById("nombre")
.value
.trim()
.toLowerCase();
 
const mensaje=document.getElementById("mensaje");
 
if(nombre==="mafer"){
 
localStorage.setItem("nombre","Mafer");
 
mensaje.style.color="#22c55e";
 
mensaje.innerHTML="Bienvenida Mafer...";
 
setTimeout(()=>{
 
window.location.href="sobre.html";
 
},1500);
 
}else{
 
mensaje.style.color="#f87171";
 
mensaje.innerHTML="Tu sabes perfectamente como acceder, confio en ti.";
 
}
 
});
 
}
