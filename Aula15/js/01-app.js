// Aula 14 - Local Storage
// Vinculado ex01.html

// criar chave
localStorage.setItem("materia", "Front End2"); // cria chave
// remover chave
/* localStorage.removeItem("materia"); */

let dado = localStorage.getItem("materia");

/* document.write("Valor da chave....: " + localStorage.materia); */
document.write("Valor da chave....: " + dado);