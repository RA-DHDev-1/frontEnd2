let textoCompleto = location.hash; // hash é uma parte do endereço da URL
document.write(textoCompleto);
document.write("<br>");

let dados = textoCompleto.split("#"); // caracter delimitador
document.write(dados); // convertido e array

let dados1 = dados[1];
let dados2 = dados[2];

document.write(dados1);
document.write("<br>");
document.write(dados2);
