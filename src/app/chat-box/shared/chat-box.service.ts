import { ChatMessage } from './../../shared/ChatMessage';
import { Injectable } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

@Injectable({
  providedIn: 'root'
})
export class ChatBoxService {

  private stompClient;

  constructor() { }

  connect(onMessageReceived) {
    const socket = new SockJS('http://localhost:8080/ws');
    this.stompClient = Stomp.over(socket);
    console.log(this.stompClient);

    this.stompClient.connect({}, () => {
      this.stompClient.subscribe('/topic/public', onMessageReceived);

      this.stompClient.send('/app/chat.addUser',
          {},
          JSON.stringify({sender: 'duynguyen', type: 'JOIN'})
      );
    }, this.onError);
  }

  onError() {
    console.log('Could not connect to WebSocket server. Please refresh this page to try again!');
  }

  sendMessage(message) {
    const chatMessage = {
      sender: 'duynguyen',
      content: message,
      type: 'CHAT'
    };
    this.stompClient.send('/app/chat.sendMessage', {}, JSON.stringify(chatMessage));
  }

}
