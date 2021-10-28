import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion6contactenosComponent } from './seccion6contactenos.component';

describe('Seccion6contactenosComponent', () => {
  let component: Seccion6contactenosComponent;
  let fixture: ComponentFixture<Seccion6contactenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Seccion6contactenosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Seccion6contactenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
