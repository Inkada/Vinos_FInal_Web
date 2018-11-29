const MongoClient = require('mongodb').MongoClient
ObjectID = require('mongodb').ObjectID,
    express = require('express'),
    engines = require('consolidate');

var app = express(),
    db;

app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');
app.use(express.static('assets'));


var PORT = process.env.PORT || 5000;

// Conectarse a Base de Datos
MongoClient.connect("mongodb+srv://miprimercluster-zfvgq.mongodb.net/productos", {
        auth: {
            user: "DanielRojas",
            password: "contraseñabasica"

        }
    },
    function (err, client) {
        if (err) throw err;

        db = client.db("productos");

        //Iniciar el servidor
        app.listen(PORT);

    }
);

app.get('/', (req, res) => {
    const collection = db.collection('vinos').find({});

    /*
    if (req.query.tipo) {
        collection.filter({
            //tipo: "Blanco"
            tipo: req.query.tipo
        })
    }*/

    collection.toArray(function (err, documentos) {

        if (err) {
            console.error(err);
            res.send(err);
            return;
        }


        var contexto = {
            productos: documentos,

        };
        res.render("Homepage", contexto);

    });
})

app.listen(1234, () => {
    console.log("Escuchando en el puerto 1234")
})