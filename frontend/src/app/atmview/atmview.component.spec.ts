import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmviewComponent } from './atmview.component';

describe('AtmviewComponent', () => {
  let component: AtmviewComponent;
  let fixture: ComponentFixture<AtmviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
