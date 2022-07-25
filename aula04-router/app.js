const express = require('express');

const app = express()

const rotaProdutos = require('./routes/produtos.js')

app.use(express.json())

app.use('/produtos', rotaProdutos)

app.listen(3123, () => console.log('Escutando na porta 3123'))