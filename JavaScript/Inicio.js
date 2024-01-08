
//CARRUSEL IMAGENES
var imagenes = new Array("../imagenes/Banner1.png","../imagenes/Banner2.png","../imagenes/Banner3.png","../imagenes/Banner4.png","../imagenes/Banner5.png");

var c=0;
function carrusel(){
    c++;
    if(c >= 5){
        c=0;
    }
    document.getElementById('imgcab').setAttribute("src",imagenes[c]);
    setTimeout("carrusel()",2000);
}

//FECHA
function mostrarFecha(){
    let fecha = new Date();
    let d = fecha.getDate();
    let m = fecha.getMonth()+1;
    let a = fecha.getFullYear();

    if(d < 10){
        d = "0" + d;
    }
    if(m < 10){
        m = "0" + m;
    }
    document.getElementById("pf").innerHTML = "Fechas: " + d + " / " + m + " / " + a;
}

//HORA
function mostrarHora(){
    let f = new Date();
    let h = f.getHours();
    let m = f.getMinutes();
    let s = f.getSeconds();

    if(h < 10){
        h = "0" + h;
    }
    if(m < 10){
        m = "0" + m;
    }
    if (s < 10){
        s = "0" + s;
    }
    document.getElementById("ph").innerHTML = "Hora: " + h + " : " + m + " : " + s ;
    setTimeout("mostrarHora()",1000);
}
document.body.setAttribute("onload","mostrarHora();carrusel();mostrarFecha()");


