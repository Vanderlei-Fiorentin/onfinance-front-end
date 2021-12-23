import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemAgenciaComponent } from './listagem-agencia.component';

describe('ListagemAgenciaComponent', () => {
  let component: ListagemAgenciaComponent;
  let fixture: ComponentFixture<ListagemAgenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemAgenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
