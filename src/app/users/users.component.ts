import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @ViewChild('chatSideNavContent', {read: ElementRef})
  private chatSideNavContent: ElementRef;

  @ViewChild('chatSideNavHeader', {read: ElementRef})
  private chatSideNavHeader: ElementRef;

  constructor() { }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
  }

  onResize(event) {
    this.resizeChatContent(event);
  }
  
  resizeChatContent(event) {
    const chatSideNavHeight = event.currentTarget.innerHeight;
    const chatSideNavHeaderHeight = this.chatSideNavHeader.nativeElement.offsetHeight;

    this.resize(this.chatSideNavContent, chatSideNavHeight - chatSideNavHeaderHeight);
  }

  resize(element: ElementRef, newHeight) {
    element.nativeElement.style.height = newHeight + 'px';
  }

}
