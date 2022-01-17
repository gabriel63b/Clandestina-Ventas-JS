/* font-family: 'Kaushan Script', cursive; */
/* font-family: 'Pinyon Script', cursive; */
/* font-family: 'Petit Formal Script', cursive; */
/* font-family: 'Aguafina Script', cursive; */
/* font-family: 'Rouge Script', cursive; */
// font-family: 'Roboto', sans-serif;

$( document ).ready(function() {
    
       
    
// Variables
    
    let carrito = [];
    let costototal = 0;
    let totalUnidades = 0;
    const BaseClientes = []; 
    let baseDeDatos =[]; 
    
    baseDeDatos = JSON.parse(localStorage.getItem('productos')) || (productos); 
    carrito = JSON.parse(localStorage.getItem('carritoOriginal')) || (carrito);
  
    
// FUNCION CARGAR PRODUCTOS

    function CargarProductos (){
       
        //OBTENEMOS EL ARRAY DE PRODUCTOS PARSEANDO DESDE EL JSON SI EXISTE
        baseDeDatos = JSON.parse(localStorage.getItem('productos')) || (productos);
        //ACTUALIZO BASE DE DATOS Y GUARDO EL ARRAY DE PRODUCTOS EN STORAGE
        if (baseDeDatos.length == productos.length) {
            localStorage.setItem('productos', JSON.stringify(baseDeDatos));
        } else {
            baseDeDatos = productos;
            localStorage.setItem('productos', JSON.stringify(baseDeDatos));
        }
    }
    
// INICIO
    //Deja en cero el carrito y las cantidades del LocalStorage al Iniciar (RECORDAR DESBLOQUEAR!!!!)
    // localStorage.setItem('carrito', JSON.stringify(carrito));
    // localStorage.setItem('cantidades', JSON.stringify(cantidades));

    
    MostrarIconos(Iconos);
    CargarProductos();
    MostrarArticulos(baseDeDatos);
    MostrarIconoCarrito();
    Renderizar();
    
    
///////////////////////////////////////////////////////////////////////////

//ARTICULOS Y CARRITO
    function MostrarIconoCarrito(){
        $("#carrito").append(`
        <div class="dropdown">
        <a id= "carrito" class="animarMoto icon-cart dropbtn" href="pages/carro.html"><img id="posi"  src="img/iconos/delivery-man.svg" alt="" width="40" height="40">
          <span id = "numeroCarrito" class="contadorCarrito pink"></span>         
        </a>
        <ul class="cart-dropdown">
            <div class="espacioCarrito">               
                            <li id="listaCarrito">
                         
                              <li class="cart-space mt-5">
                                  <div class="cart-sub">
                                      <h4>Total</h4>
                                  </div>
                                  <div id ="total" class="cart-price">
                                      <p>$0.00</p>
                                  </div>
                              </li>
                              <li class="cart-btn-wrapper">
                                  <a id="verCarrito" class="cart-btn " href="pages/carro.html">Ver Carrito</a>
                                  <a id="vaciar" class="cart-btn " href="#">Vaciar</a>
                              </li>
                              </li>
            </div>
        </ul>                 
      </div>
    `);
    }


    function MostrarArticulos(Articulos) {
        
        $("#items").empty();
        for (const articulo of Articulos) {
            
            $(`#${articulo.grupo}`).append(`
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div class="card  mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                <img src="${articulo.imagen}" style="height: 12rem; width: 12rem;" alt="...">
              </div>
              <div class="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                <div class="card-body">
                  <h5 class="card-title fw-bold">${articulo.nombre}</h5>
                  <p class="card-text">${articulo.descripcion}</p>
                  <div class="row">
                  <div class="col-6">
                  <p class="card-text fw-bold">$ ${articulo.precio}</p>
                  </div>
                  <div class="col-6">
                  <button id= "${articulo.id}" class="btnComprar btn btn-outline-dark d-block  btn-sm" marcador="${articulo.id}">
                  <img id="posi"  src="img/iconos/delivery-man.svg" alt="" width="25" height="25"> Agregar</button>
                  </div>
                  </div>               
                </div>
              </div>
            </div>
          </div>
          </div>
            `);
            
            $(`#${articulo.id}`).on('click', AgregarCarrito);   
        }    
    }

    function AgregarCarrito() {    
        carrito.push(this.getAttribute('marcador'));
        $('.animarMoto').addClass('animate__animated animate__shakeY');
    
        setTimeout(function () { 
            $('.animarMoto').removeClass('animate__animated animate__shakeY');
        }, 500);
        Renderizar ();
    }

    function Renderizar () {
        var i=0;
        totalUnidades = 0;
        cantidades =[];
        // Vaciamos todo el html
        $("#listaCarrito").empty();
        $("#numeroCarrito").empty();
        $("#total").append(`<h5 class="fw-bold">$${costototal}.00</h5>`);
         // Quitamos los duplicados
         let carritoSinDuplicados = [...new Set(carrito)];    
        // Generamos los Nodos a partir de carrito
        
        carritoSinDuplicados.forEach(function (item, indice) {
            i++;
            // Obtenemos el item que necesitamos de la variable base de datos
            let Art = baseDeDatos.filter(itemBaseDatos => itemBaseDatos['id'] == item);
            
            // Cuenta el número de veces que se repite el producto
            let numeroUnidadesItem = carrito.reduce(function (costototal, itemId) {
                return itemId === item ? costototal += 1 : costototal;
            }, 0);
            // Creamos el nodo de los items del carrito y calculamos el total 
            $("#listaCarrito").prepend(`
                     <li id=productosEnCarrito class="single-product-cart">
                              <div class="cart-img">
                                  <img src="${Art[0]['imgmini']}" alt="">
                              </div>
                              <div class="cart-title">
                                  <h5 class="d-flex align-items-center"> 
                                  <button id="btnMas${item}" class="btn ms-3" mas="${item}"><img src="/img/iconos/plus-circle.svg" alt="Mas" width="15" height="15"></button>
                                  ${numeroUnidadesItem}U
                                  <button id="btnMenos${item}" class="btn " menos="${item}"><img src="/img/iconos/dash-circle.svg" alt="Menos" width="15" height="15"></button>
                                  </h5>
                                  <h5 class="">${Art[0]['nombre']} </h5>
                                  <span>Precio: $${Art[0]['precio']}</span>
                              </div>
                              <div class="cart-delete">
                              <a id="btnEliminar${item}" class="icon-cart dropbtn" grupo="${item}"><img src="/img/iconos/trash.svg" alt="Mas" width="18" height="18"></a>
                              </div>
                        </li>
              `);
           $(`#btnMas${item}`).on('click', SumarEnCarrito);
           $(`#btnMenos${item}`).on('click', RestarEnCarrito);
           $(`#btnEliminar${item}`).on('click', eliminarProducto);
            totalUnidades = totalUnidades + numeroUnidadesItem;
            cantidades.push(numeroUnidadesItem);
            CalcularTotal ();
      })
      $("#numeroCarrito").append(`${totalUnidades}`);
      //Graba carrito sin duplicado y carrito original en LocalStorage
      localStorage.setItem('carritoOriginal', JSON.stringify(carrito));
    //   localStorage.setItem('carrito', JSON.stringify(carritoSinDuplicados));
      
    }
           
    function RestarEnCarrito() {
        // Obtenemos el producto ID que hay en el boton pulsado
        let id = this.getAttribute('menos');
      
        // Borramos un elemento del carrito
        var index = carrito.indexOf(id);
        if (index > -1) {
             carrito.splice(index, 1);
            }
        // var len = carrito.length
        if (carrito.length == 0) {
            $("#listaCarrito").empty();
        }
        // volvemos a renderizar
        Renderizar();
        // Calculamos de nuevo el precio
        CalcularTotal();
    }

    function SumarEnCarrito() {
        // Obtenemos el producto ID que hay en el boton pulsado
        let id = this.getAttribute('mas');
        //Agrega el producto 
        carrito.push(this.getAttribute('mas'));
        // volvemos a renderizar
        Renderizar();
        // Calculamos de nuevo el precio
        CalcularTotal();
    }
        
        function CalcularTotal (){
        $("#total").empty();
        var length = carrito.length;
        for (var i = 0; i < length; i++) {
          costototal = costototal + (baseDeDatos[parseInt(carrito[i])].precio);
         }
        $("#total").append(` 
        <h5 class="fw-bold">$${costototal}</h5>`);
        costototal = 0;
        }
    
    
    function VaciarCarrito() {
        // Limpiamos los productos guardados
        carrito = [];
        $("#total").empty();
        $("#numeroCarrito").empty();
        $("#numeroCarrito").append(`0`);
        $( "#listaCarrito" ).empty();
        // carro.textContent = '';
        costototal = 0;
        $("#total").append(` 
        <h5 class="fw-bold">$${costototal}.00</h5>`);
        localStorage.setItem('carritoOriginal', JSON.stringify(carrito));
    }

    //MÊTODO PARA ELIMINAR UN PRODUCTO DEL ARRAY DE PRODUCTOS
    function eliminarProducto() { 
        var len = carrito.length;
        var n = true;
        let elim = this.getAttribute('grupo');
        console.log(elim);
        while (n) {
            n = false;
            len = carrito.length;
            console.log(len);
            for (var i = 0; i < len; i++) {    
                if ((carrito[i]) == elim) {
                    carrito.splice(i, 1);
                    n = true;
                } 
        }    
        }
        // // volvemos a renderizar
         Renderizar();
        // // Calculamos de nuevo el precio
         CalcularTotal();
        
        
    }
    
    //ICONOS HEADER//
    function MostrarIconos(Iconos) {
    for (const ico of Iconos) {
        $("#verIconos").append(`
        <li class="nav-item ms-3">
        
            <a id="${ico.id}" class="effect-underline text-white" aria-current="page" href="#${ico.grupo}" grupo="${ico.grupo}"><img id="${ico.id}" src="${ico.imagen}" alt="" width="40" height="40" class="me-3">${ico.nombre}</a>
            
        </li>
        `);
        
     }
    }   
    
    // Eventos
    $("#vaciar").click(VaciarCarrito);
   
     
}); //FIN
      
