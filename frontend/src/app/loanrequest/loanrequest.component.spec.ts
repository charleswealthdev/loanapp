import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanrequestComponent } from './loanrequest.component';

describe('LoanrequestComponent', () => {
  let component: LoanrequestComponent;
  let fixture: ComponentFixture<LoanrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
