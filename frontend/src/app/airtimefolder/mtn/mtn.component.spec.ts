import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtnComponent } from './mtn.component';

describe('MtnComponent', () => {
  let component: MtnComponent;
  let fixture: ComponentFixture<MtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
