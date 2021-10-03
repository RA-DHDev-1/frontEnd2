let textoCompleto = location.search;
//document.write(textoCompleto); // parte 1

let dados=textoCompleto.split("?"); //caracter delimitador
document.write(dados[1]);
document.write("<br>");
document.write(dados).split("=")[1];