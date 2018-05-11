import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickConnectComponent } from './quick-connect.component';

describe('QuickConnectComponent', () => {
  let component: QuickConnectComponent;
  let fixture: ComponentFixture<QuickConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
