import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserwalletComponent } from './userwallet.component';

describe('UserwalletComponent', () => {
  let component: UserwalletComponent;
  let fixture: ComponentFixture<UserwalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserwalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserwalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
