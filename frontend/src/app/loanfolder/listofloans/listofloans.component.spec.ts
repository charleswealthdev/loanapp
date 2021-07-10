import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofloansComponent } from './listofloans.component';

describe('ListofloansComponent', () => {
  let component: ListofloansComponent;
  let fixture: ComponentFixture<ListofloansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofloansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofloansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
