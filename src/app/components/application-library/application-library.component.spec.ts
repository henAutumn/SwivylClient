import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationLibraryComponent } from './application-library.component';

describe('ApplicationLibraryComponent', () => {
  let component: ApplicationLibraryComponent;
  let fixture: ComponentFixture<ApplicationLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
