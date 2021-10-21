"use strict";
// string ('foo' | "bar" | `foo`)
let message;
message = 'foo';
// string Backticks aceita chamada de uma outra variavel mesmo com tipo diferentes dentro do backtickts será considerado tudo como string.
let messageticks;
messageticks = `bar ${isOpen}`;
// number (int | float | hex | binary)
let typeNumber;
typeNumber = 0xff0;
// array ([]);
let arrayString;
arrayString = ['foo', 'bar'];
let arrayNumber;
arrayNumber = [1, 2, 2, 5, 0xff0];
// tuple ou tupla Uma tupla é uma estrutura de dados que tem um número específico e uma sequência de elementos
let tuplaTitulos;
tuplaTitulos = [1, "Titulo"];
// enum criar um conjunto de elementos contendo chave valor 
var Cores;
(function (Cores) {
    Cores["white"] = "#fff";
    Cores["black"] = "#000";
})(Cores || (Cores = {}));
;
// any Qualquer coisa aceita qualquer tipo podemos alterar configuração do TypeScprit para não aceitar any.
let aceitaTudo;
aceitaTudo = "Teste";
// void sem nenhum retorno typar funcões para não ter nenhum retorno;
// o Void mencionado abaixo não é obrigatório
function executalog() {
    console.log("Retorna Void");
}
;
// never
function error() {
    throw new Error('Error na chamada');
}
;
// object 
// Definiçõe de Objeto em TypeScipt https://edrodrigues.com.br/blog/introducao-aos-tipos-de-objeto-no-typescript/#:~:text=TypeScript%20permite%20definir%20dois%20tipos,ser%20um%20par%C3%A2metro%20de%20fun%C3%A7%C3%A3o.
let cart;
cart = {
    key: "any"
};
// type Inference ao declarar um valor para variavel na sua inicialização não é necessário tipar essa variavel.
let messageInferenceType = "Eu sou uma String";
messageInferenceType = "Eu sou nova String";
// messageInferenceType = 1; erro não aceito pelo typescpty mudar tipo da variavel
// Neste exemplo o TypeScript sabe que (e) é um MouseEvent pelo parametro click informado anteriormente.
window.addEventListener("click", (e) => {
    console.log(e.target);
});
function logDetails(uid, item) {
    console.log(`O produto tem o ${uid} e o titulo ${item}`);
}
logDetails(123, "testeDetails");
logDetails("123", "TesteDetails String");
logInfo(123, "testeInfo");
logInfo("123", "TesteInfo String");
function logInfo(uid, item) {
    console.log(`O usuário  tem o ${uid} e o nome ${item}`);
}
function renderPlat(platform) {
    return platform;
}
renderPlat("Windows");
// Type Aliases com Intersection
