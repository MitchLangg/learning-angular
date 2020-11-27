import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {Pipe, PipeTransform} from '@angular/core';
import {ContentService} from '../services/content.service';

@Pipe({name: 'filter'})
export class FilterClass implements PipeTransform{
  transform(content: Content[], type: string): any{
    return content.filter(p => p.type.includes(type));
  }
}

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})


export class ContentListComponent implements OnInit {
  displayId: number;
  output = '';
  originalTitle = '';
  public array = new Array <Content>();
  constructor(private service: ContentService) {

  }
  public titleCheck(input: string): any {
    if (this.array.filter(p => p.title.toLowerCase().includes(input.toLowerCase())).length !== 0) {
      this.output = 'That an existing title!';
    }else {
      this.output = 'Not an existing title :(';
    }
  }

  public clickForId(item: Content): void {
    this.displayId = item.id;
    console.log(this.displayId);
  }
  ngOnInit(): void {
    this.service.getContent().subscribe(item => this.array = item); 
  }
}
