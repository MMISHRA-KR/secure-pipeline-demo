const express = require('express');
const app = express();

app.get('/user/:id', (req, res) => {
  // Insecure: No input validation
  const userId = req.params.id;
  res.send(`User ID is ${userId}`);
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
