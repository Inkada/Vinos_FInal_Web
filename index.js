const MongoClient = require('mongodb').MongoClient
    ObjectID = require('mongodb').ObjectID,
    express = require('express'),
    engines = require('consolidate');

var app = express(),
    db;

app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

var PORT = process.env.PORT || 5000;


// Conectarse a Base de Datos
MongoClient.connect("mongodb+srv://miprimercluster-zfvgq.mongodb.net/productos",
{
    auth: { user: "DanielRojas",
            password: "contraseñabasica"

}},
function(err,client){
if(err)throw err;

db = client.db("productos");
  
//Iniciar el servidor
app.listen(PORT);

}
);


app.get('/', (req, res) => {

    var prod = db.collection('vinos')
        .find();
    
    if(req.query.marca)
        prod.filter({ marca: req.query.marca });

    if(req.query.modelo)
        prod.filter({ modelo: req.query.modelo });

    prod.toArray((err, result) => {
            console.log('hola servidor')
            res.render('index', {
                vinos: result
            });
        });
});

app.get('/checkout', (req, res) => {
    res.render('checkout');
});


app.get('/producto/:id', (req, res) => {
    db.collection('vinos').find({ modelo: req.params.id }).toArray((err, result) => res.send(result))
});


app.get('/vinosPorIds', (req, res) => {
    console.log(req.query.ids);
    var arreglo = req.query.ids.split(',');
    arreglo = arreglo.map(function(id) {
        return new ObjectID(id);
    });
    var prod = db.collection('vinos')
        .find({ _id: { $in: arreglo } })
        .toArray((err, result) => {
            res.send(result);
        });
});

//
