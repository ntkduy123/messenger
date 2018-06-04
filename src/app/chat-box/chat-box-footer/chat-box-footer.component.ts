import { Component, OnInit, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-chat-box-footer',
  templateUrl: './chat-box-footer.component.html',
  styleUrls: ['./chat-box-footer.component.css']
})
export class ChatBoxFooterComponent implements OnInit {

  @Input('sendMessage') sendMessage: Function;

  constructor() { }

  ngOnInit() {
  }

}
