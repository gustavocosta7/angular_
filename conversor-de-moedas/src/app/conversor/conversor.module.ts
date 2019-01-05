import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoedaService, ConversorService } from './services';
import { ConversorComponent } from './components';

@NgModule({
  declarations: [ConversorComponent],
  imports: [CommonModule, FormsModule],
  exports: [ConversorComponent],
  providers: [MoedaService, ConversorService]
})
export class ConversorModule {}
