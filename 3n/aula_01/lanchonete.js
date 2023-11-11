var lanche = ['X-Burguer', 'X-Bacon', 'X-Egg', 'X-Tudo'];
console.log('1) X-Burguer')
console.log('1) X-Bacon')
console.log('1) X-Egg')
console.log('1) X-Tudo')

const opcao = Math.floor(Math.random() * 4) + 1;
console.log(opcao)
switch(opcao){
    case 1:
        console.log("Você escolheu X-Burguer - valor de R$10,00")
        break
    case 2:
        console.log("Você escolheu X-Bacon - valor de R$10,00")
        break
    case 3:
        console.log("Você escolheu X-Egg - valor de R$10,00")
        break
    case 4:
        console.log("Você escolheu X-Tudo - valor de R$10,00")
        break
}