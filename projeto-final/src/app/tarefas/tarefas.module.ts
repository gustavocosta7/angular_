import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService, TarefaConcluidaDirective } from './shared';
import { ListarTarefasComponent } from './listar';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarTarefasComponent } from './cadastrar';
import { EditarTarefasComponent } from './editar';
import { TarefasRoutingModule } from './tarefas-routing.module';
import { TarefasRoutingComponent } from './tarefas-routing.component';

@NgModule({
  declarations: [
    ListarTarefasComponent,
    CadastrarTarefasComponent,
    EditarTarefasComponent,
    TarefaConcluidaDirective,
    TarefasRoutingComponent
  ],
  imports: [CommonModule, RouterModule, FormsModule, TarefasRoutingModule],
  providers: [TarefaService]
})
export class TarefasModule {}
