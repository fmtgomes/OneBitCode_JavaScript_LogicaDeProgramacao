# Cálculo de Dano

Exercício proposto pela plataforma [OneBitCode](https://onebitcode.com/lp/)

## Como funciona o programa

- Solicita ao usuário o nome e o poder de ataque do personagem atacante;
- Solicita ao usuário o nome, quantidade de pontos de vida e poder de defesa do personagem defensor;
- Solicita ao usuário se o personagem defensor possui um escudo;
- Realizar o cálculo de dano com base nas seguintes regras:
  - Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa;
  - Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa;
  - Se o poder de ataque for menor ou igual a defesa, o dano causado será zero.
- Ao final subtratir a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela os valores atualizados.