const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Service2!');
});


app.get("/health", (req, res) => {
    res.send("Service2 is up and running");  
  });

app.listen(3000, () => console.log('Service2 listening on port 3000'));
