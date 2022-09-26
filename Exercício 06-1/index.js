const numberInput = parseInt(prompt("Olá, digite um número para calcularmos a tabuada: "))
let tableMulti = parseInt(0)
let resultPrint = ""

if (isNaN(numberInput)) {
  alert("Você digitou algo diferente de um número inteiro, por favor reinicie o programa e tente novamente!")
} else {
  for (let i = 1; i <= 20; i++) {
    tableMulti = numberInput * i
    resultPrint += numberInput + " x " + i + " = " + tableMulti + "\n"
  }
  alert("Tabuada do número: " + numberInput + "\n\n" +resultPrint)
}