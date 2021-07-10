import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcctTypeComponent } from './acct-type.component';

describe('AcctTypeComponent', () => {
  let component: AcctTypeComponent;
  let fixture: ComponentFixture<AcctTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcctTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcctTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
