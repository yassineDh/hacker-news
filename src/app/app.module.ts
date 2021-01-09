import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsHeaderComponent } from './component/news-header/news-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsComponent } from './component/news/news.component';
import { ShowComponent } from './component/show/show.component';
import { AskComponent } from './component/ask/ask.component';
import { JobsComponent } from './component/jobs/jobs.component';
import { ShortDetailComponent } from './component/short-detail/short-detail.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    NewsHeaderComponent,
    NewsComponent,
    ShowComponent,
    AskComponent,
    JobsComponent,
    ShortDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
