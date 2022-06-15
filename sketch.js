let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let 

let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle(xBolinha, yBolinha, diametro);
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  
 if (xBolinha > width ||
      xBolinha < 0){
   velocidadeXBolinha *= -1;
}
 if (yBolinha > height ||
    yBolinha < 0)
   velocidadeYBolinha *= -1;
}