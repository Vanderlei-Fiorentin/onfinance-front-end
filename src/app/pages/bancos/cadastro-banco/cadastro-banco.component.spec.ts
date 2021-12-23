import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroBancoComponent } from './cadastro-banco.component';

describe('CadastroBancoComponent', () => {
  let component: CadastroBancoComponent;
  let fixture: ComponentFixture<CadastroBancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroBancoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
