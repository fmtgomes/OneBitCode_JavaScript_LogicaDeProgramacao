const userName = prompt("Olá, digite o seu nome completo: ")
let optionChoose = ""
do {
  optionChoose = parseInt(prompt("Olá " + userName + ", escolha uma das opções a seguir para saber a resposta:"+
  "\n1 - Nutriente responsável por fornecer energia ao cérebro."+
  "\n2 - Nutriente responsável pela construção muscular."+
  "\n3 - Vitamina que auxilia na saúde dos olhos/saúde visual."+
  "\n4 - Suplemento indicado para indivíduos que fazem exercícios de força."+
  "\n5 - Sair"))

  switch (optionChoose) {
    case 1:
      alert("1 - Carboidrato")
      break;
    case 2:
      alert("2 - Proteína")
      break;
    case 3:
      alert("3 - Vitamina A")
      break;
    case 4:
      alert("4 - Creatina")
      break;
    case 5:
      break;
    default:
      alert("Opção inválida, favor selecione uma das opções disponíveis.")
      break;
  }
} while (optionChoose !== 5);

alert("Obrigado por utilizar o programa " + userName + ", até mais!")