const meterInput = parseFloat(prompt("Por favor, digite o valor em metros que deseja converter: "))
const convertInput = parseInt(prompt("Por favor, escolha uma das opções na qual deseja converter o valor digitado anteriormente: \n1 - Milímetro (mm) \n2 - Centímetro (cm) \n3 - Decímetro (dm) \n4 - Decâmetro (dam) \n5 - Hectômetro (hm) \n6 - Quilômetro (km)"))
let conversionResult = 0


switch (convertInput) {
  case 1:
    conversionResult = meterInput / 0.001
    alert(`O Valor em metros: ${meterInput} \nValor convertido: ${conversionResult} mm`)
    break;
  case 2:
    conversionResult = meterInput / 0.01
    alert(`O Valor em metros: ${meterInput} \nValor convertido: ${conversionResult} cm`)
    break;
  case 3:
    conversionResult = meterInput / 0.1
    alert(`O Valor em metros: ${meterInput} \nValor convertido: ${conversionResult} dm`)
    break;
  case 4:
    conversionResult = meterInput / 10
    alert(`O Valor em metros: ${meterInput} \nValor convertido: ${conversionResult} dam`)
    break;
  case 5:
    conversionResult = meterInput / 100
    alert(`O Valor em metros: ${meterInput} \nValor convertido: ${conversionResult} hm`)
    break;
  case 6:
    conversionResult = meterInput / 1000
    alert(`O Valor em metros: ${meterInput} \nValor convertido: ${conversionResult} km`)
    break;
  default:
    alert("Opção inválida, favor reiniciar o programa.")
    break;
}