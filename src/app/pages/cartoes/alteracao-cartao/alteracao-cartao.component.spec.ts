import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteracaoCartaoComponent } from './alteracao-cartao.component';

describe('AlteracaoCartaoComponent', () => {
  let component: AlteracaoCartaoComponent;
  let fixture: ComponentFixture<AlteracaoCartaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlteracaoCartaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteracaoCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
