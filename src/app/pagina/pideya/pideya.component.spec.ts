import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PideyaComponent } from './pideya.component';

describe('PideyaComponent', () => {
  let component: PideyaComponent;
  let fixture: ComponentFixture<PideyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PideyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PideyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
