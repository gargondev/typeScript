"use strict";
/**
 * number Demonstração do tipo do TypeScript
 * Links para apoio
 * int | float | hex | binary / bigint
 */
// number (int | float | hex | binary)
let num1 = 14.0; // number
let num2 = 0x37CF; // hexadecimal
let num3 = 0o377; //octal
let num4 = 0b111001; // binary
console.log('Ponto Flutuante :', num1);
console.log('Hexadecimal :', num2);
console.log('Octal :', num3);
console.log('Binário :', num4);
console.log(typeof (num4));
// big int disponivel somente a partir do es2020.
