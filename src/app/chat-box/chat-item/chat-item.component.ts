import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from '../../shared/ChatMessage';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.css']
})
export class ChatItemComponent implements OnInit {

  @Input() chatMessage: ChatMessage;

  constructor() { }

  ngOnInit() {
  }

}
