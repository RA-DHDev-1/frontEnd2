let textoCompleto = location.hash;
document.write(textoCompleto); // parte 1

let dados=textoCompleto.split("#"); //caracter delimitador
//document.write(dados); //convertido em array 

let dados1=dados[1];
let dados2=dados[2];
document.write(dados1);
document.write("<br>");

document.write(dados2);

document.write("<br>");
//let url = location.href; // parte 1
//let url = location.href="http://www.digitalhouse.com"; parte 2
//document.write(url);
document.write("<br>");
//origem
let origin = location.origin;
document.write(origin); //protocolo. hostname, porta
document.write("<br>");
document.write("<br>");

//pathname => caminho
let nomeCaminho = location.pathname; // caminho completo
document.write(nomeCaminho); 
document.write("<br>");

//port => protocolo
let protocolo = location.protocol; // http
document.write(protocolo); 
document.write("<br>");
