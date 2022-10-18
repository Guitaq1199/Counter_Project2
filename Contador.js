var contador = 0;
document.getElementById("contador").innerText = contador;

function Incrementar(){
    contador++;
    document.getElementById("contador").innerText = contador;
    color();
}
function Decrementar(){
    contador--;
    document.getElementById("contador").innerText = contador;
    color();
}
function Reiniciar(){
    contador=0;
    document.getElementById("contador").innerText = contador;
    color();
}
function color(){
    if(document.getElementById("contador").innerText==0)
    {
        document.getElementById("contador").style.color = "blue";

    }
    else if(document.getElementById("contador").innerText>0)
    {
        document.getElementById("contador").style.color = "green";
    }
    else {
        document.getElementById("contador").style.color = "red";
    }
}
