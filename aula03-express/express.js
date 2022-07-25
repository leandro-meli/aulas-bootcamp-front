const express = require('express')

const app = express()

let products = [];

app.use(express.json())

app.post('/', (req, res) => {
  const newProducts = req.body;
  try {
    // console.log(newProducts)
    products = [...products, ...newProducts]
    return res.status(201).json(products)
  } catch (error) {
    console.error(error.message)
  }
})

app.get('/', (req, res) => {
  return res.status(200).json(products)
})

app.put('/:id', (req, res) => {
  const { id } = req.params;
  // const { name, price, quantity, colors } = req.body;
  try {
    products = products.map((elem, i) => {
      if (elem.id === Number(id)) {
        return products.splice(i, 1, req.body)
      }
      return elem;
    })

    return res.status(200).json(products)
  } catch (error) {
    console.error(error.message) 
  }
})

app.delete('/:id', (req, res) => {
  const { id } = req.params;

  const product = products.find((product) => product.id === Number(id))
  
  if (!product) {
    return res.status(404).json({ "message": `Produto de id: ${id} não encontrado` })
  }

  products = products.filter((elem) => elem.id !== Number(id))
  res.status(204).json(products)
})

app.listen(3123, () => console.log('Escutando na porta 3123'))