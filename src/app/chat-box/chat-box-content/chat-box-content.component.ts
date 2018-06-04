import { Component, OnInit, OnChanges } from '@angular/core';
import { Input } from '@angular/core';
import { ChatMessage } from '../../shared/ChatMessage';

@Component({
  selector: 'app-chat-box-content',
  templateUrl: './chat-box-content.component.html',
  styleUrls: ['./chat-box-content.component.css']
})
export class ChatBoxContentComponent implements OnInit, OnChanges {

  @Input() chatMessageList;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {

  }

}
