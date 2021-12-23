import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarRolesComponent } from './cadastrar-roles.component';

describe('CadastrarRolesComponent', () => {
  let component: CadastrarRolesComponent;
  let fixture: ComponentFixture<CadastrarRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
