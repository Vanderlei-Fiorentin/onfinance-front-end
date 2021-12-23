import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRecuperarSenhaComponent } from './info-recuperar-senha.component';

describe('InfoRecuperarSenhaComponent', () => {
  let component: InfoRecuperarSenhaComponent;
  let fixture: ComponentFixture<InfoRecuperarSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoRecuperarSenhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRecuperarSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
