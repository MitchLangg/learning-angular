import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import {ContentListComponent, FilterClass} from './content-list/content-list.component';
import {FormsModule} from '@angular/forms';
import { HoverStyleDirective } from './hover-style.directive';

@NgModule({
    declarations: [
        AppComponent,
        ContentCardComponent,
        ContentListComponent,
        FilterClass,
        HoverStyleDirective
    ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
