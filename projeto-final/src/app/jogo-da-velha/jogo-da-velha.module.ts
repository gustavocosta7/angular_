import { JogoDaVelhaRoutingModule } from './jogo-da-velha-routing.module';
import { JogoDaVelhaRoutingComponent } from './jogo-da-velha-routing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { JogoDaVelhaService } from './shared';

@NgModule({
  imports: [CommonModule, JogoDaVelhaRoutingModule],
  declarations: [JogoDaVelhaComponent, JogoDaVelhaRoutingComponent],
  exports: [JogoDaVelhaComponent],
  providers: [JogoDaVelhaService]
})
export class JogoDaVelhaModule {}
