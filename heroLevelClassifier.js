const readline = require('readline');

// Interface para a leitura de dados
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicita o nome do herói
rl.question('Digite o nome do herói: ', (nome) => {
    // Solicita o XP
    rl.question('Digite a quantidade de XP do herói: ', (xp) => {
        // Converte XP para número inteiro
        xp = parseInt(xp, 10);

        // Estrutura de decisão para classificar o nível do herói
        let nivel;
        if (xp < 1000) {
            nivel = "Ferro";
        } else if (xp >= 1001 && xp <= 2000) {
            nivel = "Bronze";
        } else if (xp >= 2001 && xp <= 5000) {
            nivel = "Prata";
        } else if (xp >= 5001 && xp <= 7000) {
            nivel = "Ouro";
        } else if (xp >= 7001 && xp <= 8000) {
            nivel = "Platina";
        } else if (xp >= 8001 && xp <= 9000) {
            nivel = "Ascendente";
        } else if (xp >= 9001 && xp <= 10000) {
            nivel = "Imortal";
        } else if (xp >= 10001) {
            nivel = "Radiante";
        }

        // Saída
        console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

        // Fecha a interface de leitura
        rl.close();
    });
});
