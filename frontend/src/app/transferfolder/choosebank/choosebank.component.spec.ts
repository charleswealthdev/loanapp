import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosebankComponent } from './choosebank.component';

describe('ChoosebankComponent', () => {
  let component: ChoosebankComponent;
  let fixture: ComponentFixture<ChoosebankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosebankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosebankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
