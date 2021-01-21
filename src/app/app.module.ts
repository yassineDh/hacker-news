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
import { DetailsComponent } from './component/details/details.component';
import { ArticlesService } from './services/articles.service';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'ngx-moment';
import { StopClickPropagationDirective } from './directives/stop-click-propagation.directive';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module



@NgModule({
  declarations: [
    AppComponent,
    NewsHeaderComponent,
    NewsComponent,
    ShowComponent,
    AskComponent,
    JobsComponent,
    ShortDetailComponent,
    DetailsComponent,
    StopClickPropagationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MomentModule,
    NgxPaginationModule
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
