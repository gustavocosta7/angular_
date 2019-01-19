import { JogoDaVelhaRoutingComponent } from './jogo-da-velha-routing.component';
import { Routes, RouterModule } from '@angular/router';

import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { NgModule } from '@angular/core';

export const JogoDaVelhaRoutes: Routes = [
  {
    path: 'jogo-da-velha',
    component: JogoDaVelhaRoutingComponent,
    children: [
      {
        path: '',
        component: JogoDaVelhaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(JogoDaVelhaRoutes)],
  exports: [RouterModule]
})
export class JogoDaVelhaRoutingModule {}
