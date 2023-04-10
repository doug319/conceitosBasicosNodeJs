function soma(numero1, numero2){
    return numero1 + numero2;
}

console.log(soma(2, 5));
console.log(soma(245, 50));
console.log(soma(-200, 45));

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
} 

console.log(multiplica(2, 5));
console.log(multiplica(soma(4, 5), soma(3 ,3)));
console.log(multiplica(2));