import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteracaoBancoComponent } from './alteracao-banco.component';

describe('AlteracaoBancoComponent', () => {
  let component: AlteracaoBancoComponent;
  let fixture: ComponentFixture<AlteracaoBancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlteracaoBancoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteracaoBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
