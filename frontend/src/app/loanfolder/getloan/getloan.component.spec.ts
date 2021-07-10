import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetloanComponent } from './getloan.component';

describe('GetloanComponent', () => {
  let component: GetloanComponent;
  let fixture: ComponentFixture<GetloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
