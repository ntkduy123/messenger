import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UsersComponent,
    UserListComponent,
    UserComponent
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
