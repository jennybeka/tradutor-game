import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Coracao } from '../../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})

export class TentativasComponent implements OnInit, OnChanges {

//representam as imagens/ nao precisamos mais pq tornamos dinamico
  // public coracaoVazio: string = "/assets/coracao_vazio.png"
  // public coracaoCheio: string = "/assets/coracao_cheio.png"

  @Input() public tentativas: number 

  public coracoes: Array<Coracao> = [
    new Coracao(true),new Coracao(true), new Coracao(true) //(true, 'A' , 'B') seriam assim passando os demais parametros, mas os parametros possuem um default
  ]

  
  constructor() {
   
  } 

  ngOnChanges(){ //sempre que existe input de dados este metodo é disparado/quando os val sao alterados eles tbm são executados
    //this.tentativas
    //this.coracoes.length
    if(this.tentativas !== this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas 
      this.coracoes[indice - 1].cheio = false
    }
  } 

  ngOnInit() { //Responsavel pelo ciclo de vida do componente
  }

}
