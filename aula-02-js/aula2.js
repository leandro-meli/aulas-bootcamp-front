function calcularPreco(nome, preco) {
  let custo = 700.00;

  if (preco < 4001) {
    custo = 450.00;
  }

  if (preco < 2001) {
    custo = 300.00;
  }

  console.log(`O produto ${nome} custa R$${preco.toFixed(2)}. Seu custo de envio é R$${custo.toFixed(2)}. Portanto, o preço final é R$${(preco + custo).toFixed(2)}`);
}

calcularPreco('Macbook', 2500)
calcularPreco('Celular', 500)
calcularPreco('Playstation', 4500)