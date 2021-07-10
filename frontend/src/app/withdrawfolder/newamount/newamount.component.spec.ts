import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewamountComponent } from './newamount.component';

describe('NewamountComponent', () => {
  let component: NewamountComponent;
  let fixture: ComponentFixture<NewamountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewamountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewamountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
