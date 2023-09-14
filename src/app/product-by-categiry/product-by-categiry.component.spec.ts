import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByCategiryComponent } from './product-by-categiry.component';

describe('ProductByCategiryComponent', () => {
  let component: ProductByCategiryComponent;
  let fixture: ComponentFixture<ProductByCategiryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductByCategiryComponent]
    });
    fixture = TestBed.createComponent(ProductByCategiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
