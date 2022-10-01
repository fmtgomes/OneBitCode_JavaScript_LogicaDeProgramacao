let stackOfCards = ["8 de copas", "3 de espadas", "Rei de paus", "Valete de copas", "Rainha de ouros", "10 de paus"]
let addCard = ""
let pullCard = ""
let chooseOption = 0


do {
  let listOfCards = ""
  let numberOfCards = 0
  for (let i = 0; i < stackOfCards.length; i++) {
    numberOfCards
    listOfCards += stackOfCards[i] + "\n";
  }
  chooseOption = parseInt(prompt("Pilha de cartas:" +
  "\n" + listOfCards +
  "\nEscolha uma opção:" +
  "\n1 - Adicionar uma carta" +
  "\n2 - Puxar uma carta" +
  "\n3 - Sair"))
  switch (chooseOption) {
    case 1:
      addCard = prompt("Qual carta deseja adicionar?")
      stackOfCards.unshift(addCard)
      alert("Carta " + addCard + " adicionada na pilha")
      break;

    case 2:
      pullCard = stackOfCards.shift()
      if (pullCard === undefined) {
        alert("Não há cartas para serem puxadas")
      } else {
        alert("A carta puxada foi: " + pullCard)
      }
      break;

    case 3:
      alert("O programa está sendo encerrado, obrigado!")
      break;

    default:
      alert("Por favor, escolha uma das opções!")
      break;
  }
} while (chooseOption !== 3);