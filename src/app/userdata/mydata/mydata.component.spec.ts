import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydataComponent } from './mydata.component';

describe('MydataComponent', () => {
  let component: MydataComponent;
  let fixture: ComponentFixture<MydataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MydataComponent]
    });
    fixture = TestBed.createComponent(MydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
