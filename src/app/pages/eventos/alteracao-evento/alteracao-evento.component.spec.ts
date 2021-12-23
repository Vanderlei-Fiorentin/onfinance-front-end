import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteracaoEventoComponent } from './alteracao-evento.component';

describe('AlteracaoEventoComponent', () => {
  let component: AlteracaoEventoComponent;
  let fixture: ComponentFixture<AlteracaoEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlteracaoEventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteracaoEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
