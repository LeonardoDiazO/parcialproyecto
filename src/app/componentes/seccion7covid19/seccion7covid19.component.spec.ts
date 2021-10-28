import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion7covid19Component } from './seccion7covid19.component';

describe('Seccion7covid19Component', () => {
  let component: Seccion7covid19Component;
  let fixture: ComponentFixture<Seccion7covid19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Seccion7covid19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Seccion7covid19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
