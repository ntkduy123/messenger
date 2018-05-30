import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBoxFooterComponent } from './chat-box-footer.component';

describe('ChatBoxFooterComponent', () => {
  let component: ChatBoxFooterComponent;
  let fixture: ComponentFixture<ChatBoxFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatBoxFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBoxFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
