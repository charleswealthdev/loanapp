import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatwithusComponent } from './chatwithus.component';

describe('ChatwithusComponent', () => {
  let component: ChatwithusComponent;
  let fixture: ComponentFixture<ChatwithusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatwithusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatwithusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
