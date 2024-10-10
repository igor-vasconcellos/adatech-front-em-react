//Estudo Dirigido. 
//Alunos: LEONARDO BACELAR, IGOR VASCONCELOS

//Questão 1:Escreva um código que use um laço para iterar sobre todas as propriedades de um objeto e exiba-as no console.

const animal ={
    especie: "Cachorro",
    nome: "Ayka",
    idade: 10,
    peso: 4.0
    }
    
    //Percorre pelo objeto 'For in'
    for ( var propriedades in animal){
        console.log(`${propriedades}: ${animal[propriedades]}`);
    }
    
    console.log("");
    
    //Questão 2:Crie um objeto que armazena os salários de várias pessoas e use um laço para calcular a soma total dos salários
    
    const ArmazenadorDeSalario = {
    Maria: 1000,
    Leonardo: 3500,
    Igor: 950,
    Lucas: 45000,
    };
    
    let SomaTotal = 0;
    
    for( var iteracao in ArmazenadorDeSalario){
        SomaTotal += ArmazenadorDeSalario[iteracao];
    }
    
    console.log(`A soma total dos salários é: R$ ${SomaTotal}`);
    
    //Questão 3: Dado um objeto com alunos e suas respectivas notas, crie um código que exiba apenas os alunos que passaram (nota >= 7).
    
    console.log("");
    const alunos = {
        Juli: 10.0,
        Leonardo: 9.5,
        Igor: 9.7,
        Ravi: 9.4,
        Fulano: 4.0,
        Ciclano: 5.8
    };
    
    console.log("Alunos que passaram: ");
    
    for ( var notas in alunos){
        if(alunos[notas] >= 7){
            console.log(`${notas}: ${alunos[notas]}`)
        }
    }
    
    //Questão 4:Dado um array de objetos com nomes e idades, agrupe as pessoas por faixa etária (jovens: até 20 anos, adultos: de 21 a 40, idosos: acima de 40).  
    //  Crie um array de objetos pessoas com nomes e idades.
    //  Use um laço para agrupar os nomes em categorias: jovens (até 20 anos), adultos (21 a 40 anos), e idosos (acima de 40).
    
    console.log("");
    
    const pessoas = [
    {nome: 'Maverick', idade: 25},
    {nome: 'Leonardo', idade: 22},
    {nome: 'Cleidson', idade: 75},
    {nome: 'Cabral', idade: 110},
    {nome: "Salazar", idade: 15},
    {nome: "Abigail", idade: 35},
    ];
    
    const grupos = {
        jovens: [],
        adultos:[],
        idosos: []
    };

    for(let i = 0; i < pessoas.length; i++){
        const pessoa = pessoas[i];
    
    
    if(pessoa.idade <= 20){
        grupos.jovens.push(pessoa.nome);
    } else if (pessoa.idade <= 40){
        grupos.adultos.push(pessoa.nome);
    } else {
        grupos.idosos.push(pessoa.nome)
    }
    
    }
    
    console.log(grupos);
    
    console.log("");
    
    /*Questao 5: Crie um objeto que armazena produtos e suas quantidades em estoque. Escreva um laço que diminua a quantidade em 1 cada vez que o produto for "vendido".
    Crie um objeto estoque com nomes de produtos e suas respectivas quantidades.
    Use um laço para simular vendas, diminuindo o estoque de cada produto vendido.
    */
    
    const estoqueQt5 = {
        maca: 10,
        banana: 20,
        morango: 3,
        uva: 50
    };
  
    const vendas ={
     maca: 4,
     banana: 10,
     uva: 30
    };

    for(let iteracao in vendas){
        if(estoqueQt5[iteracao] !== undefined){
            estoqueQt5[iteracao] -= vendas[iteracao];
        }
    }
    
    console.log(estoqueQt5);
    
    /* Questão 6: Dado um objeto que armazena notas de alunos, use um laço para encontrar a maior e a menor nota.
      Crie um objeto notas com nomes de alunos e suas notas.
      Use um laço for...in para encontrar e exibir a maior e a menor nota
    */
    
    const notasAlunosQt6 = {
    leonardo: 7.5,
    mariane: 9.5,
    sanzio: 10.0,
    armando: 2.4,
    dani: 5.4,
    sandrick: 6.2,
    };
  
    let NotaMaior = 0;
    let notaMenor = 10;
    
    for ( var verificador in notasAlunosQt6){
        const nota = notasAlunosQt6[verificador];
    
    
        if(nota > NotaMaior){
            NotaMaior = nota;
        }
    
        if (nota < notaMenor){
            notaMenor = nota;
        }
    
    
    }
  
    console.log("Maior nota: ", NotaMaior);
    console.log("Menor nota: ", notaMenor);
    console.log("");
    
    /*Questão 7: Dado um objeto com os salários de funcionários, calcule a média salarial.
      Crie um objeto salarios com nomes de funcionários e seus respectivos salários.
      Use um laço para calcular a média dos salários.
    */
    
    const SalariosDosFuncionarios = {
        funcionario1: 2000,
        funcionario2: 3500,
        funcionario3: 6000,
        funcionario4: 1200,
        funcionario5: 600,
        funcionario6: 15000,
    };
   
    let somaSalario = 0; 
    let quantidade = 0;
  
    for(var funcionario in SalariosDosFuncionarios){
        somaSalario += SalariosDosFuncionarios[funcionario];
        quantidade++;
    }
    
    const mediaSalarial = somaSalario / quantidade;
    
    console.log("Média salarial: ", mediaSalarial);

    /* Questão 8: Crie um array de objetos que represente uma lista de compras. 
    Cada objeto deve conter o nome do produto e a quantidade. 
    Use um laço para calcular o total de itens a serem comprados.
    •  Crie um array de objetos listaCompras, cada um contendo um produto e sua quantidade.
    •  Use um laço para somar todas as quantidades e exibir o total de itens.
    */

    const listaCompras = [
        { produto: 'Maçã', quantidade: 5 },
        { produto: 'Banana', quantidade: 3 },
        { produto: 'Leite', quantidade: 2 },
        { produto: 'Pão', quantidade: 1 }
    ];

    let totalItens = 0;

    for (let i = 0; i < listaCompras.length; i++) {
        totalItens += listaCompras[i].quantidade;
    }

    console.log(`Total de itens a serem comprados: ${totalItens}`);

    /* Questão 9: Escreva uma função que receba uma string 
    e retorne um objeto contando quantas vezes cada caractere aparece na string.
    •  Escreva uma função contarCaracteres que receba uma string como entrada.
    •  Use um laço para contar quantas vezes cada caractere aparece na string 
    e retorne esse resultado como um objeto.
    */

    function contarCaracteres(str) {
        const contagem = {};
        
        for (let i = 0; i < str.length; i++) {
            const caractere = str[i]; 

            if (contagem[caractere]) {
                contagem[caractere]++;
            } else {
                
                contagem[caractere] = 1;
            }
        }

        return contagem;
    }

    const resultado = contarCaracteres("paralelepipedo");
    console.log(resultado);

    /* Questão 10: Dado um objeto de produtos e seus preços, 
    altere o preço de todos os produtos que custam mais de R$ 100, 
    aplicando um desconto de 15%.
    •  Crie um objeto produtos com os nomes e preços dos produtos.
    •  Use um laço para aplicar um desconto de 15% aos produtos que custam mais de R$ 100.
    */

    const produtos = {
        produto1: { nome: 'Notebook', preco: 2500 },
        produto2: { nome: 'Celular', preco: 1200 },
        produto3: { nome: 'Caderno', preco: 10 },
        produto4: { nome: 'Mesa', preco: 350 },
        produto5: { nome: 'Caneta', preco: 2 }
    };

    for (const chave in produtos) {
        if (produtos[chave].preco > 100) {
            produtos[chave].preco *= 0.85; 
        }
    }

    console.log("Aplicando desconto em produtos acima de 100$: ");
    console.log(produtos);

    /* Questão 11: Dado um array de strings, escreva uma função que conte quantos 
    caracteres há em cada string e armazene o resultado em um objeto.
    •  Crie um array palavras com várias strings.
    •  Escreva uma função contarCaracteresArray que percorra o array 
    e retorne um objeto em que cada chave seja a palavra e o valor seja o número de caracteres
    */

    const frutas = ["maçã", "banana", "laranja", "uva", "kiwi"];

    function contarCaracteresArray(array) {
        const resultado = {}; 

        for (let i = 0; i < array.length; i++) {
            const palavra = array[i];
            resultado[palavra] = palavra.length; 
        }

        return resultado; 
    }

    const contagemCaracteres = contarCaracteresArray(frutas);
    console.log(contagemCaracteres);

    /* Questão 12: Escreva um algoritmo que, dado um objeto de produtos e quantidades 
    em estoque, faça a reposição automática de itens com estoque abaixo de 5 unidades.
    •  Crie um objeto estoque com produtos e quantidades.
    •  Use um laço for...in para identificar produtos com quantidade abaixo de 5 
    e adicione 10 unidades a eles.
    */

    const estoque = {
        produto1: { nome: 'Arroz', quantidade: 4 },
        produto2: { nome: 'Feijão', quantidade: 10 },
        produto3: { nome: 'Açúcar', quantidade: 2 },
        produto4: { nome: 'Sal', quantidade: 5 },
        produto5: { nome: 'Óleo', quantidade: 3 }
    };

    for (const chave in estoque) {
        if (estoque[chave].quantidade < 5) {
            estoque[chave].quantidade += 10; 
        }
    }

    console.log(estoque);

    /* Questão 13: Dado um objeto que representa as notas de diferentes provas para diversos
    alunos, escreva um código que calcule a média de cada aluno.
    •  Crie um objeto notasAlunos com os nomes dos alunos e um array com suas notas.
    •  Use um laço for...in para calcular a média de cada aluno e exibir o resultado
    */

    const notasAlunos = {
        aluno1: { nome: 'João', notas: [7, 8, 9] },
        aluno2: { nome: 'Maria', notas: [10, 9, 8] },
        aluno3: { nome: 'Pedro', notas: [6, 5, 7] },
        aluno4: { nome: 'Ana', notas: [9, 10, 9] }
    };

    for (const chave in notasAlunos) {
        const aluno = notasAlunos[chave];
        const notas = aluno.notas;
        
        const soma = notas.reduce((acc, nota) => acc + nota, 0); 
        const media = soma / notas.length;

        console.log(`Média de ${aluno.nome}: ${media.toFixed(2)}`);
    }

    /* Questão 14: Dado um array de produtos vendidos, crie um objeto que contenha 
    a contagem de cada produto vendido.
    •  Crie um array vendas com os nomes dos produtos vendidos.
    •  Escreva uma função contarVendas que percorra o array 
    e conte quantas vezes cada produto foi vendido.
    */

    const vendaFrutas= ['Maçã', 'Banana', 'Laranja', 'Maçã', 'Banana', 'Maçã', 'Pera', 'Laranja'];

    function contarVendas(array) {
        const contagem = {}; 

        for (let i = 0; i < array.length; i++) {
            const produto = array[i]; 

            if (contagem[produto]) {
                contagem[produto]++;
            } else {
            
                contagem[produto] = 1;
            }
        }

        return contagem; 
    }

    const resultadoVendas = contarVendas(vendaFrutas);
    console.log(resultadoVendas);

    /* Questão 15: Dado um objeto de produtos e preços, 
    filtre apenas os produtos com valor acima de R$ 100.
    •  Crie um objeto produtos com produtos e seus preços.
    •  Use um laço para filtrar apenas os produtos com preço superior a R$ 100 
    e armazene esses itens em um novo objeto produtosCaros
    */

    const produtosQt15 = {
        produto1: { nome: 'Notebook', preco: 2500 },
        produto2: { nome: 'Celular', preco: 1200 },
        produto3: { nome: 'Caderno', preco: 10 },
        produto4: { nome: 'Mesa', preco: 350 },
        produto5: { nome: 'Caneta', preco: 2 }
    };

    const produtosCaros = {};

    for (const chave in produtosQt15) {
        if (produtosQt15[chave].preco > 100) {
            produtosCaros[chave] = produtosQt15[chave];
        }
    }

    console.log(produtosCaros);
