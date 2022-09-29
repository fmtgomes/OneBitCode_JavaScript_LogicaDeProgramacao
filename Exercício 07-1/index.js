let patient = ["João", "Gabriela", "Matheus", "Antonio", "Rosana"]
let chooseOption = 0
let newPatient = ""
let consultedPatient = ""

do {
  let numberPatient = 0
  let queue = ""
  for (let i = 0; i < patient.length; i++) {
    numberPatient++
    queue += numberPatient + " - " + patient[i] + "\n";
    
  }
  chooseOption = parseInt(prompt("Lista de pacientes: " + "\n" + queue +
  "\nEscolha uma das opções abaixo: " +
  "\n1 - Novo paciente" +
  "\n2 - Consultar paciente" +
  "\n3 - Sair"))
  switch (chooseOption) {
    case 1:
      newPatient = prompt("Insira o nome do paciente a ser adicionado na fila de espera: ")
      patient.push(newPatient)
      break;

    case 2:
      consultedPatient = patient.shift()
      if (consultedPatient === undefined) {
        alert("Não há pacientes na fila!")
        break
      } else {
        alert("Paciente " + consultedPatient + " acaba de ser consultado")
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


// let list = ""
// for (let numberPatient = 0; numberPatient < patient.length; numberPatient++) {
//   list += patient[numberPatient] + "\n";
  
// }