import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VtusComponent } from './vtus.component';

describe('VtusComponent', () => {
  let component: VtusComponent;
  let fixture: ComponentFixture<VtusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VtusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VtusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
