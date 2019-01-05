import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ModalCotacaoComponent } from '../utils';
import { NumeroDirective } from './../directives';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorComponent } from './conversor.component';
import { MoedaService, ConversorService } from './../services';
import { DataBrPipe } from '../pipes';
describe('ConversorComponent', () => {
  let component: ConversorComponent;
  let fixture: ComponentFixture<ConversorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ConversorComponent,
        NumeroDirective,
        DataBrPipe,
        ModalCotacaoComponent
      ],
      providers: [MoedaService, ConversorService],
      imports: [HttpClient, FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
