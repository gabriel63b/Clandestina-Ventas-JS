$(document).ready(function() {

baseDeDatos = JSON.parse(localStorage.getItem('productos')) || (productos); 
carritoOriginal = JSON.parse(localStorage.getItem('carritoOriginal'))  || (carrito);

    function MostrarArticulosCarrito() {
        var i=0;
        $("#carritoTotal").empty();
        $("#carritoFinal").empty();
        
        var subtotal;
        var total=0;

        // Quitamos los duplicados
        let carritoSinDuplicados = [...new Set(carritoOriginal)];    
        // Generamos los Nodos a partir de carrito pero antes chequeamos si el carrito está o no vacio
        if (carritoOriginal.length == 0) {
            $("#carritoFinal").append(` 
            <tr class="">        
                <td class="" colspan="6"><p class=" uppercase text-center">Carrito vacio</p></td>
                
            </tr>
            `);
            $("#seguirComprando").addClass("cart-btn");
            $("#btnPagar").addClass("d-none");
        } else {
        carritoSinDuplicados.forEach(function (item, indice) {
                i++;
                // Obtenemos el item que necesitamos de la variable base de datos
                let Art = baseDeDatos.filter(itemBaseDatos => itemBaseDatos['id'] == item);

                // Cuenta el número de veces que se repite el producto
                let numeroUnidadesItem = carritoOriginal.reduce(function (costototal, itemId) {
                    return itemId === item ? costototal += 1 : costototal;
                }, 0);
                subtotal = numeroUnidadesItem*Art[0]['precio'];
                total = total + subtotal;
                
                $("#carritoFinal").append(`
                <tr class="table-ligth">        
                    <td class="">
                        <a href="#"><img src="${Art[0]['imgmini']}" alt=""></a>
                    </td>
                    <td class=""><p class="mt-5">${Art[0]['nombre']}</p></td>
                    <td class=" "><p class="mt-5">$${Art[0]['precio']}<p></td>
                    <td class=""><p class="mt-5">${numeroUnidadesItem}</p></td>
                    <td class=""><p class="mt-5">$${subtotal}</p></td>
                    <td>
                        <a id="btnEliminar${item}" class="mt-5 icon-cart dropbtn" grupo="${item}"><img src="../img/iconos/trash.svg" alt="Mas" width="20" height="20"></a>
                    </td>
                </tr>
        `);
            $(`#btnEliminar${item}`).on('click', eliminarProducto);
        });
    // Muestra el total de la compra
        $("#carritoFinal").append(`
        <tr class="table-dark text-white">        
            <td class="" colspan="4"><p class="text-white fs-3 fw-bold uppercase text-end">Total de la compra</p></td>
            
            <td class=""><p class="text-white fs-4  uppercase">$${total}.00</p></td>
            <td>
                
            </td>
        </tr>
        `);
    }
    }
    //MÊTODO PARA ELIMINAR UN PRODUCTO DEL ARRAY DE PRODUCTOS
    function eliminarProducto() {
        
        let elim = this.getAttribute('grupo');
        n = true;   
        while (n) {
            n = false;
            len = carritoOriginal.length;
            for (var i = 0; i < len; i++) {    
                if ((carritoOriginal[i]) == elim) {
                    carritoOriginal.splice(i, 1);
                    n = true;
                } 
            } 
        }
        // // volvemos a renderizar el carrito
        MostrarArticulosCarrito();
        localStorage.setItem('carritoOriginal', JSON.stringify(carritoOriginal));       
    }

    //Luego de clickear en Pagar se borran los elementos del carrito
    function VaciarCarrito() {
        // Limpiamos los productos guardados
        carritoOriginal = [];
        localStorage.setItem('carritoOriginal', JSON.stringify(carritoOriginal));
    }
    MostrarArticulosCarrito();
    $("#btnPagar").on('click', VaciarCarrito);
});

