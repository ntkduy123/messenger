import { ChatBoxService } from './shared/chat-box.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ChatItemComponent } from './chat-item/chat-item.component';
import { ChatMessage } from '../shared/ChatMessage';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  @ViewChild('chatBoxHeader', {read: ElementRef})
  private chatBoxHeader: ElementRef;

  @ViewChild('chatBoxContent', {read: ElementRef})
  private chatBoxContent: ElementRef;

  @ViewChild('chatBoxFooter', {read: ElementRef})
  private chatBoxFooter: ElementRef;

  public chatMessageList: ChatMessage[] = [];

  constructor(private chatBoxService: ChatBoxService) {
    this.chatBoxService.connect(this.onMessageReceived.bind(this));
  }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
  }

  onResize(event) {
    this.resizeChatContent(event);
  }

  resizeChatContent(event) {
    const chatBoxHeaderHeight = this.chatBoxHeader.nativeElement.offsetHeight;
    const chatBoxFooterHeight = this.chatBoxFooter.nativeElement.offsetHeight;
    const chatBoxHeight = event.currentTarget.innerHeight;

    this.resize(this.chatBoxContent, chatBoxHeight - chatBoxHeaderHeight - chatBoxFooterHeight);
  }

  resize(element: ElementRef, newHeight) {
    element.nativeElement.style.height = newHeight + 'px';
  }

  sendMessage(event) {
    const chatItem = new ChatItemComponent();
    const textInput = event.currentTarget;
    if (event.keyCode === 13) {
      const message = textInput.value;
      textInput.value = '';
      const avatar = 'http://demo.g-axon.com/jumbo-admin/images/userAvatar/domnic-harris.jpg';
      const chatMessage = new ChatMessage('', message, avatar, 'CHAT', 'duynguyen');
      this.chatMessageList.push(chatMessage);
      this.chatBoxService.sendMessage(message);
    }
  }

  onMessageReceived(payload) {
    console.log(payload);
    const message = JSON.parse(payload.body);

    if (message.type === 'CHAT' && message.sender !== 'duynguyen') {
      const avatar = 'http://demo.g-axon.com/jumbo-admin/images/userAvatar/domnic-harris.jpg';
      const chatMessage = new ChatMessage('', message.content, avatar, 'CHAT', '');
      this.chatMessageList.push(chatMessage);
    }
  }

}
