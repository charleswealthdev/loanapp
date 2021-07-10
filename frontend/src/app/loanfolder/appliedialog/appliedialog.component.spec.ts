import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedialogComponent } from './appliedialog.component';

describe('AppliedialogComponent', () => {
  let component: AppliedialogComponent;
  let fixture: ComponentFixture<AppliedialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
