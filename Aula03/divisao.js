function divisao(a,b) {
    if (a == 0 || b == 0) {
        return `Não se pode dividir por zero`;
    }
    return a / b
}
/* console.log(divisao()); */

module.exports = divisao;