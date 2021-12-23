import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEventoComponent } from './cadastro-evento.component';

describe('CadastroEventoComponent', () => {
  let component: CadastroEventoComponent;
  let fixture: ComponentFixture<CadastroEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroEventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
