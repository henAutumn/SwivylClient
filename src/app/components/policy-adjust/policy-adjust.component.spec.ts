import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyAdjustComponent } from './policy-adjust.component';

describe('PolicyAdjustComponent', () => {
  let component: PolicyAdjustComponent;
  let fixture: ComponentFixture<PolicyAdjustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyAdjustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyAdjustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
