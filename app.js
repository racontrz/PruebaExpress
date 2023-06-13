const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/canciones', (req, res) => {
  const canciones = JSON.parse(fs.readFileSync('./repertorio.json', 'utf-8'))
  res.send(canciones);
});

app.post('/canciones', (req, res) => {
  const cancion = req.body;
  const canciones = JSON.parse(fs.readFileSync('repertorio.json' , 'utf-8'));
  canciones.push(cancion);
  fs.writeFileSync('repertorio.json', JSON.stringify(canciones));
  res.send(canciones);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 