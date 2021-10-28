import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion4nosotrosComponent } from './seccion4nosotros.component';

describe('Seccion4nosotrosComponent', () => {
  let component: Seccion4nosotrosComponent;
  let fixture: ComponentFixture<Seccion4nosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Seccion4nosotrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Seccion4nosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
