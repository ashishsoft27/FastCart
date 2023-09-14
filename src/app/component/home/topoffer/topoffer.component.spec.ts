import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopofferComponent } from './topoffer.component';

describe('TopofferComponent', () => {
  let component: TopofferComponent;
  let fixture: ComponentFixture<TopofferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopofferComponent]
    });
    fixture = TestBed.createComponent(TopofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
