const express = require("express");
const router = express.Router();
const Usuario = require("../models/Usuario");

// Registro
router.post("/registro", async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);

    await nuevoUsuario.save();

    res.status(201).json({
      mensaje: "Usuario registrado correctamente"
    });

  } catch (error) {
    res.status(400).json({
      mensaje: "Error al registrar usuario"
    });
  }
});

// Inicio de sesión
router.post("/login", async (req, res) => {

  const { usuario, password } = req.body;

  const usuarioEncontrado = await Usuario.findOne({
    usuario,
    password
  });

  if (usuarioEncontrado) {

    res.json({
      mensaje: "Autenticación satisfactoria"
    });

  } else {

    res.status(401).json({
      mensaje: "Error en la autenticación"
    });

  }
});

module.exports = router;