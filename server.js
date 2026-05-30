const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin:Nexus2026*@cluster0.kseg5xq.mongodb.net/usuariosDB?retryWrites=true&w=majority"
)
.then(() => console.log("Conectado a MongoDB"))
.catch((error) => console.log(error));

const usuarioRoutes = require("./routes/usuarioRoutes");

app.use("/api", usuarioRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});