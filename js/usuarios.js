// USUARIOS
function CargarUsuarios (){
    $.ajax({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        success: (respuesta) => {
            BaseClientes = respuesta;
            console.log(BaseClientes);
        }        
});

}
CargarUsuarios();
    // Iniciar Sesión
    $("#iniciarSesion").append(`
    <a class="" data-bs-toggle="modal" data-bs-target="#staticBackdrop" href="#"><img src="img/iconos/key.svg" alt="" width="40" height="40"></a>
    
            `);

    //Formulario e Inicio de Sesión
    $("#iniciarSesion").on('click', MostrarInicioSesión); 

    // NodoInicioSesion.addEventListener('click', MostrarInicioSesión);  
    let miFormulario  = document.getElementById("formulario");
    miFormulario.addEventListener("submit", validarFormulario);
   

    let nUsuario;

    function validarFormulario(e){
    e.preventDefault();
    console.log(BaseClientes);
    // mostrarIni.classList.add('d-none'); 
    nUsuario = document.getElementById("usuario").value;
    console.log(nUsuario);
    for(const personaje of BaseClientes) {
        if (personaje.username == nUsuario) {
            nombreUsuario (nUsuario);
            $(".TxtIniSesion").addClass("d-none");
            $('#staticBackdrop').modal('hide');
            break;
        }
        else {
            nUsuario="Usuario incorrecto";
            cartelUsuarioIncorrecto(nUsuario);
            

            break;
        }
    }
    return nUsuario;
    }

 function cartelUsuarioIncorrecto(u){
    $("#mostrarIni").append(`
        <p>   ${u} </p>`);
    }


    function nombreUsuario (u) {
        $("#iniciarSesion").append(`
        <p> Bienvenido  ${u} </p>`);
    }
   
    // 

    function MostrarInicioSesión() {
        $("#mostrarIni").removeClass('d-none'); 
        // $(".TxtIniSesion").addClass("d-none");
        // TxtIniSesion.classList.add ('');
    }
//////////////////FIN USUARIOS
