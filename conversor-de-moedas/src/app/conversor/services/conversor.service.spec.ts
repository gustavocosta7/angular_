import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ConversorService } from './conversor.service';

describe('ConversorService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [ConversorService],
      imports: [HttpClient]
    })
  );

  it('should be created', () => {
    const service: ConversorService = TestBed.get(ConversorService);
    expect(service).toBeTruthy();
  });
});
