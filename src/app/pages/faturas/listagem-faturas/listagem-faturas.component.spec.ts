import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemFaturasComponent } from './listagem-faturas.component';

describe('ListagemFaturasComponent', () => {
  let component: ListagemFaturasComponent;
  let fixture: ComponentFixture<ListagemFaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemFaturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemFaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
