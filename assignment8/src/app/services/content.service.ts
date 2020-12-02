import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Content} from '../helper-files/content-interface';
import {MessagesService} from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };


  constructor(private messages: MessagesService, private http: HttpClient) {}
  // @ts-ignore
  getItems(): Observable<Content[]> {
    this.messages.add('Service: Got Items');
    this.http.get<Content[]>('api/item').subscribe(item => console.log(item));
    return this.http.get<Content[]>('api/item');
    }

  updateItem(content: Content): Observable<any> {
    return this.http.put('api/item', content, this.httpOptions);
  }

  addItem(content: Content): Observable<any> {
    return this.http.post<Content>('api/item', content, this.httpOptions);
  }
}
