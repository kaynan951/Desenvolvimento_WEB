import express from 'express';
import verificarLogin from '../services/Login.Service';

var router = express.Router();

router.post('/login', (req, res) => {
  const { email, senha } = req.body;

  // Verifique o login chamando a função verificarLogin do loginService
  const loginValido = verificarLogin(email, senha);

  if (loginValido) {
    res.json({ res: true });
  } else {
    res.status(401).json({ res: false });
  }
});

export default router;