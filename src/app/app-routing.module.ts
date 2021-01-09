import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AskComponent } from './component/ask/ask.component';
import { JobsComponent } from './component/jobs/jobs.component';
import { NewsComponent } from './component/news/news.component';
import { ShowComponent } from './component/show/show.component';

const routes: Routes = [
  { path: 'news', component: NewsComponent },
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'show', component: ShowComponent },
  { path: 'ask', component: AskComponent },
  { path: 'jobs', component: JobsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
