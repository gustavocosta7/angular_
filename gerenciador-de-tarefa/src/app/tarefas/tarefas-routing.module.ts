import { Routes } from "@angular/router";
import { ListarTarefasComponent } from "./listar";
import { CadastrarTarefasComponent } from "./cadastrar";

export const TarefaRoutes: Routes = [
  {
    path: "tarefas",
    redirectTo: "tarefas/listar"
  },
  {
    path: "tarefas/listar",
    component: ListarTarefasComponent
  },
  {
    path: "tarefas/cadastrar",
    component: CadastrarTarefasComponent
  }
];
