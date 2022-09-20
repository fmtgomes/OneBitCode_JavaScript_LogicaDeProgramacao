const vehicleName1 = prompt("Digite o nome do primeiro veículo: ")
const vehicleVelocity1 = parseInt(prompt("Digite a velocidade do primeiro veículo: "))
const vehicleName2 = prompt("Digite o nome do segundo veículo: ")
const vehicleVelocity2 = parseInt(prompt("Digite a velocidade do segundo veículo: "))

if (vehicleVelocity1 > vehicleVelocity2) {
  alert(`O veículo ${vehicleName1} é mais rápido que o veículo ${vehicleName2}`)
} else if (vehicleVelocity1 < vehicleVelocity2) {
  alert(`O veículo ${vehicleName2} é mais rápido que o veículo ${vehicleName1}`)
} else {
  alert("Ambos os veículos possuem a mesma velocidade")
}

console.log(vehicleVelocity1)
console.log(vehicleVelocity2)