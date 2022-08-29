import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllproductslistComponent } from './allproductslist.component';

describe('AllproductslistComponent', () => {
  let component: AllproductslistComponent;
  let fixture: ComponentFixture<AllproductslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllproductslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllproductslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
