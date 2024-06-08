export function mega(quantidade = 6, numeros = []) {

    //convertendo pra valor numerico
    let qtd = +quantidade

    if (qtd < 6 && qtd > 60) {
        throw "Quantidade inválida!"
    }

    if (numeros.length === qtd) {
        return numeros.sort((n1, n2) => n1 - n2);
    }

    const numeroAleatorio = parseInt(Math.random() * 60) + 1;

    //retorna a mesma funcao passando o array de numeros adicionando o numero aleatorio
    if (!numeros.includes(numeroAleatorio)) {
        return mega(qtd, [...numeros, numeroAleatorio]);
    } else {
        return mega(qtd, numeros)
    }
}