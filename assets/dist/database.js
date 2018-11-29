let wines = [{
    descripcion: 'Es el vino mas famoso de California. Plantado en más del 10 por ciento de todos los viñedos de California, la uva Zinfandel es uno de los participantes mas importante en la industria del vino tinto de California , creando un vino tinto grande y maduro que viene con el mayor contenido de alcohol de cualquier vino tinto en el mercado (entre 14 y el 17 por ciento). Debido al calor del sol de California, los Zinfandels son conocidos por sus características frutales y grumosas.',
    nombre: "Zinfandel",
    imagen: "Vinotinto.png",
    fondo : "Fondovinotinto5.png",
    precio: 300.800,
    añejado: 12,
    tipo: "Vinotintos",
    carateristicas:{
    denso : 3 , liquido:8, aromatico: 7, dulce:2 ,alcohol:10, 
}
}, {
    descripcion: 'Es una de las variedades de uva de vino tinto más reconocidas del mundo . Se cultiva en casi todos los principales países productores de vino en un amplio espectro de climas, desde el valle de Okanagan en Canadá hasta el valle de Beqaa en el Líbano . Cabernet Sauvignon se hizo internacionalmente reconocido por su prominencia en los vinos de Burdeos, donde a menudo se combina con Merlot y Cabernet Franc .' ,
    nombre: "Cabernet Sauvignon",
    imagen: "Vinotinto.png",
    fondo : "Fondovinotinto4.png",
    precio: 109.800,
    añejado: 39,
    tipo: "Vinotintos",
    carateristicas:{
        denso : 2 , liquido:7, aromatico: 4, dulce:6 ,alcohol:9, 
    }
}, {
    descripcion: 'Es una variedad de uva morada utilizada en la elaboración de vino tinto . Las uvas tienden a tener un color oscuro oscuro y taninos robustos , y son conocidas como una de las seis uvas permitidas en la mezcla de vino rojo de Burdeos .',
    nombre: "Malbec",
    imagen: "Vinotinto.png",
    fondo : "Fondovinotinto3.png",
    precio: 90.480,
    añejado: 93,
    tipo: "Vinotintos",
    carateristicas:{
        denso : 2 , liquido:8, aromatico: 10, dulce:1 ,alcohol:8, 
    }
}, {
    descripcion: 'Es la segunda uva roja más popular en América ( después de Cabernet Sauvignon ). Conocida por ser suave, madura y elegante, la mayoría de los merlots son fáciles de beber y combinan muy bien con la comida. Esta es una variedad de uva accesible y a menudo se recomienda como el primer vino tinto que una persona nueva en el vino tinto debería beber.',
    nombre: "Merlot",
    imagen: "Vinotinto.png",
    fondo : "Fondovinotinto2.png",
    precio: 82.090,
    añejado: 4,
    tipo: "Vinotintos",
    carateristicas:{
        denso : 2 , liquido:7, aromatico: 6, dulce:3 ,alcohol:8, 
    }
}, {
    descripcion: 'Es una variedad de uva de piel verde utilizada en la producción de vino blanco . La variedad se originó en la región vinícola de Borgoña en el este de Francia.',
    nombre: "Chardonnay",
    imagen: "Blanco.png",
    fondo : "Fondoblanco1.png",
    precio: 49.000,
    añejado: 70,
    tipo: "Blanco",
    carateristicas:{
        denso : 1 , liquido:8, aromatico: 2, dulce:9 ,alcohol:5, 
    }
}, {
    descripcion: 'Es una variedad de uva blanca que se originó en la región del Rin . Riesling es una variedad de uva aromática que muestra aromas florales, casi perfumados, así como una alta acidez. Se utiliza para hacer vinos blancos secos, semiduros, dulces y espumosos ',
    nombre: "Riesling",
    imagen: "Espumoso.png",
    fondo : "Fondoespumoso1.png",
    precio: 60.300,
    añejado: 80,
    tipo: "Espumosos",
    carateristicas:{
        denso : 3 , liquido:7, aromatico: 4, dulce:4 ,alcohol:4, 
    }
}, {
    descripcion: 'Es una variedad de uva de vino aromática , utilizada en vinos blancos , y se desempeña mejor en climas más fríos.Gewürztraminer es una variedad con un color de piel rosado a rojo, lo que la convierte en una "uva de vino blanco" en lugar de las variedades de azul a negro denominadas comúnmente "uvas de vino tinto". La variedad tiene un alto contenido de azúcar natural y los vinos son blancos y generalmente secos , con un extravagante ramo de lichis .',
    nombre: "Gewürztraminer",
    imagen: "Espumoso.png",
    fondo : "Fondoespumoso2.png",
    precio: 32.800,
    añejado: 90,
    tipo: "Espumosos",
    carateristicas:{
        denso : 1 , liquido:6, aromatico: 3, dulce:3,alcohol:5, 
    }
}, {
    descripcion: 'Es una variedad de uva de vino tinto de la especie Vitis vinifera . El nombre también puede referirse a vinos creados principalmente a partir de uvas pinot noir. El nombre se deriva de las palabras francesas para pino y negro. ',
    nombre: "Pinot noir",
    imagen: "Especial.png",
    fondo :"Fondoespecial1.png" ,
    precio: 73.000,
    añejado: 100,
    tipo: "Dulcesyespeciales",
    carateristicas:{
        denso : 1 , liquido:8, aromatico: 3, dulce:7 ,alcohol:2, 
    }
}, {
    descripcion: 'Es una piel oscura variedad de uva cultivadas en todo el mundo y se utiliza principalmente para producir el vino tinto . En 1999, se descubrió que Syrah era la descendencia de dos uvas oscuras del sureste de Francia , Dureza y Mondeuse Blanche ',
    nombre: "Syrah",
    imagen: "Vinotinto.png",
    fondo : "Fondovinotinto1.png",
    precio: 122.400,
    añejado: 2,
    tipo: "Vinotintos",
    carateristicas:{
        denso : 8 , liquido:2, aromatico: 8, dulce:6 ,alcohol:8, 
    }
}, {
    descripcion: 'Es un vino con niveles significativos de dióxido de carbono , lo que lo hace efervescente. Comúnmente llamado champán , los países de la UE reservan legalmente ese término para productos producidos exclusivamente en la región francesa de Champagne .',
    nombre: "Sparkling wine",
    imagen: "Vinotinto.png",
    fondo : "Fondoespumoso3.png",
    precio: 23.500,
    añejado: 19,
    tipo: "Espumosos",
    carateristicas:{
        denso : 3 , liquido:8, aromatico: 2, dulce:8 ,alcohol:5, 
    }
}]
