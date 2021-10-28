import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion3reservaComponent } from './seccion3reserva.component';

describe('Seccion3reservaComponent', () => {
  let component: Seccion3reservaComponent;
  let fixture: ComponentFixture<Seccion3reservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Seccion3reservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Seccion3reservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
