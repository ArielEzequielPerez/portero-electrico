let llamarA = document.getElementById("llamandoA");
let piso = document.getElementById("piso");
let departamento = document.getElementById("departamento");

let numeros = [0,1,2,3,4,5,6,7,8,9];
var acumuladorPiso = "";
let contador = 0;
var acumuladorDepartamento = "";


const mostrarNumero = (numero) => {
    contador = contador + 1;
    if(contador <= 2){
        acumuladorPiso = acumuladorPiso + `${numeros[numero]}`;
        piso.value = acumuladorPiso;
        
        }else{
            if(contador <=4){
                acumuladorDepartamento = acumuladorDepartamento + `${numeros[numero]}`;
                departamento.value = acumuladorDepartamento;
            }
    }
}

function llamar(){
    if(verificarPisoYDepto()){
        llamarA.value = `llamando al depto ${acumuladorDepartamento} del piso ${acumuladorPiso}`;
    }else{
        llamarA.value = "no existe el piso o dpto";
    }
}


function verificarPisoYDepto(){
    parseInt(acumuladorPiso) < 9 && parseInt(acumuladorDepartamento) < 43;
}

function reiniciar(){
    piso.value = "";
    departamento.value = "";
    llamarA.value = "";
}