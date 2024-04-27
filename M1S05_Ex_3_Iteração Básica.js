//const numeros = [1, 2, 3, 4, 5];

//for(let i = 0; i < numeros.length ; i++){
    //console.log(numeros[i]);
//}

// INÍCIO EXERCÍCIO 03
const prompt = require("prompt-sync")({sigint: true})
const numeros = []

for(let i = 0; i < 5; i++){
  const numero = parseInt(prompt(`Digite o ${i + 1} número: `));
  numeros.push(numero);
}

for(let i = 0; i < 5; i++){
  console.log(`O ${i + 1} número é ${numeros[i]}`)
}
// FIM EXERCÍCIO 03