

document.getElementById('btn').addEventListener("click", loadDoc = () => {
    alert("Função ativada");
    let xhttp = new XMLHttpRequest(); //através dele que fazemos todas as requisições
    xhttp.onload = function() {
        document.getElementById("demo").innerHTML = this.responseText;

    };
    xhttp.open("GET","./files/todos.json");
    xhttp.send(""); // envia uma requisição para o servidor

});