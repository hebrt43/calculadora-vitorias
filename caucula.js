function calculadoraDeVitorias(vitorias, derrotas) {
    const saldoDeVitorias = vitorias - derrotas;
    let nivel = '';

    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }

    return "O Herói tera o saldo de" + saldoDeVitorias + "está no nível de" + nivel;

}

const resultado = calculadoraDeVitorias(75, 25); // Altere os números de vitórias e derrotas aqui
console.log(resultado);
