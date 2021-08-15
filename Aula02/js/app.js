let situacao = confirm("Para acessar o Sistema - pressione OK");

if (situacao) {
    window.location.href="/Front-End-2/Aula02/acessoPermitido.html";
} else {
    window.location.href="/Front-End-2/Aula02/acessoNegado.html";
}