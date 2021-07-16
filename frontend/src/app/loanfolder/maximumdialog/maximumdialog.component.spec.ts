import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaximumdialogComponent } from './maximumdialog.component';

describe('MaximumdialogComponent', () => {
  let component: MaximumdialogComponent;
  let fixture: ComponentFixture<MaximumdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaximumdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaximumdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
