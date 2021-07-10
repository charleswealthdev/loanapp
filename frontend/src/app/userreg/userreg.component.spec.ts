import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserregComponent } from './userreg.component';

describe('UserregComponent', () => {
  let component: UserregComponent;
  let fixture: ComponentFixture<UserregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
