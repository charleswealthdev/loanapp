import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsufficientdialogComponent } from './insufficientdialog.component';

describe('InsufficientdialogComponent', () => {
  let component: InsufficientdialogComponent;
  let fixture: ComponentFixture<InsufficientdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsufficientdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsufficientdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
