import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TContactUsComponent } from './t-contact-us.component';

describe('TContactUsComponent', () => {
  let component: TContactUsComponent;
  let fixture: ComponentFixture<TContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
