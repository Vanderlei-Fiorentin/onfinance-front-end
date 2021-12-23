import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAgenciaComponent } from './cadastro-agencia.component';

describe('CadastroAgenciaComponent', () => {
  let component: CadastroAgenciaComponent;
  let fixture: ComponentFixture<CadastroAgenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroAgenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
