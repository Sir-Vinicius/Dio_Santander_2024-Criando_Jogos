const readline = require('readline');

// Interface para a leitura de dados
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para calcular o saldo de vitórias
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Função para determinar o rank do jogador com base nas vitórias
function determinarRank(vitorias) {
    if (vitorias < 10) {
        return 'Ferro';
    } else if (vitorias >= 11 && vitorias <= 20) {
        return 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
        return 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
        return 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
        return 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
        return 'Lendário';
    } else if (vitorias >= 101) {
        return 'Imortal';
    }
}

// Pergunta ao usuário e aguarda as respostas
rl.question('Digite o número de vitórias: ', (pergunta1) => {
    rl.question('Digite o número de derrotas: ', (pergunta2) => {
        // Converte as respostas para números inteiros
        let vitorias = parseInt(pergunta1);
        let derrotas = parseInt(pergunta2);

        let saldoVitorias = calcularSaldo(vitorias, derrotas);
        let nivel = determinarRank(vitorias);

        // Exibe o resultado
        console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`);

        // Fecha a interface após terminar
        rl.close();
    });
});
