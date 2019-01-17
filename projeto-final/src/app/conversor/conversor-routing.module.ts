import { Routes, RouterModule } from '@angular/router';

import { ConversorComponent } from './components';
import { NgModule } from '@angular/core';

export const ConversorRoutes: Routes = [
  {
    path: 'conversor-moedas',
    component: ConversorComponent,
    children: [
      {
        path: '',
        component: ConversorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ConversorRoutes)],
  exports: [RouterModule]
})
export class ConversorRoutingModule {}
