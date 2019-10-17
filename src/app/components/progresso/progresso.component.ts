import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {


  @Input() public progresso: number = 0 //decorar com @Input para transferir de pai para filho dados (adicionar ao core


  constructor() { }

  ngOnInit() {
  }

}
