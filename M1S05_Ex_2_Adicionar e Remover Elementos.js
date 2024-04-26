//const frutas = [`Laranja`, `Morango`, `Mamâo`, `Damasco`];
//frutas.splice(0, 1);
//console.log(frutas);

const prompt = require("prompt-sync")({sigint: true})
const frutas = []

for(let i = 0; i < 3; i++){
  frutas.push(prompt("Digite o nome da fruta: "))
}

frutas.push(prompt("Digite uma fruta adicional: "))

frutas.shift()
// frutas.slice(1, 2)

console.log(frutas)