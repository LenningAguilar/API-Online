const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hola, esta es una API de prueba en Render.' });
});

app.post('/upload', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ error: 'No se encontró ningún archivo.' });
  }

  const file = req.files.file;
  file.mv(file.name);

  res.json({ message: 'Archivo subido correctamente.' });
});

app.listen(5000, () => {
  console.log('Servidor escuchando en el puerto 5000');
});
