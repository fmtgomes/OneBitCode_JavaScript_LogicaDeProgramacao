const wordInput = prompt("Olá, digite uma palavra para verificarmos se é um palíndromo: ")
let correctWord = ""
let reverseWord = ""

for (let i = 0; i < wordInput.length; i++) {
  correctWord += wordInput[i]
}
for (let e = wordInput.length -1; e >= 0; --e) {
  reverseWord += wordInput[e]
}

if (reverseWord === correctWord) {
  alert("A palavra '" + wordInput + "' é um palíndromo:" +
  "\n\nEscrevendo da esquerda para a direita: " + correctWord +
  "\nEscrevendo da direita para a esquerda: " + reverseWord)
} else {
  alert("A palavra '" + wordInput + "' não é um palíndromo:" +
  "\n\nEscrevendo da esquerda para a direita: " + correctWord +
  "\nEscrevendo da direita para a esquerda: " + reverseWord)
}