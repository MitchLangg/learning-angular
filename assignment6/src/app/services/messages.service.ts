import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messageArray: string[] = [];

  constructor() { }

  add(message: string): void {
    this.messageArray.push(message);
  }

  clear(): void {
    this.messageArray = [];
  }
}
