import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',//podemos passar como classe (.seletor) ou como atributo ([app-topo] e adiciona em uma div por ex no html)
  templateUrl: './topo.component.html',//obrigado sempre um template associado a um componente se n da erro
  styleUrls: ['./topo.component.css']
  //styles: ['.exemplo { color: red}']
 // template: '<p>aqui tambem pode ser inserido o template ou view (ou com brackets)inline</p>'
})//decorar a classe pra informar que a classe existe

export class TopoComponent implements OnInit { //OnInit implementa um ciclo de vida do componente. implementado por padrão

    public titulo: string = 'Aprendendo Inglês' 
  constructor() { }

  ngOnInit() {
  }

}
