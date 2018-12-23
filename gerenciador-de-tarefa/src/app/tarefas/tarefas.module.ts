import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TarefaService, TarefaConcluidaDirective } from "./shared";
import { ListarTarefasComponent } from "./listar";

import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CadastrarTarefasComponent } from "./cadastrar";
import { EditarTarefasComponent } from "./editar";

@NgModule({
  declarations: [
    ListarTarefasComponent,
    CadastrarTarefasComponent,
    EditarTarefasComponent,
    TarefaConcluidaDirective
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [TarefaService]
})
export class TarefasModule {}
