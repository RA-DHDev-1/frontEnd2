document.getElementById('btn2').addEventListener("click", loadDoc = () => {
    alert("Função ativada");
    let xhttp = new XMLHttpRequest(); //através dele que fazemos todas as requisições
    xhttp.onload = function() {
        const xmlDoc = this.responseXML;
        const dado = xmlDoc.getElementsByTagName('ARTIST');
        let txt = "";
        for (let i = 0; i < dado.length; i++) {
            txt += dado[i].childNodes[0].nodeValue + "<br>";
        }

        document.getElementById('demo').innerHTML = txt;

    };
    xhttp.open("GET","./files/cd_catalog.xml");
    xhttp.send(""); // envia uma requisição para o servidor

});