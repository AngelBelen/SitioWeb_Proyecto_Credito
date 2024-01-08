var imagenes = new Array("../imagenes/banner1.jpg","../imagenes/banner2.jpg","../imagenes/banner3.jpg");

var c=0;
function carrusel(){
    c++;
    if(c >= 3){
        c=0;
    }
    document.getElementById('imgcab').setAttribute("src",imagenes[c]);
    setTimeout("carrusel()",2000);
}
carrusel();