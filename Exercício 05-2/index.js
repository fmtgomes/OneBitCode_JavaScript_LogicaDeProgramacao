const userName = prompt("Olá, digite seu nome completo: ")
let currentBalance = parseFloat(prompt("Digite o seu saldo atual: "))
let optionBank = 0
let deposit = 0
let withdraw = 0


do {
  optionBank = parseInt(prompt(userName + ", seu saldo atual é: " + currentBalance + " reais" +
  "\nSelecione uma das opções abaixo: "+
  "\n1 - Depósito"+
  "\n2 - Saque"+
  "\n3 - Sair"))

  switch (optionBank) {
    case 1:
      deposit = parseFloat(prompt("Você selecionou a opção depósito, por favor insira o valor que deseja depositar: "))
      currentBalance += deposit
      break;
    case 2:
      withdraw = parseFloat(prompt("Você selecionou a opção saque, por favor insira o valor que deseja sacar: "))
      currentBalance -= withdraw
      if (currentBalance < 0) {
        alert("Você está tentando sacar um valor maior do que disponível em conta, por gentileza revise os valores antes de prosseguir.")
        currentBalance += withdraw
      }
      break;
    case 3:
      break;
    default:
      alert("Opção inválida, por favor selecione uma das opções disponíveis")
      break;
  }

} while (optionBank !== 3);

alert(userName + ", obrigado por utilizar nossos serviços, até mais!")