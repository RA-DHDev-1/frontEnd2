alert('Vai mudar');
function darkTheme(color) {
    document.body.style.background = color;
 }
 
 window.addEventListener("load",function() { darkTheme('black') });

 let button = document.querySelector('button');

 button.addEventListener("click", function () {
    document.body.style.background = "white";
 })