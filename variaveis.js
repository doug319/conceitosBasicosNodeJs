const forma = "triangulo";
const lado = 5;
const comprimento = 7;
let area

if(forma == "retangulo"){
    area = lado * comprimento;
}else {
        area = (lado * comprimento) / 2;
    }

console.log(area);