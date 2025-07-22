const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

let data = require('./data.json');

app.get('/items', (req, res) => {
  res.json(data);
});

app.post('/items', (req, res) => {
  const newItem = req.body;
  newItem.id = Date.now();
  data.push(newItem);
  fs.writeFileSync('./data.json', JSON.stringify(data));
  res.json({ message: 'Item added', item: newItem });
});

app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;
  data = data.map(item => item.id === id ? { ...item, ...updatedItem } : item);
  fs.writeFileSync('./data.json', JSON.stringify(data));
  res.json({ message: 'Item updated' });
});

app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  data = data.filter(item => item.id !== id);
  fs.writeFileSync('./data.json', JSON.stringify(data));
  res.json({ message: 'Item deleted' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
