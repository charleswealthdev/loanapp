import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyloansComponent } from './myloans.component';

describe('MyloansComponent', () => {
  let component: MyloansComponent;
  let fixture: ComponentFixture<MyloansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyloansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyloansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
