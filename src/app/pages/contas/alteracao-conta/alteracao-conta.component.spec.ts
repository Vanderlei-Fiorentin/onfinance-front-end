import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteracaoContaComponent } from './alteracao-conta.component';

describe('AlteracaoContaComponent', () => {
  let component: AlteracaoContaComponent;
  let fixture: ComponentFixture<AlteracaoContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlteracaoContaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteracaoContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
