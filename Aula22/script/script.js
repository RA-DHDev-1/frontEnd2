let i = 0;
document.querySelector("#iniciar-carga").addEventListener("click",
    function carregar() {
        if (i == 0) {
            i = 1;
            let elem = document.getElementById("minhaBarra");
            let width = 1;
            let id = setInterval(frame, 10);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    i = 0;
                } else {
                width++;
                elem.style.width = width + "%"
                elem.style.innerText = ""
            }
        }
    }
});
