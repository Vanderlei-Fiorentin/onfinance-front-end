import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteracaoBandeiraComponent } from './alteracao-bandeira.component';

describe('AlteracaoBandeiraComponent', () => {
  let component: AlteracaoBandeiraComponent;
  let fixture: ComponentFixture<AlteracaoBandeiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlteracaoBandeiraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteracaoBandeiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
