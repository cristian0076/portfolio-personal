

    document.getElementById('logoweb').addEventListener('click',function alerta(e){
        e.preventDefault();
        alert("Mi pagina web por el momento no se encuentra disponible");
    });
    
   
    function validar_form(){
         var nombre  = document.getElementById("nombre").value;
         var email   = document.getElementById("mail").value;
         var mensaje = document.getElementById("mensaje").value;
         var cont_validar = 0;
        if(nombre == ""){
            alert("Debe ingresar su Nombre y Apellido!");
            cont_validaro = 0;
        }else{
            cont_validar = cont_validar +1
        }

        if(email == ""){
            alert("Debe ingresar su Email!");
            cont_validar = 0;
        }else{
            cont_validar = cont_validar +1
        }

        if((mensaje == "") || (mensaje == "Escribe aquí tu comentario: ")){
            alert("Debe ingresar un mensaje!");
            cont_validar = 0;
        }else{
            cont_validar = cont_validar +1
        }

        if(cont_validar == 3){

            alert("El mensaje fue enviado con exito!")
        }

       
    }


