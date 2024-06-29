import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TAboutComponent } from './t-about.component';

describe('TAboutComponent', () => {
  let component: TAboutComponent;
  let fixture: ComponentFixture<TAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
