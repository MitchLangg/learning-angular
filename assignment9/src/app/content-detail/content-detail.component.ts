import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {ContentService} from '../services/content.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
id: number;
details: Content;
  constructor(private service: ContentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(getId => { this.id = + getId.get('id');
    this.service.getItem(this.id).subscribe(details => {
      this.details = details;
    });
    });
  }

}
