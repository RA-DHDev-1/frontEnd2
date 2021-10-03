// Aula 14 - Local Storage
// Vinculado ex02Contador.html

if (typeof (Storage) != "underfine") {
    if (localStorage.visitas) { // verifica se existe o localStorage.visitas = true
    localStorage.visitas = Number(localStorage.visitas) +1; // converte em número
} else {
    localStorage.visitas = 1;
}
document.write("Visitas....: "+localStorage.visitas);
} else {
    document.write("Sem suporte a Web Storage!");
}

/* // Exemplo Jardel

let visitas = localStorage.getItem('visitas') !== null ? JSON.parse(localStorage.getItem('visitas')) : 1;

let contador = visitas++;
document.write("Visitas...: " + contador);
localStorage.setItem('visitas', JSON.stringify(visitas));

if(contador % 5 == 0) {
    let reset = confirm("Zerar contador?");
    if(reset) {
        localStorage.removeItem('visitas');
        location.reload();
    }
}

// Exemplo Rodrigo
let visitas = localStorage.getItem('visitas') ||(()=>{localStorage.setItem('visitas', 0); return 0})();
visitas = Number(visitas)+1;
localStorage.setItem('visitas', visitas);
document.querySelector("Body").append("Visitas: "+localStorage.getItem('visitas'));
*/
