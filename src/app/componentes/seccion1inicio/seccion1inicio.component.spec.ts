import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion1inicioComponent } from './seccion1inicio.component';

describe('Seccion1inicioComponent', () => {
  let component: Seccion1inicioComponent;
  let fixture: ComponentFixture<Seccion1inicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Seccion1inicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Seccion1inicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
