const productos = [
    {
        id: 0,
        nombre: 'Hamburguesa AMERICANA',
        descripcion:'La perfecta combinacion...',
        precio: 420,
        imagen: 'img/Hamb-Americana.png',
        imgmini: '../img/imgcarrito/Hamb-Americana-mini.png',
        grupo : 'hamburguesas',
        stock: 10
    },
    {
        id: 1,
        nombre: 'Hamburguesa SERRANA',
        descripcion:'Tomate, rucula, jamón crudo y queso',
        precio: 420,
        imagen: 'img/Hamb.jpg',
        imgmini: '../img/imgcarrito/Hamb-picantona-mini.jpg',
        grupo : 'hamburguesas',
        stock: 10
    },
    {
        id: 2,
        nombre: 'Hamburguesa PICANTONA',
        descripcion:'Tremenda! Jamón, cheddar, tomate, huevo y por supuesto salsa picante',
        precio: 420,
        imagen: 'img/hamb-picante.jpg',
        imgmini: '../img/imgcarrito/hamb-picante-mini.jpg',
        grupo : 'hamburguesas',
        stock: 10
    },
    {
        id: 3,
        nombre: 'Hamburguesa VEGGIE',
        descripcion:'Si, Veggie, lechuga, tomate y berenjena',
        precio: 360,
        imagen: 'img/Hamburguesa-veggie.jpg',
        imgmini: '../img/imgcarrito/Hamburguesa-veggie-mini.jpg',
        grupo : 'hamburguesas',
        stock: 10
    },
    {
        id: 4,
        nombre: 'Pizza CLANDESTINA',
        descripcion:'Cantimpalo, muzzarella y salsa picante. Unica en Mundo!',
        precio: 450,
        imagen: 'img/Pizza clandestina.jpg',
        imgmini:'../img/imgcarrito/Pizza clandestina-mini.jpg',
        grupo : 'pizzas',
        stock: 5
    },
    {
        id: 5,
        nombre: 'Pizza ESPECIAL',
        descripcion:'Jamón, muzarella, morrón y aceitunas.',
        precio: 450,
        imagen: 'img/Pizza especial.png',
        imgmini:'../img/imgcarrito/Pizza especial-mini.png',
        grupo : 'pizzas',
        stock: 5
    },
    {
        id: 6,
        nombre: 'Pizza MUZARELLA',
        descripcion:'Muzarella y aceitunas, clasisa, re contra, pero buenisima.',
        precio: 380,
        imagen: 'img/Pizza muzza.jpg',
        imgmini:'../img/imgcarrito/Pizza muzza-mini.jpg',
        grupo : 'pizzas',
        stock: 5
    },
    {
        id: 7,
        nombre: 'Rabas',
        descripcion:'Las mejores de Mar del Plata!',
        precio: 500,
        imagen: 'img/rabas.jpg',
        imgmini:'../img/imgcarrito/rabas-mini.jpg',
        grupo : 'tapeo',
        stock: 5
    },
    {
        id: 8,
        nombre: 'Picada',
        descripcion:'La picada mas rica del mundo',
        precio: 1050,
        imagen: 'img/picada.jpg',
        imgmini:'../img/imgcarrito/picada-mini.jpg',
        grupo : 'tapeo',
        stock: 8
    },
    {
        id: 9,
        nombre: 'Papas',
        descripcion:'Las papas mas ricas',
        precio: 250,
        imagen: 'img/Papas.jpg',
        imgmini:'../img/imgcarrito/Papas-mini.jpg',
        grupo : 'tapeo',
        stock: 7
    },
    {
        id: 10,
        nombre: 'Tortilla',
        descripcion:'Como la de la abuela!!!',
        precio: 300,
        imagen: 'img/Tortilla.jpg',
        imgmini:'../img/imgcarrito/tortilla-mini.jpg',
        grupo : 'tapeo',
        stock: 7
    },
    {
        id: 11,
        nombre: 'Ensalada Cesar',
        descripcion:'Pollo, leche, parmesano, salsa Cesar y Crouton de pan.',
        precio: 430,
        imagen: 'img/ensalada.jpg',
        imgmini:'../img/imgcarrito/ensalada-mini.jpg',
        grupo : 'ensalada',
        stock: 12
    },
    {
        id: 12,
        nombre: 'Ensalada CLANDESTINA:',
        descripcion:'Rucula, bacon, parmesano, nueces, croutonde, pan y queso crema a base de aceto.',
        precio: 385,
        imagen: 'img/ensalada.jpg',
        imgmini:'../img/imgcarrito/ensalada-mini.jpg',
        grupo : 'ensalada',
        stock: 12
    },
    {
        id: 13,
        nombre: 'Ensalada',
        descripcion:'Ensalada Cesar...',
        precio: 220,
        imagen: 'img/ensalada.jpg',
        imgmini:'../img/imgcarrito/ensalada-mini.jpg',
        grupo : 'ensalada',
        stock: 12
    },
    {
        id: 14,
        nombre: 'Sandwich de pollo',
        descripcion:'Pollo, lechuga, tomate, jamón, queso crema',
        precio: 430,
        imagen: 'img/sand pollo.jpg',
        imgmini:'../img/imgcarrito/sand pollo-mini.jpg',
        grupo : 'sandwich',
        stock: 12
    },
    {
        id: 15,
        nombre: 'Sandwich de ternera',
        descripcion:'Carne, lechuga, tomate, jamón, queso y salsa de verdeo',
        precio: 450,
        imagen: 'img/sandw tern.png',
        imgmini:'../img/imgcarrito/sandw tern-mini.png',
        grupo : 'sandwich',
        stock: 12
    },
    {
        id: 16,
        nombre: 'Sandwich de bondiola',
        descripcion:'Bondiola de cerdo, lechuga, tomate, jamón, queso, salsa tomate y albahaca',
        precio: 430,
        imagen: 'img/Sand-bondiola.png',
        imgmini:'../img/imgcarrito/Sand-bondiola-mini.png',
        grupo : 'sandwich',
        stock: 12
    },
    {
        id: 17,
        nombre: 'Golden Ale de Cachalote',
        descripcion:'Cerveza dorada ligera, de carácter maltoso dulce con poca presencia de lúpulo y notas frutales',
        precio: 200,
        imagen: 'img/cerveza-golden.png',
        imgmini:'../img/imgcarrito/cerveza-golden-mini.png',
        grupo : 'bebida',
        stock: 12
    },
    {
        id: 18,
        nombre: 'Sesion Ipa de Heller',
        descripcion:'Alta tomabilidad. Suave amargor y contenido alcoholico moderado.',
        precio: 200,
        imagen: 'img/cerveza-sesion.jpg',
        imgmini:'../img/imgcarrito/cerveza-sesion-mini.jpg',
        grupo : 'bebida',
        stock: 12
    },
    {
        id: 19,
        nombre: 'IPA de Icarus',
        descripcion:'Cerveza de alta fermentación. Color anaranjado, un mayor grado de amargor, aromática.',
        precio: 200,
        imagen: 'img/cerveza-IPA.jpg',
        imgmini:'../img/imgcarrito/cerveza-IPA-mini.jpg',
        grupo : 'bebida',
        stock: 12
    },
    {
        id: 20,
        nombre: 'Belgian Tripel de Heller',
        descripcion:'Parecida a su hermana Dubbel. Tiene un final fresco y áspero, y de contenido alcohólico muy alto.',
        precio: 200,
        imagen: 'img/cerveza-belgian.jpg',
        imgmini:'../img/imgcarrito/cerveza-belgian-mini.jpg',
        grupo : 'bebida',
        stock: 12
    },
    {
        id: 21,
        nombre: 'Milanesa',
        descripcion:'Acompañadas de una porción de papas fritas y gaseosa',
        precio: 405,
        imagen: 'img/milanesa.jpeg',
        imgmini:'../img/imgcarrito/milanesa-mini.jpeg',
        grupo : 'infantil',
        stock: 12
    },
    {
        id: 22,
        nombre: 'Nuggets',
        descripcion:'De pollo, papas fritas y gaseosa',
        precio: 405,
        imagen: 'img/nuggets.jpg',
        imgmini:'../img/imgcarrito/nuggets-mini.jpg',
        grupo : 'infantil',
        stock: 12
    }
];

// MENU INFANTIL
// MILANESAS CON PAPAS FRITAS Y GASEOSA: $ 405
// NUGGETS: DE POLLO CON PAPAS Y GASEOSA $ 405


// BELGIAN TRIPEL-HELLER $ 200
// HONEY -CACHALOTE $ 200
// STOUT-PAMPEANA $ 200
// MAC ALLIESTER - ICARUS $ 200
// PORTER-ICARUS $ 200
// BROWN ALE -PAMPEANA $ 200
// DORADA - PAMPEANA $ 200

const Iconos = [
    {
        id: 'icono1',
        nombre: 'Hamburguesa',
        imagen: 'img/iconos/hamburger.svg',
        grupo: 'hamburguesas'
    },
    {
        id: 'icono2',
        nombre: 'Pizzas',
        imagen: 'img/iconos/pizza.svg',
        grupo: 'pizzas'
    },
    {
        id: 'icono3',
        nombre: 'Sandwiches',
        imagen: 'img/iconos/sandwich.svg',
        grupo: 'sandwich'
    },
    {
        id: 'icono4',
        nombre: 'Tapeo y picadas',
        imagen: 'img/iconos/chicken.svg',
        grupo: 'tapeo'
    },
    {
        id: 'icono5',
        nombre: 'Ensaladas',
        imagen: 'img/iconos/salad.svg',
        grupo: 'ensalada'
    },
    {
        id: 'icono6',
        nombre: 'Menú infantil',
        imagen: 'img/iconos/fried-potatoes.svg',
        grupo: 'infantil'
    },
    {
        id: 'icono7',
        nombre: 'Bebidas',
        imagen: 'img/iconos/beer.svg',
        grupo: 'bebida'
    }
];


