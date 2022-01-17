//ANIMACIONES    

// Animacion Cartel ///

  // concatenacion de animaciones antes de borrar
  $(".cartel").animate({"opacity": "0.8", }, 500)
    .delay(200)
    .fadeOut(500)
    .fadeIn(500)
    .delay(200)
    .fadeOut(500)
    .fadeIn(500, () => {console.log("si");
    $(".cartel").animate({"opacity": "1", }, 500)
    });

// Animar Carrito //
      $('.add-to-cart').on('click',function(){ 
     
         $('.animarMoto').animate(
         { deg: 360 },
       {
       duration: 200,
             step: function(now) {
               $(this).css({ transform: 'rotate(' + now + 'deg)', transform: 'scale(1)'});
            } 
           });
        $('.animarMoto').animate(
        { deg: 0 },
       {
       duration: 300,
             step: function(now) {
               $(this).css({ transform: 'rotate(' + now + 'deg)' });
            } 
           }
         );
         $("#carrito").removeAttr("style");
       });
      




      
//////////////////////