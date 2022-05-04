# Desafio coleta - GRX Soluções

## Ferramentas utilizadas no desenvolvimento
* [Bootstrap](https://getbootstrap.com/) - Framework para aplicações front-end.
* [Typescript](https://www.typescriptlang.org/) - Superset fortemente tipado para Javascript.
* [Node.js](https://nodejs.org/en/) - Software para permitir execução de Javascript fora do navegador web.
* [Express](https://expressjs.com/pt-br/) - Framework para criação do servidor.

## Etapa mais desafiadora

A parte mais desafiadora de fazer esse projeto foi criar a renderização dos elementos dinâmicos na mão da etapa bônus de renderizar as respostas com a porcentagem.

Eu havia decidido não utilizar o React por pensar que era muita engenharia para uma solução simples, mas eu queria manter ainda a lógica de criação de um componente separado. Passei um tempo planejando como eu ia fazer essa separação e na hora de por em prática eu percebi que estava enferrujado em manipulação de elementos da DOM via Javascript.

O lado bom é que relembrei bastante coisa.

## Feedback sobre o teste

Gostei bastante desse teste. Eu acho que tem um bom tempo para executar o mesmo e além disso os desafios estão bem de acordo com o que a GRX Soluções faz. O desafio bônus é perfeito pra botar a gente pra pensar um pouco.

O Wireframe do PDF guia muito bem a parte visual.

## Informações da Aplicação

<details>
  <summary>Sobre a Aplicação</summary>

## Introdução

Este projeto faz parte de um teste técnico para um processo seletivo. O mesmo tem como finalidade obter respostas de usuários por meio de um formulário e demonstrar os resultados de forma a ser aproveitado para tomada de decisões.

## Inicialização
Para rodar essa aplicação, você precisará das seguintes ferramentas instaladas:
* Node Package Manager que pode ser encontrado [clicando aqui](https://www.npmjs.com/).
* Node para executar o Javascript fora do navegador. Pode ser encontrado [clicando aqui](https://nodejs.org/en/).
* Git para poder clonar e ter acesso a opções de versionamento, pode ser encontrado [clicando aqui](https://git-scm.com/).

### Passos pós instalação:
 - 1 - Escolha um diretório de sua preferência e clone esse repositório escrevendo em seu terminal o seguinte comando:

```bash
git clone git@github.com:LeomarLinhares/desafio-coleta-grx.git
```
 - 2 - Caminhe até o diretório criado:

```bash
cd desafio-coleta-grx
```
 - 3 - Instale as dependências:

```bash
npm install
```
 - 4 - Crie o build da aplicação:

```bash
npm run build
```
 - 5 - Inicie a aplicação:

```bash
npm start
```

> **⚠ ATENÇÃO: ts-node necessário para desenvolvimento!!**  
> É necessário ter o ts-node instalado globalmente para iniciar o servidor utilizando o ```npm run dev```. Caso não o tenha, instale-o utilizando o comando ```npm install -g ts-node```.

---

## Análise técnica

 - ### Descrição do ambiente técnico

O sistema é composto por front-end simples que reside no diretório ```/public``` e uma API Rest que utiliza da arquitetura MSC para realizar o cadastro de respostas e a consulta.
As ferramentas utilizadas para o desenvolvimento incluem Bootstrap no front-end, Node.js e Express para a API e um arquivo JSON que atua como um banco de dados.

---

## Sobre a API

- ### Mensagens internas

Rotas utilizadas pela aplicação web para executar metodos de **POST**, **GET**. Onde o retorno de cada uma das funções estará contido em um endpoint.

| Nome | Funcionalidade|
|------|--------------|
|```POST``` /api|Adiciona uma nova resposta de formulário ao enviar um body no seguinte [formato](#post-api)|

---

 - ### Formatos de requisição e retornos

#### POST ```/api```

```json
// envia
{
  "question_1": "Sim",
  "question_2": "Sim",
  "question_3": "Agora!!",
  "question_4": "Porque a empresa oferece um excelente ambiente de trabalho inclusivo, diverso e horizontal."
  
}
// retorna
{
	"id": 1,
	"question_1": "Sim",
	"question_2": "Sim",
	"question_3": "Agora!!",
	"question_4": "Porque a empresa oferece um excelente ambiente de trabalho inclusivo, diverso e horizontal.",
	"count": {
		"negativeQuantity": 0,
		"positiveQuantity": 4,
		"neutralQuantity": 0
	}
}
```
</details>
