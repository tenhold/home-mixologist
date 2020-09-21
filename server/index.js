const express = require('express');

const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Does this Work?');
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}`)
})