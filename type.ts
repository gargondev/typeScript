// boolean (true | false)
let isOpen: boolean;
isOpen = true;
// isOpen = "false" error
// isOpen = "true" error

// string ('foo' | "bar" | `foo`)
let message: string; 
message = 'foo';
// string Backticks aceita chamada de uma outra variavel mesmo com tipo diferentes dentro do backtickts será considerado tudo como string.
let messageticks: string;
messageticks = `bar ${isOpen}`;

// number (int | float | hex | binary)
let typeNumber: number;
typeNumber = 0xff0

// array ([]);
let arrayString:string[];
arrayString = ['foo', 'bar'];

let arrayNumber: Array<number>;
arrayNumber = [1, 2, 2,5, 0xff0];

// tuple ou tupla Uma tupla é uma estrutura de dados que tem um número específico e uma sequência de elementos
let tuplaTitulos: [number, string];
tuplaTitulos = [1, "Titulo"];

// enum criar um conjunto de elementos contendo chave valor 
enum Cores {
    white = '#fff',
    black = '#000'
} ;


// any Qualquer coisa aceita qualquer tipo podemos alterar configuração do TypeScprit para não aceitar any.
let aceitaTudo;
aceitaTudo = "Teste";


// void sem nenhum retorno typar funcões para não ter nenhum retorno;
// o Void mencionado abaixo não é obrigatório
function executalog(): void {
    console.log("Retorna Void");
};


// null | undefined
type blabla = string | null


// never
function error(): never {
    throw new Error('Error na chamada');
};

// object 
// Definiçõe de Objeto em TypeScipt https://edrodrigues.com.br/blog/introducao-aos-tipos-de-objeto-no-typescript/#:~:text=TypeScript%20permite%20definir%20dois%20tipos,ser%20um%20par%C3%A2metro%20de%20fun%C3%A7%C3%A3o.

let cart: object;

cart = {
    key: "any"
};

