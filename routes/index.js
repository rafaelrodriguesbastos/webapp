var express = require('express');
var db = require('../util/db');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mensagem',function(req, res){
  res.render('mensagem', {mensagem: "acesso a outra página"});
});

router.get('/mensagem2',function(req, res){
  res.status(200).send("Rota útil para debug");
});

router.get('/listar', function(req, res){
  db.query('select * from pessoa',[],function (erro, resultado){
    if(erro){
      res.status(200).send(erro);
    }
    res.render('listar', {lista: resultado});
  });
});

module.exports = router;
//https://www.youtube.com/watch?v=rg7l1WDJTHE&t=21s