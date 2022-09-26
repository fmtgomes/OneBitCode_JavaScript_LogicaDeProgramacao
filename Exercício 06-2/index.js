const wordInput = prompt("Olá, digite uma palavra para verificarmos se é um palíndromo: ")
let reverseWord = ""

for (let i = wordInput.length -1 ; i >= 0; i--) {
  reverseWord += wordInput[i]
}

if (reverseWord === wordInput) {
  alert("A palavra '" + wordInput + "' é um palíndromo:" +
  "\n\nEscrevendo da esquerda para a direita: " + wordInput +
  "\nEscrevendo da direita para a esquerda: " + reverseWord)
} else {
  alert("A palavra '" + wordInput + "' não é um palíndromo:" +
  "\n\nEscrevendo da esquerda para a direita: " + wordInput +
  "\nEscrevendo da direita para a esquerda: " + reverseWord)
}