let xhr = new XMLHttpRequest();
xhr.open("GET", "alunos.json");
xhr.send(null);
xhr.onreadystatechange = verificaAjax;

function verificaAjax() {
    console.log("Ready state....: ",xhr.readyState);
    console.log("Status .....: ",xhr.status);

    if (xhr.readyState == 200) {
        alert("Sucesso na requisição");
    } else {
        alert("Erro na requisição");
    }
}