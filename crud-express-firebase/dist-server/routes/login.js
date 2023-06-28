"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _Login = _interopRequireDefault(require("../services/Login.Service"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.post('/login', function (req, res) {
  var _req$body = req.body,
    email = _req$body.email,
    senha = _req$body.senha;

  // Verifique o login chamando a função verificarLogin do loginService
  var loginValido = (0, _Login["default"])(email, senha);
  if (loginValido) {
    res.json({
      res: true
    });
  } else {
    res.status(401).json({
      res: false
    });
  }
});
var _default = router;
exports["default"] = _default;