function verificar() {

    var nome = document.getElementById('txtn').value
    var email = document.getElementById('txte').value
    var nomeCom = document.getElementById('txtf').value
    var qtd = parseInt(document.getElementById('txtq').value)
    var res = document.getElementById('res')
  
    var nomeCli = []
    var emailCli = []
    var nomeFood = []
    var qtdP = []
    var valor = 0
  
  
    if(nome.length == 0 || email.length == 0 || nomeCom.length == 0 || qtd.length == 0) {
        res.innerHTML = `Erro tente novamente`
      } else {
        nomeCli.push(nome)
        emailCli.push(email)
        nomeFood.push(nomeCom)
        qtdP.push(qtd)
        /*parte do sorvete*/
      } if(nomeFood == 'Coca-Cola') {
        valor = 16.99 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else if(nomeFood == 'Fanta') {
        valor = 16.99 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor}`
      } else if(nomeFood == 'Pepsi') {
        valor = 16.99 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else if(nomeFood == 'Guarana') {
        valor = 16.99 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      
    } else {
        res.innerHTML = `Não temos esse produto no momento. Tente novamente`
      }
    
     /*parte final*/

      /*parte do suco*/
    } if(nomeFood == 'Laranja') {
        valor = 57.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else if(nomeFood == 'Maracuja') {
        valor = 57.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor}`
      } else if(nomeFood == 'Limonada') {
        valor = 57.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else if(nomeFood == 'Limonada') {
        valor = 57.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
      } else if(nomeFood == 'Caldo de cana') {
        valor = 57.00 * qtdP
        res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
    } else {
        res.innerHTML = `Não temos esse produto no momento. Tente novamente`
    }
    
    /*parte final suco*/

    /*parte do doce*/
     if(nomeFood == 'Heinekein') {
    valor = 1.00 * qtdP
    res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
  } else if(nomeFood == 'Skol') {
    valor = 1.00 * qtdP
    res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor}`
  } else if(nomeFood == 'Whisky') {
    valor = 1.00 * qtdP
    res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
  } else if(nomeFood == 'Vinhos') {
    valor = 1.00 * qtdP
    res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
  } else if(nomeFood == 'leite em po') {
    valor = 1.00 * qtdP
    res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
 
    } else {
    res.innerHTML = `Não temos esse produto no momento. Tente novamente`
    }




/*parte final do doce*/


if(nomeFood == 'Chocolate') {
    valor = 1.00 * qtdP
    res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
  } else if(nomeFood == 'Morango') {
    valor = 1.00 * qtdP
    res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor}`
  } else if(nomeFood == 'Creme') {
    valor = 1.00 * qtdP
    res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
  } else if(nomeFood == 'Oreo') {
    valor = 1.00 * qtdP
    res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
  } else if(nomeFood == 'leite em po') {
    valor = 1.00 * qtdP
    res.innerHTML = `Nome do cliente: ${nomeCli} <br> Email: ${emailCli} <br> Pedido: ${nomeFood} <br> Quantidade: ${qtdP} <br> Valor do pedido: R$${valor},00`
 
    } else {
    res.innerHTML = `Não temos esse produto no momento. Tente novamente`
    }

    
    
  
  