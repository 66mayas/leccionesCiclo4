let msj = "";

const promesa = new Promise(function(resolve, reject){
    console.log("Inicio de la promesa");
    setTimeout(
        function (){
            let numero = (Math.random() * 20) - 10;
            if(numero >= 0){
                resolve(`Número positivo (${numero})`)
            }else{
                reject(`Número negativo (${numero})`)
            };
        }, 5000
    );
}).then(function(SalidaDelResolve){
    console.log("Devolvió un resolve! -> " + SalidaDelResolve)
}).catch(function(SalidaDelReject){
    console.log("Devolvió un reject... " + SalidaDelReject)
}).finally(function(){
    console.log("Promesa finalizada");
});