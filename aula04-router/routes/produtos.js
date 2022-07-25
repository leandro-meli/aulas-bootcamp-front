const express = require('express')
const products = require('../produtos')

const routes = express.Router()

const produtos = require('../produtos')

routes.get('/', (_req, res) => {
  return res.status(200).send(produtos)
})

routes.get('/:id', (req, res) => {
  const id = Number(req.params.id);

  const produto = produtos.find((elem) => elem.id === id)

  if (!produto) res.status(404).json({ message: 'Product not found' })

  return res.status(200).json(produtos);
})

routes.post('/', (req, res) => {
  const { name, price, quantity, colors } = req.body;

  if (!name || !price || !quantity || !colors ) {
    return res.status(400).json({ message: 'The product must have name, price, quantity and colors.' })
  }

  const newProduct = [...products, name, price, quantity, colors]

  return res.status(201).json(newProduct)
})

module.exports = routes;