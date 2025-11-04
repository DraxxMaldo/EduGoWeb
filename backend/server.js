const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000; // Puerto donde correrá el backend

// Usar CORS para permitir peticiones
app.use(cors());

// Una ruta de prueba
app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: '¡El backend de EduGo está funcionando!' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
