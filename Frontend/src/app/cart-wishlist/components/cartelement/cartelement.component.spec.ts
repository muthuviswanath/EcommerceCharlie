import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartelementComponent } from './cartelement.component';

describe('CartelementComponent', () => {
  let component: CartelementComponent;
  let fixture: ComponentFixture<CartelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartelementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
