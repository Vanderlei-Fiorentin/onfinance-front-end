import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteracaoUsuarioComponent } from './alteracao-usuario.component';

describe('AlteracaoUsuarioComponent', () => {
  let component: AlteracaoUsuarioComponent;
  let fixture: ComponentFixture<AlteracaoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlteracaoUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteracaoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
