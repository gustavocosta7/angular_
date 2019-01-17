import { TarefasRoutingComponent } from './tarefas-routing.component';
import { Routes } from '@angular/router';
import { ListarTarefasComponent } from './listar';
import { CadastrarTarefasComponent } from './cadastrar';
import { EditarTarefasComponent } from './editar';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const TarefaRoutes: Routes = [
  {
    path: 'tarefas',
    component: TarefasRoutingComponent,
    children: [
      {
        path: '',
        component: ListarTarefasComponent
      },
      {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefasComponent
      },
      {
        path: 'tarefas/editar/:id',
        component: EditarTarefasComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(TarefaRoutes)],
  exports: [RouterModule]
})
export class TarefasRoutingModule {}
