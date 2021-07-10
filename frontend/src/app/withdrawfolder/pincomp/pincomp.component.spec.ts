import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PincompComponent } from './pincomp.component';

describe('PincompComponent', () => {
  let component: PincompComponent;
  let fixture: ComponentFixture<PincompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PincompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PincompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
