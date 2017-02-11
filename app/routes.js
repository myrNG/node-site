// Dépendances
var express = require('express');
var path = require('path');
var router = express.Router();

module.exports = router;

// route de la page d'accueuil
router.get('/', function(req, res){
    res.render('pages/index');
});

//route de la page 'about'
router.get('/about', function(req, res){
    res.render('pages/about');
});
//route de la page de contact
router.get('/contact', function(req, res){
    res.render('pages/contact');
});
router.post('/contact', function(req, res){
    // TODO
});

