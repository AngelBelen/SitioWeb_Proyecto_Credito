function cambiarColorTitulo(){
    let r = Math.floor(Math.random() * 256);  
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    document.getElementById('titulo').style.color = "rgb("+r+","+g+", "+b+")";
    setTimeout('cambiarColorTitulo()',1000);// Cambia el color del título Automáticamente sin refrescar la página.
}
cambiarColorTitulo();

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
    setTimeout("mostrarFecha()",1000);
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
document.body.setAttribute("onload","mostrarHora();mostrarFecha()");

document.querySelector('input[name="txtnombre"]').addEventListener("keypress",function(event){

    var ascii = event.keyCode || event.which;
    if(ascii<65 || ascii>90 && ascii<97 || ascii>122){
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="txtapellidos"]').addEventListener("keypress",function(event){

    var ascii = event.keyCode || event.which;
    if(ascii<65 || ascii>90 && ascii<97 || ascii>122){
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="txtdistrito"]').addEventListener("keypress",function(event){

    var ascii = event.keyCode || event.which;
    if(ascii<65 || ascii>90 && ascii<97 || ascii>122){
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="txtdni"]').addEventListener("keypress",function(event){
    var longitud = document.querySelector('input[name="txtdni"]').value.length;
    if(longitud>=8){
        window.event.preventDefault();
        return;
    }

    var ascii = event.keyCode || event.which;
    if(ascii<48 || ascii>57){
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="txtnumero"]').addEventListener("keypress",function(event){
    var longitud = document.querySelector('input[name="txtnumero"]').value.length;
    if(longitud>=9){
        window.event.preventDefault();
        return;
    }

    var ascii = event.keyCode || event.which;
    if(ascii<48 || ascii>57){
        window.event.preventDefault();
        return;
    }
});