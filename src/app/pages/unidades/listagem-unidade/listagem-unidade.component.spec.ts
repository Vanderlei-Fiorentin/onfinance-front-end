import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemUnidadeComponent } from './listagem-unidade.component';

describe('ListagemUnidadeComponent', () => {
  let component: ListagemUnidadeComponent;
  let fixture: ComponentFixture<ListagemUnidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemUnidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
