import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  articles =[];

  constructor(private articleService :ArticlesService) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(elts => {
      this.articles = elts.articles;
      console.dir(this.articles);

    })
  }

}
