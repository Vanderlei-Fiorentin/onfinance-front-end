import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemLancamentoComponent } from './listagem-lancamento.component';

describe('ListagemLancamentoComponent', () => {
  let component: ListagemLancamentoComponent;
  let fixture: ComponentFixture<ListagemLancamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemLancamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemLancamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
