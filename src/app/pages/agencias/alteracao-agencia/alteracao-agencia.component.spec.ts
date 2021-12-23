import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteracaoAgenciaComponent } from './alteracao-agencia.component';

describe('AlteracaoAgenciaComponent', () => {
  let component: AlteracaoAgenciaComponent;
  let fixture: ComponentFixture<AlteracaoAgenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlteracaoAgenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteracaoAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
