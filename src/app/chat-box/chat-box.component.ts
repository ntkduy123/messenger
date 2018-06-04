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

  constructor() { }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    const chatMessage = new ChatMessage('', '', 'English versions from the 1914 translation by H. Rackham', 'http://demo.g-axon.com/jumbo-admin/images/userAvatar/domnic-harris.jpg');
    this.chatMessageList.push(chatMessage);
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
    console.log(chatItem);
    const textInput = event.currentTarget;
    if (event.keyCode == 13) {
      const message = textInput.value;
      textInput.value = '';
      const chatMessage = new ChatMessage('', '', message, 'http://demo.g-axon.com/jumbo-admin/images/userAvatar/domnic-harris.jpg');
      console.log(this.chatMessageList);
      this.chatMessageList.push(chatMessage);
    }
  }

}
