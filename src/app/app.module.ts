import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopoComponent } from './components/topo/topo.component';
import { PainelComponent } from './components/painel/painel.component';
import { TentativasComponent } from './components/tentativas/tentativas.component';
import { ProgressoComponent } from './components/progresso/progresso.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PainelComponent,
    TentativasComponent,
    ProgressoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
