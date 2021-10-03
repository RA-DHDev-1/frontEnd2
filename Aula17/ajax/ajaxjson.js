let myArray = url.split("../files/todos.json");


ocument.getElementById('btn').addEventListener("click", loadDoc = () => {
    alert("Função ativada");
    let xhttp = new XMLHttpRequest(); //através dele que fazemos todas as requisições
    xhttp.onload = function() {
        document.getElementsByClassName("completed").innerHTML = this.responseText;

    };
    xhttp.open("GET","./todos.txt");
    xhttp.send(""); // envia uma requisição para o servidor

});