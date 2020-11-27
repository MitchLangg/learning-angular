import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Content} from '../helper-files/content-interface';
import {array} from '../helper-files/contentDb';
import {MessagesService} from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  constructor(private messages: MessagesService) {

  }

  getContent(): Observable<Content[]> {
    this.messages.add('Content Retrieved!');
    // @ts-ignore
    return of(array);
  }
}
