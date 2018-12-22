import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TarefaService } from "./shared";
import { ListarTarefasComponent } from "./listar";

import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CadastrarTarefasComponent } from "./cadastrar";

@NgModule({
  declarations: [ListarTarefasComponent, CadastrarTarefasComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [TarefaService]
})
export class TarefasModule {}
