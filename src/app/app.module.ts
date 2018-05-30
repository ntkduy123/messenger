import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { ChatBoxModule } from './chat-box/chat-box.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UsersModule,
    ChatBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
