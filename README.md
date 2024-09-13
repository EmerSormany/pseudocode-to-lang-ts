# pseudocode-to-lang

Este repositório é uma atividade da disciplina de Introdução a Algoritmos do curso tecnólogo Tecnologia em Sistemas para Internet -IFPB - Picuí. 

A atividade consiste reproduzir em 5 questões que foram feitas em pseudocódigo na sala de aula nas linguagens Python e na linguagem escolhida na apresentação de um seminário - Typescript foi minha linguagem escolhida.

Questões:
 1. Faça um pseudocódigo para um programa que recebe um número e mostre seu sucessor e o seu antecessor.
 2. Elabore um pseudocódigo que receba a distância percorrida (km) e a quantidade de combustível utilizada (litros) para exibir o consumo médio do carro.
 3. Construir um algoritmo que receba um valor inteiro qualquer e mostre o resto da divisão desse valor por 3. Use o operador %.
 4. Construir um algoritmo para calcular as raízes de uma equação do 2 grau, sendo que os valores a,b e c são fornecidos pelo usuário. Entrada: obter os valores de a,b e c do usuário. Consideremos somente a obtenção de raízes reais.
 5. Suponha que um caixa eletrônico disponha apenas de notas de 1, 10 e 50 reais. Considerando que o cliente está querendo fazer um saque de um valor qualquer (considere esse valor inteiro). Faça um algoritmo que mostre o número mínimo de notas que o caixa deve fornecer para o cliente. Mostre também, o valor do saque, e a quantidade de cada nota a ser entregue. Obs: O caixa não trabalha com moedas.
 6. Construa um pseudocódigo que informe se o aluno foi aprovado, reprovado ou fará uma nova avaliação (recuperação) em uma determinada disciplina, sabendo que:
  - A média é calculada com a leitura de 3 notas.
  - O aluno será reprovado se a média for menor que 50.
  - O aluno será aprovado se a média for maior ou igual a 70.
  - Aluno fará uma nova avaliação (recuperação) caso sua média seja 50 (inclusive) ou menor que 70.

# API

Fiz os exercício como uma API, na qual cada endpoint corresponde a um exercício. 
Para executar clone este repositório ou faça o em ZIP, extraia, instale as dependências com o comando **npm install** e execute o comando **npm run start**.

### Exercício 1
 * endpoint: '/exercicio1'
 * body da requisição: { "numero": 10 }
 * retorno: { "numero": 10, "antecessor": 9, "sucessor": 11 }
### Exercício 2
 * endpoint: '/exercicio2'
 * body da requisição: { 
	"distancia": 1000,
	"combustivel": 80
}
 * retorno: {
	"consumoMedio": "12.50"
}
### Exercício 3
 * endpoint: '/exercicio3'
 * body da requisição: { 
	"numero": 1000
}
 * retorno: {
	"resto": 1
}
### Exercício 4
 * endpoint: '/exercicio4'
 * body da **primeira** requisição: { 
	"a": 1000,
	"b": 15,
	"c": 20
}
 * retorno: {
	"mensagem": "A equação não possui raízes reais."
}
* body da **segunda** requisição: { 
	"a": 1,
	"b": 15,
	"c": 20
} 
* retorno: {
	"raiz1": "-1.48",
	"raiz2": "-13.52"
}
### Exercício 5
 * endpoint: '/exercicio5'
 * body da requisição: { 
	"saque": 119
}
 * retorno: {
	"valorSaque": 119,
	"notas50": 2,
	"notas10": 1,
	"notas1": 9
}
### Exercício 6
* endpoint: '/exercicio6'
 * body da **primeira** requisição: { 
	"nota1": 100,
	"nota2": 80,
	"nota3": 70
}
 * retorno da requisição: {
	"media": "83.33",
	"situacao": "Aprovado"
}
* body da **segunda** requisição: { 
	"nota1": 100,
	"nota2": 70,
	"nota3": 20
}
 * retorno da requisição: {
	"media": "63.33",
	"situacao": "Recuperação"
}
* body da **terceira** requisição: { 
	"nota1": 50,
	"nota2": 70,
	"nota3": 20
}
 * retorno requisição: {
	"media": "46.67",
	"situacao": "Reprovado"
}


