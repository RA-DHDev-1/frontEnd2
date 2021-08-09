// Criação de array e soma de notas

let arrayNotas = [9, 9.2, 7, 8];
let total = 0;
let notasTotais = arrayNotas.forEach(
    function somarNotas(item) {
        total += item;
    }
);

let mediaFinal = total/4;
console.log(mediaFinal.toFixed(1));

// Mensagem simplificada imprimida na tela
let congrats = "Suas notas bimestrais foram 9, 9.2, 7 e 8, sua média final foi" + " " + mediaFinal;
console.log(congrats);

//Condicional de aprovação, reprovação
if (mediaFinal >= 7) {
    console.log("Aluno aprovado, parabéns, sua média é " + mediaFinal)
} else {
    console.log("Aluno reprovado")
};

alert("Notas: " + arrayNotas + "\nMédia: " + mediaFinal);
