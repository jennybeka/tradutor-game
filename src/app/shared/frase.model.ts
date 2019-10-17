//esta classe é o modelo de objetos. Usando o.model.ts
//vamos usar para tipar os objetos
export class Frase {

    public fraseEng: string
    public frasePtBr: string

    constructor(fraseEng: string, frasePtBr: string) { //o papel dele aqui é recuperar os parametros e atribuir os valores para os atributos internos da classe
        this.fraseEng = fraseEng
        this.frasePtBr = frasePtBr
    }

}

//ou assim....
//deixando o codigo menos verboso
// constructor(public fraseEng: string, public frasePtBr: string) {}