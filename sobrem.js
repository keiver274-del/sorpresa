setTimeout(() => {
 
    window.location.href = "login.html";
 
},6000);

/* animación del círculo de progreso */
const circuloBarra = document.getElementById("circuloBarra");
const elPorcentaje = document.getElementById("porcentaje");

if(circuloBarra && elPorcentaje){

    const radio = circuloBarra.r.baseVal.value;
    const circunferencia = 2 * Math.PI * radio;

    circuloBarra.style.strokeDasharray = circunferencia;
    circuloBarra.style.strokeDashoffset = circunferencia;

    const duracion = 6000; // debe coincidir con el setTimeout de arriba
    const inicio = performance.now();

    function animar(ahora){

        const transcurrido = ahora - inicio;
        let progreso = transcurrido / duracion;

        if(progreso > 1) progreso = 1;

        const porcentaje = Math.round(progreso * 100);

        circuloBarra.style.strokeDashoffset = circunferencia - (progreso * circunferencia);
        elPorcentaje.innerHTML = porcentaje + "%";

        if(progreso < 1){
            requestAnimationFrame(animar);
        }
    }

    requestAnimationFrame(animar);
}