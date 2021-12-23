import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteracaoCategoriaComponent } from './alteracao-categoria.component';

describe('AlteracaoCategoriaComponent', () => {
  let component: AlteracaoCategoriaComponent;
  let fixture: ComponentFixture<AlteracaoCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlteracaoCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteracaoCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
