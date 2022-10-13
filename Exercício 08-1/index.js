let imoveis = []
let opcaoMenu = 0
let confirmacao = ""

do {
  opcaoMenu = parseInt(prompt(
    "Olá, abaixo temos a quantidade de imóveis e também opções de cadastrar novos imóveis ou listar os imóveis disponíveis" +
    "\nQuantidade de imóveis disponíveis: " + imoveis.length +
    "\n\nSelecione uma das opções abaixo: " +
    "\n1 - Cadastrar um imóvel" +
    "\n2 - Listar imóveis disponíveis" +
    "\n3 - Sair"
  ))

  switch (opcaoMenu) {
    case 1:
      const imovel = {}
      imovel.nome = prompt("Por favor, digite o nome do proprietário: ")
      imovel.quartos = parseInt(prompt("Por favor, digite a quantidade de quartos: "))
      imovel.banheiros = parseInt(prompt("Por favor, digite a quantidade de banheiros: "))
      imovel.garagem = prompt("Possui garagem? Sim/Não")
      console.log(imovel.garagem)
      confirmacao = confirm("Confirma que todas as informações estão corretas? Pressione OK para confirmar!")
      if (imovel.nome === "") imovel.nome = "Não informado, favor contatar a imobiliária"
      if (isNaN(imovel.quartos)) imovel.quartos = 0
      if (isNaN(imovel.banheiros)) imovel.banheiros = 0
      console.log(imovel.garagem)
      if (imovel.garagem === "") imovel.garagem = "Não informado, favor contatar o proprietário"
      if (confirmacao) {
        imoveis.push(imovel)
        alert("Imóvel adicionado com sucesso!")
      } else {
        alert("Voltando ao menu anterior!")
      }
      break;

    case 2:
      if (imoveis.length === 0) {
        alert("Nenhum imóvei cadastrado, voltando ao menu anterior!")
      } else {
        let listaImoveis = ""
        for (let i = 0; i < imoveis.length; i++) {
          listaImoveis += ("Imóvel: " + [i + 1] +
          "\nProprietário: " + imoveis[i].nome +
          "\nQuartos: " + imoveis[i].quartos +
          "\nBanheiros: " + imoveis[i].banheiros +
          "\nGaragem: " + imoveis[i].garagem + "\n\n")
        }
        alert(listaImoveis)
      }
      break;
      
    case 3:
      alert("O programa está sendo encerrado, obrigado!")
      break;
  
    default:
      alert("Por favor, escolha uma das opções!")
      break;
  }
} while (opcaoMenu !== 3);