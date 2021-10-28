import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion5pideyaComponent } from './seccion5pideya.component';

describe('Seccion5pideyaComponent', () => {
  let component: Seccion5pideyaComponent;
  let fixture: ComponentFixture<Seccion5pideyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Seccion5pideyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Seccion5pideyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
