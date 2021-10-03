let mudarFundo = document.querySelectorAll('input[type = radio]');
for (let input of mudarFundo) {
    input.addEventListener('click', (e) => {
        let cor = e.target.value;
        let id = e.target.id.split('').pop();
        definirCor(id, cor);
    })
};

function definirCor(id, cor) {
    switch (id) {
        case '1':
            document.body.style.backgroundColor = cor;
            break;
        case '2':
            document.body.style.backgroundColor = cor;
            break;
        case '3':
            document.body.style.backgroundColor = cor;
            break;
        case '4':
            document.body.style.backgroundColor = cor;
            break;
        case '5':
            document.body.style.backgroundColor = cor;
            break;

    }
}