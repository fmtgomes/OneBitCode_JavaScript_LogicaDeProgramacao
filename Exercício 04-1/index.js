const touristName = prompt("Olá, digite o nome do turista: ")
let visit = parseInt(prompt("O turista já visitou alguma cidade?" +
"\n1 - Sim" +
"\n2 - Não"))
let numberOfCities = 0
let citiesVisitedNames = ""

if (visit === 2) {
  alert("O turista " + touristName + " não visitou nenhuma cidade!")
} else {
  while (visit === 1) {
    numberOfCities += 1
    let citiesVisited = prompt("Qual o nome da cidade visitada pelo turista?")
    citiesVisitedNames += citiesVisited+"\n"
    visit = parseInt(prompt("O turista visitou mais alguma cidade?" +
    "\n1 - Sim" +
    "\n2 - Não"))
  }
  alert("Nome do turista: " + touristName +
  "\nNúmero de cidades visitadas: " + numberOfCities +
  "\nNome das cidades visitadas: " + citiesVisitedNames)
}