const readline = require('realine');
const rl = readline.createInterface({
    
})
const nota = prompt("Digite a nota: ")
if (nota >= 6){
    console.log("Aprovado")
}
else if(nota >= 4 ) {
    console.log("Recuperação")
}
else {
    console.log("Reprovado")
}