const express = require("express");
const router = express.Router();
const Usuario = require("../models/Usuario");

// Servicio para registrar un usuario
router.post("/registro", async (req, res) => {
  try {

    // Se crea un nuevo usuario con los datos enviados
    const nuevoUsuario = new Usuario(req.body);

    // Se guarda la información en MongoDB
    await nuevoUsuario.save();

    res.status(201).json({
      mensaje: "Usuario registrado correctamente"
    });

  } catch (error) {

    // Si ocurre algún error durante el registro
    res.status(400).json({
      mensaje: "Error al registrar usuario"
    });
  }
});

// Servicio para iniciar sesión
router.post("/login", async (req, res) => {

  // Se obtienen los datos enviados por el usuario
  const { usuario, password } = req.body;

  // Se busca un usuario que coincida con las credenciales
  const usuarioEncontrado = await Usuario.findOne({
    usuario,
    password
  });

  // Si las credenciales son correctas
  if (usuarioEncontrado) {

    res.json({
      mensaje: "Autenticación satisfactoria"
    });

  } else {

    // Si las credenciales no coinciden
    res.status(401).json({
      mensaje: "Error en la autenticación"
    });

  }
});

module.exports = router;