import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('Deve retornar o formato da data em BR', () => {
    const pipe = new DataBrPipe();
    expect(pipe.transform('2017-03-31')).toEqual('31/03/2017');
  });
});
