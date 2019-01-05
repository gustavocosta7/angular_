import { ConversorService } from './../services/conversor.service';
import { MoedaService } from './../services';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Moeda, Conversao, ConversaoResponse } from '../models';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {
  private moedas: Moeda[];
  private conversao: Conversao;
  private possuiErro: boolean;
  private conversaoResponse: ConversaoResponse;

  @ViewChild('conversaoForm') conversaoForm: NgForm;

  constructor(
    private moedaService: MoedaService,
    private conversorService: ConversorService
  ) {}

  ngOnInit() {
    this.moedas = this.moedaService.listarTodas();
    this.init();
  }

  /**
   * Efetua a chamada para a conversão dos valores.
   *
   * @return void
   */

  init(): void {
    this.conversao = new Conversao('USD', 'BRL', null);
    this.possuiErro = false;
  }

  /**
   * Efetua a chamada para a conversão dos valores.
   *
   * @return void
   */

  converter(): void {
    if (this.conversaoForm.form.valid) {
      this.conversorService
        .converter(this.conversao)
        .subscribe(
          response => (this.conversaoResponse = response),
          error => (this.possuiErro = true)
        );
    }
  }
}
