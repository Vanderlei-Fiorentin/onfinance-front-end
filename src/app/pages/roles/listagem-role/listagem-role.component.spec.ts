import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemRoleComponent } from './listagem-role.component';

describe('ListagemRoleComponent', () => {
  let component: ListagemRoleComponent;
  let fixture: ComponentFixture<ListagemRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
