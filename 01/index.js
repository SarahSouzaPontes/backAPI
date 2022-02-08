//Calculadora
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;
    const soma = Number(num1) + Number(num2)
    return res.send(`${soma}`)
})
app.listen(3000)


