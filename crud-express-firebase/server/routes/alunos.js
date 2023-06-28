import express from "express"

var router = express.Router();

import AlunoServices from "../services/aluno.services"

/* GET users listing. */
router.get('/listar', function(req, res, next) {
    AlunoServices.list(req,res)
    }
);
router.get('/listarAlunoAprovado', function(req, res, next) {
    AlunoServices.list(req,res)
    }
);
router.post('/cadastrar', function(req, res, next) {
    AlunoServices.register(req,res)
    }
);
router.get('/recuperar/:id', function(req, res, next) {
    AlunoServices.retrieve(req,res)
    }
);
router.put('/atualizar/:id', function(req, res, next) {
    AlunoServices.update(req,res)
    }
);
router.delete('/remover/:id', function(req, res, next) {
    AlunoServices.delete(req,res)
    }
);

export default router


