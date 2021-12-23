import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteracaoUnidadeComponent } from './alteracao-unidade.component';

describe('AlteracaoUnidadeComponent', () => {
  let component: AlteracaoUnidadeComponent;
  let fixture: ComponentFixture<AlteracaoUnidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlteracaoUnidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteracaoUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
