import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatItemComponent } from './chat-item/chat-item.component';
import { ChatBoxContentComponent } from './chat-box-content/chat-box-content.component';
import { ChatBoxHeaderComponent } from './chat-box-header/chat-box-header.component';
import { ChatBoxFooterComponent } from './chat-box-footer/chat-box-footer.component';
import { ChatBoxComponent } from './chat-box.component';
import { UsersModule } from '../users/users.module';

@NgModule({
  imports: [
    CommonModule,
    UsersModule
  ],
  declarations: [
    ChatItemComponent,
    ChatBoxContentComponent,
    ChatBoxHeaderComponent,
    ChatBoxFooterComponent,
    ChatBoxComponent
  ],
  exports: [
    ChatBoxComponent
  ]
})
export class ChatBoxModule { }
