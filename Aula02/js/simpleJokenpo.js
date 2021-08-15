while (true) {
    let pedra = 1;
    let papel = 2;
    let tesoura = 3;
    jogador = prompt("Digite pedra, papel ou tesoura.");
    maquina = parseInt(Math.random() * 3 + 1);

    if (jogador == "pedra" || "Pedra") {
        if (maquina == tesoura) {
            alert("Parabéns, pedra quebra tesoura");
        } else if (maquina == papel) {
            alert("Que pena, papel envolve a Pedra");
        } else if (maquina == pedra) {
            alert("Empate");
        }

    }
    else if (jogador == "tesoura" || "Tesoura") {
        if (maquina == pedra) {
            alert("Que pena, pedra quebra tesoura");
        } else if (maquina == papel) {
            alert("Parabéns, tesoura corta papel");
        } else if (maquina == tesoura) {
            alert("Empate");
        }
    }

    else if (jogador == "papel" || "Papel") {
        if (maquina == pedra) {
            alert("Parabéns, papel envolve pedra");
        } else if (maquina == tesoura) {
            alert("Que pena ,tesoura corta papel");
        } else if (maquina == papel) {
            alert("Empate");
        }

    }

}