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

let origem = location.origin;
document.write(origem);
document.write("<br>");
document.write("<br>");

let nomeCaminho = location.pathname;
document.write(nomeCaminho);
document.write("<br>");
document.write("<br>");

let protocolo = location.protocol;
document.write(protocolo);