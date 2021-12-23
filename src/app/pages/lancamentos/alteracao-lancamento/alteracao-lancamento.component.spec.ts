import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteracaoLancamentoComponent } from './alteracao-lancamento.component';

describe('AlteracaoLancamentoComponent', () => {
  let component: AlteracaoLancamentoComponent;
  let fixture: ComponentFixture<AlteracaoLancamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlteracaoLancamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteracaoLancamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
