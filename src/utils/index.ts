export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getPriceTotal = (items: Prato[]) => {
  return items.reduce((precoProduto, somaPrecos) => {
    if (somaPrecos.preco) {
      return (precoProduto += somaPrecos.preco)
    }
    return 0
  }, 0)
}
