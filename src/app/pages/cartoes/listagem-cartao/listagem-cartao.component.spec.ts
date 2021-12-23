import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemCartaoComponent } from './listagem-cartao.component';

describe('ListagemCartaoComponent', () => {
  let component: ListagemCartaoComponent;
  let fixture: ComponentFixture<ListagemCartaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemCartaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
