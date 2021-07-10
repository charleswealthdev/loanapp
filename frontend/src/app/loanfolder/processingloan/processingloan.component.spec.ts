import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingloanComponent } from './processingloan.component';

describe('ProcessingloanComponent', () => {
  let component: ProcessingloanComponent;
  let fixture: ComponentFixture<ProcessingloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessingloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessingloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
