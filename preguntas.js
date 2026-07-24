const nombre = localStorage.getItem("nombre") || "Mafer";

// Pon aquí TU NÚMERO DE TELÉFONO con el código de tu país (sin el signo + ni espacios). 
// Por ejemplo, si es de Venezuela (+58), ponlo así: "584120000000"
const tuTelefono = "584129342182"; 

const preguntas = [
    {
        pregunta: "A ver " + nombre + ", ¿Que es algo que casi nadie sabe de ti?",
        claveGuardado: "hobbie_raro"
    },
    {
        pregunta: "Que tipo de detalles te gusta recibir? ",
        claveGuardado: "detalles_ideal"
    }
];

let indiceActual = 0;

const elNumPregunta = document.getElementById("num-pregunta");
const elEnunciado = document.getElementById("enunciado-pregunta");
const elContenedorOpciones = document.getElementById("contenedor-opciones");
const elFeedback = document.getElementById("mensaje-feedback");

function cargarPregunta() {
    elFeedback.innerHTML = "";
    elContenedorOpciones.innerHTML = "";
    
    const data = preguntas[indiceActual];
    elNumPregunta.innerHTML = "Pregunta " + (indiceActual + 1) + " ";
    elEnunciado.innerHTML = data.pregunta;
    
    const inputTexto = document.createElement("input");
    inputTexto.type = "text";
    inputTexto.id = "respuesta-abierta";
    inputTexto.placeholder = "Escribe tu respuesta aquí...";
    inputTexto.style.color = "#000000";
    
    const botonEnviar = document.createElement("button");
    botonEnviar.innerHTML = "Continuar";
    botonEnviar.style.marginTop = "15px";
    
    botonEnviar.addEventListener("click", () => {
        const respuesta = inputTexto.value.trim();
        
        if (respuesta === "") {
            elFeedback.style.color = "#f87171";
            elFeedback.innerHTML = "¡No dejes el espacio en blanco! Escribe algo bonito.";
        } else {
            // Guardamos localmente cada respuesta
            localStorage.setItem(data.claveGuardado, respuesta);
            
            elFeedback.style.color = "#22c55e";
            elFeedback.innerHTML = "Guardando respuesta...";
            
            setTimeout(() => {
                indiceActual++;
                
                if (indiceActual < preguntas.length) {
                    cargarPregunta();
                } else {
                    // --- AQUÍ TERMINAN LAS PREGUNTAS: REDACTAR EL MENSAJE DE WHATSAPP ---
                    elContenedorOpciones.innerHTML = "";
                    elNumPregunta.innerHTML = "¡Gracias por responder!";
                    elEnunciado.innerHTML = "Que lindo es conocerte un poquito más";
                    
                    // Recuperamos todas las respuestas guardadas
                    const r1 = localStorage.getItem("hobbie_raro");
                    const r2 = localStorage.getItem("detalles_ideal");

                    // Construimos el texto del mensaje automatizado
                    let mensajeWhatsApp = `¡Misión cumplida!\n`;
                    mensajeWhatsApp += `• *Sobre mí:* ${r1}\n\n`;
                    mensajeWhatsApp += `• *Detalles que le gustan:* ${r2}\n`;

                    // Codificamos el texto para que sea una URL válida
                    const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);

                    // Creamos el botón final de WhatsApp
                    const botonWhatsApp = document.createElement("button");
                    botonWhatsApp.innerHTML = "Quiero enviarte mis respuestas por WhatsApp";
                    botonWhatsApp.style.background = "#25D366"; // Color verde oficial de WhatsApp
                    botonWhatsApp.style.marginTop = "15px";

                    botonWhatsApp.addEventListener("click", () => {
                        // Abre el chat con tu número y el mensaje ya escrito
                        window.open(`https://wa.me/${tuTelefono}?text=${mensajeCodificado}`, '_blank');

                        // Inmediatamente después redirige su pestaña de la web a la galería
                        setTimeout(() => {
                            window.location.href = "galeria.html";
                        }, 1000);
                    });

                    elContenedorOpciones.appendChild(botonWhatsApp);
                }
            }, 1200);
        }
    });
    
    elContenedorOpciones.appendChild(inputTexto);
    elContenedorOpciones.appendChild(botonEnviar);
}

cargarPregunta();
