const express = require('express');


const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.json({message:'Hello World!'});
    });
app.get('/health', (req, res) => {
    res.json({message:'I am Well!'});
    });


    

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});