const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/canciones', (req, res) => {
  const canciones = JSON.parse(fs.readFileSync('./repertorio.json', 'utf-8'))
  res.send(canciones);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});