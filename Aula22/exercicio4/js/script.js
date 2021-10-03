var slider1 = document.getElementById("myRange");
var output1 = document.getElementById("demo");
var img1 = document.getElementById("img1");

slider1.oninput = () => {
  output1.innerHTML = `${slider1.value}`;
  output1.style.fontSize = `${slider1.value}px`
  img1.style.maxHeight = `${slider1.value}px`
};


let sliderC = document.getElementById("randomC");

sliderC.oninput = () => {
  function getRandomColor() {
    let hexV = '0123456789ABCDEF';
    let colors = '#';
    for (let i = 0; i < 6; i++) {
      colors += hexV[Math.floor(Math.random() * 16)];
    }
    return colors;
  }

  document.body.style.backgroundColor = getRandomColor();
};

let sliderP = document.getElementById("randomP");

sliderP.oninput = () => {
  function randomP() {
    let hexV1 = '0123456789ABCDEF';
    let color1 = '#';
    for (let i = 0; i < 6; i++) {
      color1 += hexV1[Math.floor(Math.random() * 16)];
    }
    return color1;
  }

  document.querySelector('.paragraph').style.color = randomP();
}
