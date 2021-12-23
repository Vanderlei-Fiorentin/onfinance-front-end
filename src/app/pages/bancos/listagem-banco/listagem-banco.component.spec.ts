import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemBancoComponent } from './listagem-banco.component';

describe('ListagemBancoComponent', () => {
  let component: ListagemBancoComponent;
  let fixture: ComponentFixture<ListagemBancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemBancoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
