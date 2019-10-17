export class Coracao {
    //podemos fazer os atributos dentro do contrutor pra diminuir o codigo
    constructor(
        public cheio: boolean,
        public ulrCoracaoCheio: string = '/assets/coracao_cheio.png',
        public ulrCoracaoVazio: string = '/assets/coracao_vazio.png'
    ){}

    public exibeCoracao(): string {
        if(this.cheio) {
            return this.ulrCoracaoCheio

        } else{
            return this.ulrCoracaoVazio
        }
    }
    
}