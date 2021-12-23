import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemCategoriaComponent } from './listagem-categoria.component';

describe('ListagemCategoriaComponent', () => {
  let component: ListagemCategoriaComponent;
  let fixture: ComponentFixture<ListagemCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
