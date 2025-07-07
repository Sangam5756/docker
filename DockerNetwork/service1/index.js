const express = require('express');
const axios = require('axios');
const app = express();

app.get("/health", (req, res) => {
  res.send("Service1 is up and running");  
});

app.get('/', async (req, res) => {
  try {
    const s2 = await axios.get('http://service2:3000/');
    const s3 = await axios.get('http://service3:3000/');
    res.send(`Responses: [service2] ${s2.data} | [service3] ${s3.data}`);
  } catch (error) {
    res.send('Error: ' + error.message);
  }
});

app.listen(3000, () => console.log('Service1 listening on port 3000'));
