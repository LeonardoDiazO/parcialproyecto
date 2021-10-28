import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion2cartaComponent } from './seccion2carta.component';

describe('Seccion2cartaComponent', () => {
  let component: Seccion2cartaComponent;
  let fixture: ComponentFixture<Seccion2cartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Seccion2cartaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Seccion2cartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
