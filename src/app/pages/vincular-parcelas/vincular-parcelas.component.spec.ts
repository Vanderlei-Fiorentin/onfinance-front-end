import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VincularParcelasComponent } from './vincular-parcelas.component';

describe('VincularParcelasComponent', () => {
  let component: VincularParcelasComponent;
  let fixture: ComponentFixture<VincularParcelasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VincularParcelasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VincularParcelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
