import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarRolesComponent } from './gerenciar-roles.component';

describe('GerenciarRolesComponent', () => {
  let component: GerenciarRolesComponent;
  let fixture: ComponentFixture<GerenciarRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
