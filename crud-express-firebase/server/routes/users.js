//var express = require('express');
//var router = express.Router();

import express from "express"
import LoginService from "../services/Login.Service"
var router = express.Router()


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource again and again');
});

router.post('/autenticacao', function(req, res, next) {
  LoginService.autenticacao(req,res)
});

//module.exports = router;

export default router


