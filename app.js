const express = require('express');
const consolidate = require('consolidate');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();
const url = 'mongodb://localhost:27017';
const dbName = 'Vinos';

//<------------------------------------------------------------------------------------------------------------------------------------------------------------------->

app.engine('hbs', consolidate.handlebars);
app.set('views', 'views/');
app.set('view engine', 'hbs');
app.use("/static", express.static("directorios"))

//<------------------------------------------------------------------------------------------------------------------------------------------------------------------->

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.json());

const client = new MongoClient(url);
var db = null;

//<------------------------------------------------------------------------------------------------------------------------------------------------------------------->


client.connect(function (err) {
    if (err) {
        console.error(err);
        return;
    }
    db = client.db(dbName);
});


//<------------------------------------------------------------------------------------------------------------------------------------------------------------------->


app.get('/', (req, res) => {
    const collection = db.collection('productos').find({});

    if (req.query.tipo) {
        collection.filter({
            //tipo: "Blanco"
            tipo: req.query.tipo
        })
    }

    collection.toArray(function (err, documentos) {

        if (err) {
            console.error(err);
            res.send(err);
            return;
        }


        var contexto = {
            productos: documentos,

        };
        res.render("index", contexto);

    });
})


//Productos
app.get('/productos/:id/', (req, res)=> {

    db.collection('productos').find (
        {        
            id: parseInt(req.params.id)
        }
    ).toArray((err, result) => {
        console.log(result);
        res.render('productos', {
            producto: result
        });
    });
}
);


//Carrito De Compra

app.get('/carroCompra', (req, res) => {
    const collection = db.collection('productos');
    collection.find({}).toArray(function (err, documentos) {

        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        var contexto = {

            titulo: "el titulo edit",
            productos: documentos,

        };
        res.render("carroCompra", contexto);
    });
})

//otroGet

app.get('/agregarCarro', (req,res)=>{
    var nombre = req.query.nombre;
    console.log(nombre);
    const collection = db.collection('productos');
    collection.find({}).toArray(function (err, documentos) {
        var producto = documentos.find(function(element){
            return element.nombre == nombre;
        });
        res.json(producto);
    });
})


//<------------------------------------------------------------------------------------------------------------------------------------------------------------------->

/*
app.get('/', (req, res) => {
    res.render('index', {
        productos: misDatos
    });
})


app.get('/productos', (req, res) => {
        res.render('productos', {
            productos: misDatos
    })
})

app.get('/carroCompra', (req, res) => {
    res.render('carroCompra', {
    catalogo: misDatos
})
})
*/
//<------------------------------------------------------------------------------------------------------------------------------------------------------------------->


app.get('/agregarDocumento', function (request, response) {
    const collection = db.collection('productos');
    collection.insert({
        nombre: "archuleta",
        tipo: "espumoso",
    }, function (err, resutl) {
        if (err) {
            console.error(err);
            response.send(err);
            return;
        }
        response.send('documento agregado');

    });
});

//<------------------------------------------------------------------------------------------------------------------------------------------------------------------->


app.get('/obtenerObjectID', (req, res)=> {
    var arreglo = req.query.ids.split(',');

    arreglo = arreglo.map (function(id){
        return new ObjectID(id);
    }) ;
    var plays = db.collection('plays').find (
        {
            _id: {
                $in: arreglo
            }
        }
    ).toArray((err, result) => {
        res.send(result);
    });
})

//

//<------------------------------------------------------------------------------------------------------------------------------------------------------------------->

app.listen(1234, () => {
    console.log("Escuchando en el puerto 1234")
})


//<------------------------------------------------------------------------------------------------------------------------------------------------------------------->

var misDatos = [{
    id: 1,
    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nombre: "venome",
    imagen: "wp2.jpg",
    precio: 8000,
    añejado: 12,
    tipo: "Blanco",
}, {
    id: 2,
    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nombre: "vinoduchete",
    imagen: "vino1.png",
    precio: 7300,
    añejado: 39,
    tipo: "Blanco",
}, {
    id: 3,
    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nombre: "vinoduchetete",
    imagen: "vino2.png",
    precio: 80000,
    añejado: 93,
    tipo: "Blanco",
}, {
    id: 4,
    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nombre: "vinoducheteteo",
    imagen: "vino3.png",
    precio: 80,
    añejado: 4,
    tipo: "Blanco",
}, {
    id: 5,
    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nombre: "vinoducheteteoe",
    imagen: "vino4.png",
    precio: 19000,
    añejado: 70,
    tipo: "Blanco",
}, {
    id: 6,
    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nombre: "vinoducheteteoei",
    imagen: "vino5.png",
    precio: 20000,
    añejado: 80,
    tipo: "Blanco",
}, {
    id: 7,
    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nombre: "vinoducheteteoeio",
    imagen: "vino6.png",
    precio: 97000,
    añejado: 90,
    tipo: "Blanco",
}, {
    id: 8,
    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nombre: "vinoducheteteoeioi",
    imagen: "vino7.png",
    precio: 800000,
    añejado: 100,
    tipo: "Blanco",
}, {
    id: 9,
    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nombre: "vinoducheteteoeioio",
    imagen: "vino8.png",
    precio: 800,
    añejado: 2,
    tipo: "Blanco",
}, {
    id: 10,
    data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nombre: "vinoducheteoteioie",
    imagen: "vino9.png",
    precio: 9000,
    añejado: 19,
    tipo: "Blanco",
}]