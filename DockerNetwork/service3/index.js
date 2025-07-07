const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Service3!');
});



app.get("/health", (req, res) => {
    res.send("Service3 is up and running");  
  });
app.listen(3000, () => console.log('Service3 listening on port 3000'));
