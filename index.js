require('dotenv').config()
const express = require('express');
const app = express();

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/test', (req, res) => {
    res.send('Hello World!');
})

app.get('/login', (req, res) => {
    res.send("<h1>Hello World!</h1>");  
})
