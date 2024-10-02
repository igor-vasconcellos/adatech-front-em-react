console.log("Questão 1: ");
const numerosQuest1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numerosQuest1.filter(num => num % 2 === 0);
console.log(numerosPares);
console.log("");

console.log("Questão 2: ");
const numerosQuest2 = [1, 2, 3, 4, 5, 10, 20, 32, 40, 1002, 1320, 1326];
const numMultiplicados = numerosQuest2.map(num => num * 5);
console.log(numMultiplicados);
console.log("");

console.log("Questão 3: ");
const numerosQuest3 = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
let soma = 0;

for (let num of numerosQuest3) {
    soma += num;
}
console.log(soma);
console.log("");

console.log("Questão 4: ");
const listaNomesMasculinos = ['João', 'Pedro', 'Lucas', 'André'];
const listaNomesFemininos = ['Maria', 'Ana', 'Joana', 'Milena', 'Giulia'];
const nomesConcatenados = listaNomesMasculinos.concat(listaNomesFemininos);
console.log(nomesConcatenados);
console.log("");

console.log("Questão 5: ");
const numerosQuest5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const todosPositivos = numerosQuest5.every(num => num > 0);
console.log(todosPositivos);
console.log("");

console.log("Questão 6: ");
const numerosQuest6 = [5, 2, 9, 1, 7, 10, 3, 92, 105, 71];
const numerosOrdenados = numerosQuest6.sort((a, b) => a - b);
console.log(numerosOrdenados);
console.log("");

console.log("Questão 7: ");
const letras = ['a', 'b', 'c', 'd', 'e', 'f'];
const letrasInvertidas = letras.reverse();
console.log(letrasInvertidas);
console.log("");

console.log("Questão 8: ");
const numerosQuest8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const somaDobrados = numerosQuest8
    .filter(num => num % 2 === 0)
    .map(num => num * 2)         
    .reduce((acc, num) => acc + num, 0); 
console.log(somaDobrados);
console.log("");

console.log("Questão 9: ");
const precos1 = [10, 20, 30];
const precos2 = [15, 25, 35];
const precosConcatenados = precos1.concat(precos2); 

const precosAumentados = precosConcatenados.map(preco => preco * 1.1); 

console.log(precosAumentados);
console.log("");

console.log("Questão 10: ")
const idadesGrupo1 = [25, 18, , 16, 8, 32];
const idadesGrupo2 = [22, 30, 28];
const idadesConcatenadas = idadesGrupo1.concat(idadesGrupo2).sort((a, b) => a - b);

idadesConcatenadas.forEach(idade => {
    const grupo = idade < 18 ? 'Menor de idade' : idade < 30 ? 'Jovem Adulto' : 'Adulto';
    console.log(`${idade}: ${grupo}`);
});

console.log("Questão 11: ")
function VerificarOrdem(array){

for(let contador = 1; contador < array.length; contador++){

    if(array [contador] <= array[contador - 1] ){
        return "O array não está em ordem crescente"
    }
}
return "O array está em ordem crescente"
}
let ArrayList = [1,2,3,4];
console.log(VerificarOrdem(ArrayList)); 
console.log("");

console.log("Questão 12: ")

function FiltrarImpares(array){

    const impares = array.filter(num => num % 2 !== 0);
    const ImparesInvertidos = impares.reverse();
    const pares = array.filter (num => num % 2 === 0);
    return pares.concat(ImparesInvertidos);
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(FiltrarImpares(numeros));
console.log("");

console.log("Questão 13:")
function VerificarIdade(idade) {
    if (idade < 0) {
      return "Idade inválida.";
    } else if (idade <= 12) {
      return "Criança.";
    } else if (idade <= 17) {
      return "Adolescente.";
    } else if (idade <= 59) {
      return "Adulto.";
    } else {
      return "Idoso.";
    }
  }
  console.log(VerificarIdade(10)); 
  console.log(VerificarIdade(15)); 
  console.log(VerificarIdade(30)); 
  console.log(VerificarIdade(65)); 

console.log("");
console.log("Questão 14:")
  function VerificarSituacao(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3;
    if (media >= 7.0) {
      return "Aprovado.";
    } else if (media >= 4.0) {
      return "Reprovado com direito a recuperação.";
    } else {
      return "Reprovado sem direito a prova de recuperação.";
    }
  }
  
  const nota1 = 8.0; 
  const nota2 = 6.5;
  const nota3 = 7.5;
  console.log(VerificarSituacao(nota1, nota2, nota3))
  console.log("")

  console.log("Questão 15:")
  function VerificarNumero(numero) {
    if (numero > 0) {
      return "O número é positivo.";
    } else if (numero < 0) {
      return "O número é negativo.";
    } else {
      return "O número é zero.";
    }
  }
  const numero = 5;
  console.log(VerificarNumero(numero));
  console.log("")

  console.log("Questão 16: ")

  function VerificacaoDeNumeros(numeroQuestion16) {
    if (numeroQuestion16 % 2 === 0) {
      return "O número é par.";
    } else {
      return "O número é ímpar.";
    }
  }
  const numeroQuestion16 = 7; 
  console.log(VerificacaoDeNumeros(numero));
console.log("")

console.log("Questão 17: ")
  function calcularDesconto(valor, categoria) {
    let desconto = 0;
    if (categoria === "Premium") {
      desconto = 0.20; 
    } else if (categoria === "Regular") {
      desconto = 0.10; 
    } else {
      return "Categoria inválida.";
    }
    const valorDesconto = valor * desconto;
    const valorFinal = valor - valorDesconto;
    return `Valor original: R$${valor.toFixed(2)}, Desconto: R$${valorDesconto.toFixed(2)}, Valor final: R$${valorFinal.toFixed(2)}`;
  }
  const valorCompra = 100;
  const categoriaCliente = "Premium"; 
  console.log(calcularDesconto(valorCompra, categoriaCliente));
  console.log("")
  
  console.log("Questão 18: ")
  function calcularPrecoComDesconto(precoUnitario, quantidade) {
    let desconto = 0;
    if (quantidade >= 10) {
      desconto = 0.20;
    } else {
      desconto = 0.10;
    }
    const valorTotalSemDesconto = precoUnitario * quantidade;
    const valorDesconto = valorTotalSemDesconto * desconto;
    const valorFinal = valorTotalSemDesconto - valorDesconto;
    return `Valor total sem desconto: R$${valorTotalSemDesconto.toFixed(2)}, Desconto: R$${valorDesconto.toFixed(2)}, Valor final: R$${valorFinal.toFixed(2)}`;
  }
  const precoUnitario = 50;
  const quantidade = 12;
  console.log(calcularPrecoComDesconto(precoUnitario, quantidade));
  console.log("")

  console.log("Questao 19: ")
  function maiorDeTresNumeros(num1, num2, num3) {
    const maior = Math.max(num1, num2, num3);
    return `O maior número é: ${maior}`;
  }
  const numero1 = 2; 
  const numero2 = 30;
  const numero3 = 55;
  
  console.log(maiorDeTresNumeros(numero1, numero2, numero3));
  console.log("")
  
  console.log("Questão 20: ")
  function verificarSenha(senha) {
    const minLength = 6;
  
    if (senha.length >= minLength) {
      return "Senha válida.";
    } else {
      return "Senha inválida. A senha deve ter pelo menos 6 caracteres.";
    }
  }
  const senha1 = "abc123";
  const senha2 = "abc";   
  
  console.log(verificarSenha(senha1));
  console.log(verificarSenha(senha2));
