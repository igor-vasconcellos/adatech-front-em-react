/* Para fazer leitura de código do usuário no terminal utilizando o node, usa-se a importação da biblioteca readline-sync.
Fazendo uso, também, da biblioteca 'prompt.question'´, sendo a maneira mais recomendada.
*/
/* Informação importante: Tanto do browser, quanto no próprio terminal utilizando o Node, o que o usuário insere é lido como texto, 
sendo considerado uma String independente do que o usuário inserir (seja número ou texto)
*/
/*
Para converter o String em outro tipo, usamos a Coerção de Tipos.
Básicamente, coerção de tipos(type coercioe) é o processo de conversão de um valor de um tipo, para outro
tal qual uma conversão de uma string para um número, um objeto para um booleano, entre outros.

Coerção Explicita:
*/ 
const prompt = require("readline-sync")

const idade = prompt.question("Qual eh a sua idade? ");

const idadeNumber = Number(idade); // Coerção Explicita

console.log("Voce tem", idadeNumber, "anos de idade",
    "Tipo da variavel: ", typeof idadeNumber
);

// Coerção Implicita: 
console.log("1" + 1);