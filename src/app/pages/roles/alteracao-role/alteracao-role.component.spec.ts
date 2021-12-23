import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteracaoRoleComponent } from './alteracao-role.component';

describe('AlteracaoRoleComponent', () => {
  let component: AlteracaoRoleComponent;
  let fixture: ComponentFixture<AlteracaoRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlteracaoRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteracaoRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
