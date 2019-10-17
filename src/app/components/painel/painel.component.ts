import { Component, OnInit, EventEmitter, Output ,OnDestroy } from '@angular/core';

import { Frase } from '../../shared/frase.model' // aqui é o local principal(painel) onde vamos acessar as frases, por isso faz sentido ficar aqui o mock
import { FRASES } from './frases-mock' //feito o export da FRASES

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES //frases recebe os objetos do array Frase
  public instrucao: string = 'Traduza a Frase:'
  public resposta: string = '' //guardar o value da escrita no input// se nao iniciar como vazia uma string da o valor de undefined

  public rodada: number = 0
  public rodadaFrase: Frase //podemos usar como tipo pq o Frase esta importado aqui

  public progresso: number = 0

  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter() //decorado para ser exposto para elem pais

  constructor() { 
    this.atualizaRodada()
    // (tiramos esse codigo repedito e encapsulamos)
    //this.rodadaFrase = this.frases[this.rodada]//this.frases[0] assim seria estatico. 
  } 

  ngOnInit() {
  }

  ngOnDestroy(){
   
  }

  public atualizaResposta(resposta: Event): void { //capturar os evento e enviar para o componente
    this.resposta = (<HTMLInputElement>resposta.target).value
   // console.log(this.resposta) //desta forma podemos acessar o elem target apartir do disparo
  }

   public verificarResposta(): void {
    
    if(this.rodadaFrase.frasePtBr == this.resposta) {
      //trocar a pergunta da rodada
      this.rodada++

      //progresso
      this.progresso = this.progresso + (100 / this.frases.length) //ou + 25 porque só temos 4 frases
      
      //confirmar se ganhou
      if(this.rodada === 4){
        this.encerrarJogo.emit('Vitória') //
      }
      //atualiza o objeto rodadaFrase
      this.atualizaRodada()
      //trocar >>>>>>this.rodadaFrase = this.frases[this.rodada]
    } else {
      //diminuir a variavel tentativas
      this.tentativas--

      if(this.tentativas === -1){
        this.encerrarJogo.emit('Derrota')
      }
    }
  }

  public atualizaRodada(): void{
    //define a frase da rodada com base em alguma logica
    this.rodadaFrase = this.frases[this.rodada]

     //limpar resposta
     this.resposta = ''

  }

}
