import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroBandeiraComponent } from './cadastro-bandeira.component';

describe('CadastroBandeiraComponent', () => {
  let component: CadastroBandeiraComponent;
  let fixture: ComponentFixture<CadastroBandeiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroBandeiraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroBandeiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
