//const numeros = [1, 2, 3, 4, 5];

//const i = numeros.reduce((num1, num2) => num1 + num2);
//console.log(i);

// INÍCIO EXERCÍCIO 04
const soma = numeros.reduce((acumulador, numeroAtual) => {
    return acumulador + numeroAtual
  }, 0)
  // const soma = numeros
  // .reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0)
  
  console.log("A soma dos números é ", soma)
  // FIM EXERCÍCIO 04