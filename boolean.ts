/**
 * boolean Demonstração do tipo Boolean do TypeScript
 * Links para apoio
 * Aula Glaucia Lemos - https://www.youtube.com/watch?v=SkXMjanTPbQ&list=PLb2HQ45KP0Wsk-p_0c6ImqBAEFEY-LU9H&index=10
 * 
 * Willian Justen - https://www.youtube.com/watch?v=voII0wn66k0&list=PLlAbYrWSYTiPanrzauGa7vMuve7_vnXG_&index=5
 */

// Maneiras não permitida de atribuir true or false.
// isOpen = "false" error
// isOpen = "true" error

let isOpen: boolean = true;
let tarefaConcluida: boolean = true;
let tarefaPendente: boolean = false;




console.log(isOpen)
console.log(tarefaConcluida)
console.log(tarefaPendente)


// Exemplo 02

let statusTarefa: boolean = false;

if(statusTarefa){
    console.log("Status Concluido")
}else {
    console.log("Status não Concluido")
}


