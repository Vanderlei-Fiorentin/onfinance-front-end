import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemBandeiraComponent } from './listagem-bandeira.component';

describe('ListagemBandeiraComponent', () => {
  let component: ListagemBandeiraComponent;
  let fixture: ComponentFixture<ListagemBandeiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemBandeiraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemBandeiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
