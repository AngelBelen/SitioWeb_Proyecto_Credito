function cambiarColorTitulo(){
    let r = Math.floor(Math.random() * 256);  
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    document.getElementById('titulo').style.color = "rgb("+r+","+g+", "+b+")";
    setTimeout('cambiarColorTitulo()',1000);
}
cambiarColorTitulo();

const llenarTabla = document.querySelector('#lista-tabla tbody');
const monto = document.getElementById('monto');
const tiempo = document.getElementById('tiempo');
const interes = 7;
const btnCalcular = document.getElementById('btnCalcular');

btnCalcular.addEventListener('click', () => {
    calcularCuota(monto.value, tiempo.value);
})

function calcularCuota(monto, tiempo){
    
        while(llenarTabla.firstChild){
            llenarTabla.removeChild(llenarTabla.firstChild);
        }
    sumaCuota=0;
    sumaCapital=0;
    sumaInteres=0;
    sumaMonto=0;
    let pagoInteres=0, pagoCapital = 0, cuota = 0;

    cuota = monto * (Math.pow(1+interes/100, tiempo)*interes/100)/(Math.pow(1+interes/100, tiempo)-1);
    console.log(cuota);


    if(monto>39999.99 && monto<1199,999.99 && tiempo>11 && tiempo<119){   
        for(let i = 1; i <= tiempo; i++) {
        
            pagoInteres = parseFloat(monto*(interes/100));
            pagoCapital = cuota - pagoInteres;
            monto = parseFloat(monto-pagoCapital);
            

            const row = document.createElement('tr');
            row.innerHTML =
            `<tr>
                <td>${i}</td>
                <td>${cuota.toFixed(2)}</td>
                <td>${pagoCapital.toFixed(2)}</td>
                <td>${pagoInteres.toFixed(2)}</td>
                <td>${monto.toFixed(2)}</td>
            </tr>`;
            llenarTabla.appendChild(row)
            sumaCuota += cuota;
            sumaCapital += pagoCapital;
            sumaInteres += pagoInteres;
            sumaMonto += monto;
        }

    sumaCuotaRe = sumaCuota.toFixed(2);
    sumaCapitalRe = sumaCapital.toFixed(2);
    sumaInteresRe = sumaInteres.toFixed(2);
    sumaMontoRe = sumaMonto.toFixed(2);

    document.getElementById("t1").innerHTML=sumaCuotaRe;
    document.getElementById("t2").innerHTML=sumaCapitalRe;
    document.getElementById("t3").innerHTML=sumaInteresRe;
    document.getElementById("t4").innerHTML=sumaMontoRe;  

    var resultadoCuota = document.getElementById("resultadoCuota");
    var totalPagar = document.getElementById("totalPagar");
    resultadoCuota.innerText = cuota.toFixed(2) + " soles";
    totalPagar.innerText = sumaMontoRe + " soles";

}else{
    alert("Ingresar los campos correctamente requeridos");

    document.getElementById("t1").innerHTML="Error";
    document.getElementById("t2").innerHTML="Error";
    document.getElementById("t3").innerHTML="Error";
    document.getElementById("t4").innerHTML="Error";  

    var resultadoCuota = document.getElementById("resultadoCuota");
    var totalPagar = document.getElementById("totalPagar");
    resultadoCuota.innerText = "Error";
    totalPagar.innerText = "Error";
}
}

document.querySelector('input[name="monto"]').addEventListener("keypress",function(event){
    var longitud = document.querySelector('input[name="monto"]').value.length;
    if(longitud>=6){
        window.event.preventDefault();
        return;
    }

    var ascii = event.keyCode || event.which;
    if(ascii<48 || ascii>57){
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="cuota"]').addEventListener("keypress",function(event){
    var longitud = document.querySelector('input[name="cuota"]').value.length;
    if(longitud>=2){
        window.event.preventDefault();
        return;
    }

    var ascii = event.keyCode || event.which;
    if(ascii<48 || ascii>57){
        window.event.preventDefault();
        return;
    }
});