import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherbanksComponent } from './otherbanks.component';

describe('OtherbanksComponent', () => {
  let component: OtherbanksComponent;
  let fixture: ComponentFixture<OtherbanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherbanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherbanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
