const attackerCharacter = prompt("Digite o nome do personagem atacante: ")
let attackPoints = parseInt(prompt("Digite o valor dos pontos de ataque do personagem atacante: "))

const defenderCharacter = prompt("Digite o nome do personagem defensor: ")
let lifePoints = parseInt(prompt("Digite o valor dos pontos de vida do personagem defensor: "))
let defenderPoints = parseInt(prompt("Digite o valor dos pontos de defesa do personagem defensor: "))
let shield = atkconfirm("O defensor possui escudo?")

if (attackPoints > defenderPoints) {
  let damage = attackPoints - defenderPoints
  if (shield) {
    damage = damage / 2
  }
  lifePoints = lifePoints - damage
  alert(`O personagem ${attackerCharacter} causou um dano de ${damage} no personagem ${defenderCharacter}, sobrando ${lifePoints} pontos de vida do defensor.`)

} else {
  alert(`O personagem ${attackerCharacter} não causou dano no personagem ${defenderCharacter}, sobrando ${lifePoints} pontos de vida do defensor.`)
}