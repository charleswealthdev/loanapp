import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmcompComponent } from './atmcomp.component';

describe('AtmcompComponent', () => {
  let component: AtmcompComponent;
  let fixture: ComponentFixture<AtmcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
