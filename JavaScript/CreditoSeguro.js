
    //CARRUSEL IMAGENES
    var imagenes = new Array("../imagenes/banner1.jpg","../imagenes/banner2.jpg","../imagenes/banner3.jpg");

    var c=0;
    function Carrusel(){
        c++;
        if(c >= 3){
            c=0;
        }
        document.getElementById('imgcab').setAttribute("src",imagenes[c]);
        setTimeout("Carrusel()",2000);
    }
        Carrusel();


    //para la imagen 1 de productos
    function onImagen_1(){
        this.setAttribute("src","../imagenes/plazofijo1.jpg");
        
    }
    function outImagen_1(){
        this.setAttribute("src","../imagenes/plazofijo.jpg");
    }
     //para la imagen 2 de productos
     
     function onImagen_2(){
        this.setAttribute("src","../imagenes/creditos1.jpg");
        
    }
    function outImagen_2(){
        this.setAttribute("src","../imagenes/creditos.jpg");
    }
     //para la imagen 3 de productos
     function onImagen_3(){
        this.setAttribute("src","../imagenes/seguros1.jpg");
        
    }
    function outImagen_3(){
        this.setAttribute("src","../imagenes/seguros.jpg");
    }
     //para la imagen 4 de productos
     function onImagen_4(){
        this.setAttribute("src","../imagenes/ahorros1.jpg");
        
    }
    function outImagen_4(){
        this.setAttribute("src","../imagenes/ahorros.jpg");
    }
