import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoantransactionsComponent } from './loantransactions.component';

describe('LoantransactionsComponent', () => {
  let component: LoantransactionsComponent;
  let fixture: ComponentFixture<LoantransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoantransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoantransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
