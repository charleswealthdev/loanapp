import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetresponseComponent } from './resetresponse.component';

describe('ResetresponseComponent', () => {
  let component: ResetresponseComponent;
  let fixture: ComponentFixture<ResetresponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetresponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
