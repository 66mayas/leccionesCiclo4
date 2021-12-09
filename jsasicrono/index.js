var msj = "";
console.log("Mensaje 1 = " + msj);
console.log("Mensaje 2 = " + msj);
console.log("Mensaje 3 = " + msj);
setTimeout(() => {
    msj = "Listo, pasaron 5 segundos.";
}, 5000);
setTimeout(() => {
    console.log("Mensaje 4 = " + msj);
}, 7000);
console.log("Mensaje 5 = " + msj);
console.log("Mensaje 6 = " + msj);
console.log("Mensaje 7 = " + msj);
