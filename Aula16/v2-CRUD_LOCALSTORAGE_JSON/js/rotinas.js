document.addEventListener("onload", executarRotinas() ); //O addEventListener monitora a página para executarRotinas
function executarRotinas() { //Função principal carregada junto com a página pelo document.addeventlistener
    var localStorageKeyName = 'data'; //Dá o nome específico de data à essa chave localStorage

    carregarDoLocalStorage(); //Função que carrega informações do LocalStorage

    document.querySelector("#btn-add").addEventListener('click', function () {
        var nome = document.getElementById("nome"), // Encapsula na variárvel nome a id "nome"
            email = document.getElementById("email"), // Encapsula na variárvel email a id "email"
            idade = document.getElementById("idade"); // Encapsula na variárvel idade a id "idade"

        // Faz a validação de dados dos campos nome/email/idade (converte idade em número inteiro)
        if (nome.value.length === 0 || email.value.length === 0 || !parseInt(idade.value)) return;
        //Cria o objeto usuário com os campos nome, email e idade
        var usuario = {
            nome: nome.value,
            email: email.value,
            idade: idade.value
        };

        // Limpar os campos dos dados
        nome.value = '';
        email.value = '';
        idade.value = '';

        // Adicionar ao localStorage
        adicionarAoLocalStorage(usuario);
    })

    function adicionarAoLocalStorage(obj) {
        var usuarios = [], //Criando array vazio
            dadosNoLocalStorage = localStorage.getItem(localStorageKeyName); //Obtendo dados do LocalStorage

        if (dadosNoLocalStorage !== null) { //Se existirem dados no LocalStorage
            usuarios = JSON.parse(dadosNoLocalStorage); //Transforma os dados JSON para JS
        }
        //Vai adicionando cada objeto no Array usuários
        usuarios.push(obj);
        //Setando dados
        localStorage.setItem(localStorageKeyName, JSON.stringify(usuarios));
        //Carregando
        carregarDoLocalStorage();
    }

    function carregarDoLocalStorage() { //Função que carrega o que está armazenado no localStorage
        var usuarios = [],
            dadosNoLocalStorage = localStorage.getItem(localStorageKeyName),
            gridBody = document.querySelector("#grid tbody");

        if (dadosNoLocalStorage !== null) {
            usuarios = JSON.parse(dadosNoLocalStorage);
        }

        // Desenhando thread (coportamento de tabela) no body do HTML
        gridBody.innerHTML = ''; //Limpando o conteúdo do HTML

        usuarios.forEach(function (x, i) {
            var tr = document.createElement("tr"), //Criando o elemento tr
                tdName = document.createElement("td"), //Criando o elemento td
                tdJob = document.createElement("td"), //Criando elemento td
                tdAge = document.createElement("td"), //Criando elemento td
                tdRemove = document.createElement("td"), //Criando o elemento td
                btnRemove = document.createElement("button"); //Criando o elemento botão

            tdName.innerHTML = x.nome; //Adicionando o nome usuário
            tdJob.innerHTML = x.email; //Adicionando o email do usuário
            tdAge.innerHTML = x.idade; //Adicionando a idade do usuário

            btnRemove.textContent = 'Remove'; //Inserindo o nome remove
            btnRemove.className = 'btn btn-xs btn-danger'; //Inseriando a chave que remove o botão
            btnRemove.addEventListener('click', function(){ //Esperando o click do botão
                removeFromLocalStorage(i); //Chamando a função de remoção
            });

            tdRemove.appendChild(btnRemove); //Adicionando o botão remove na tabela

            tr.appendChild(tdName); //Adicionando Nome na tabela
            tr.appendChild(tdJob); // Adicionando Job na tabela
            tr.appendChild(tdAge); // Adicionando Age na tabela
            tr.appendChild(tdRemove); //Adicionando Remove na tabela

            gridBody.appendChild(tr); //Apendendo tabela no grid do body
        });
    }

    function removeFromLocalStorage(index){
        var usuarios = [], //Criando um array vazio
            dadosNoLocalStorage = localStorage.getItem(localStorageKeyName); // Obtendo dados do LocalStorage

        usuarios = JSON.parse(dadosNoLocalStorage); //Transforma os dados JSON para JS

        usuarios.splice(index, 1); //Retirando um elemento referente ao index

        localStorage.setItem(localStorageKeyName, JSON.stringify(usuarios)); //Setando novamente o localStorage

        carregarDoLocalStorage(); // Executando função que carrega do localStorage
    }
}