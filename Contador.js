var contador = 0;
document.getElementById("contador").innerText = contador;

function Incrementar(){
    contador++;
    document.getElementById("contador").innerText = contador;
}
function Decrementar(){
    contador--;
    document.getElementById("contador").innerText = contador;
}
function Reiniciar(){
    contador=0;
    document.getElementById("contador").innerText = contador;
}
