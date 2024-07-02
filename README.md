# Desafio Classificador de Nível de Herói
Este é um projeto desenvolvido como parte do desafio da Digital Innovation One (DIO) para testar conhecimentos básicos em lógica de programação para jogos.

## Descrição
O projeto consiste em um script simples em JavaScript que classifica o nível de um herói com base na quantidade de experiência (XP) fornecida pelo usuário. Utilizando estruturas de decisão, o script determina em qual categoria o herói se enquadra, conforme as seguintes regras:
- XP menor do que 1.000: Ferro
- XP entre 1.001 e 2.000: Bronze
- XP entre 2.001 e 5.000: Prata
- XP entre 5.001 e 7.000: Ouro
- XP entre 7.001 e 8.000: Platina
- XP entre 8.001 e 9.000: Ascendente
- XP entre 9.001 e 10.000: Imortal
- XP maior ou igual a 10.001: Radiante

## Como Usar

1. **Pré-requisitos**: Certifique-se de ter o Node.js instalado no seu sistema.
   
2. **Execução**:
   - Clone este repositório.
   - Abra um terminal na pasta do projeto.
   - Execute o script com o comando:
     ```
     node heroLevelClassifier.js
     ```
   - Siga as instruções para digitar o nome do herói e a quantidade de XP.

3. **Resultado**:
   - O script exibirá uma mensagem indicando o nível do herói com base na entrada fornecida.