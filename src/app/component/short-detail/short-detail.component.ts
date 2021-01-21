import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';
@Component({
  selector: 'app-short-detail',
  templateUrl: './short-detail.component.html',
  styleUrls: ['./short-detail.component.scss'],
})
export class ShortDetailComponent implements OnInit {
  @Input() news: any;
  @Input() indexElt: any;

  obj: any;

  constructor(private sourceService: ArticlesService,private router: Router) {}

  ngOnInit(): void {}

  async testLog() {
    this.sourceService
      .getSources().subscribe(data =>{
        let sources = data.sources;
        this.obj = sources.filter((s: any) => s.name == this.news.source.name);
        this.router.navigate(['/details',this.news.source.name], {state: {data:this.obj}});
      })
    }

    // console.log(await this.obj);


  testLogOut(urlOut: any): void {
    console.log('out');
    window.open(urlOut, '_blank');
  }

}
