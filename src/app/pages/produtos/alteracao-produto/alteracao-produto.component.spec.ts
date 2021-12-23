import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteracaoProdutoComponent } from './alteracao-produto.component';

describe('AlteracaoProdutoComponent', () => {
  let component: AlteracaoProdutoComponent;
  let fixture: ComponentFixture<AlteracaoProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlteracaoProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteracaoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
