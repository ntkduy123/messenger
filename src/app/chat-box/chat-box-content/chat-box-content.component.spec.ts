import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBoxContentComponent } from './chat-box-content.component';

describe('ChatBoxContentComponent', () => {
  let component: ChatBoxContentComponent;
  let fixture: ComponentFixture<ChatBoxContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatBoxContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBoxContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
