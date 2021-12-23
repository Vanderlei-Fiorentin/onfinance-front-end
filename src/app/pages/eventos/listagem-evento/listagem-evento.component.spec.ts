import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemEventoComponent } from './listagem-evento.component';

describe('ListagemEventoComponent', () => {
  let component: ListagemEventoComponent;
  let fixture: ComponentFixture<ListagemEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemEventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
