import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import {ContentListComponent, FilterClass} from './content-list/content-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HoverStyleDirective } from './hover-style.directive';
import { MessagesComponent } from './messages/messages.component';
import { CreateComponentComponent, CreateOpenComponentComponent } from './create-component/create-component.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService} from './in-memory-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import {RouterModule} from '@angular/router';
import { InvalidurlComponent } from './invalidurl/invalidurl.component';

@NgModule({
    declarations: [
        AppComponent,
        ContentCardComponent,
        ContentListComponent,
        FilterClass,
        HoverStyleDirective,
        MessagesComponent,
        CreateComponentComponent,
      CreateOpenComponentComponent,
      ContentDetailComponent,
      InvalidurlComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false,
        delay: 1000
      }),
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
