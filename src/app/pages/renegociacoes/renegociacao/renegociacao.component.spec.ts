import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenegociacaoComponent } from './renegociacao.component';

describe('RenegociacaoComponent', () => {
  let component: RenegociacaoComponent;
  let fixture: ComponentFixture<RenegociacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenegociacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenegociacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
