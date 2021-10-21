# TypeScript


Anotações criadas com base na playlist do curso [Willian Justen](https://youtube.com/playlist?list=PLlAbYrWSYTiPanrzauGa7vMuve7_vnXG_https:/).

#### Vantagens no Uso.

* Adiciona tipagem estática.
* Mais segurança e correção de possiveis bugs no momento do desenvolvimento.
* Adiciona muitas features para o desenvolvimento em JavaScript.

#### Desvantagens no Uso.

* Necessita ser compilado.
* Curva de aprendizado em quem não tem conhecimento de tipagem estática.
* Erros não são muitos claros.

## Instalação / Compilação Simples.

* Instalação Global Via NPM.

```

npm install -g typescript

```

* Compilar código Ts apenas um arquivo watch fica escutando alterações no arquivo.

tsc index.ts --watch

* Criando arquivo tsConfig, onde iremos configurar varias configurações do TypeScript.

```
tsc --init
```

* Para Criar executar o código compilar o ts comando Ctrl+Shift+B opção tsc:watch


## Tipos em typeScript

* Boolean -> [boolean.ts](boolean.ts)
* Exemplificado os tipos em TypeScript no arquivo, [type.ts](type.ts)
