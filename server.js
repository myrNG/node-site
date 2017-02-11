// nos dépendances
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 8080;

// utilisation de ejs et ejs-layouts

app.set('view engine', 'ejs');
app.use(expressLayouts);

// mise en place des routes
var router = require('./app/routes');
app.use('/', router);



// chemin des fichiers statiques (img, css)
app.use(express.static(__dirname + '/public'));


// démarrage du serveur
app.listen(port, function(){
    console.log('application démarée!');
});

