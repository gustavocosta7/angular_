import { HttpClientModule } from '@angular/common/http';
import { ConversorRoutingModule } from './conversor-routing.module';
import { ConversorRoutingComponent } from './conversor-routing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './services';
import { NumeroDirective } from './directives';
import { ModalCotacaoComponent } from './utils';
import { DataBrPipe } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ConversorRoutingModule
  ],
  declarations: [
    ConversorComponent,
    NumeroDirective,
    ModalCotacaoComponent,
    DataBrPipe,
    ConversorRoutingComponent
  ],
  exports: [ConversorComponent],
  providers: [MoedaService, ConversorService]
})
export class ConversorModule {}
