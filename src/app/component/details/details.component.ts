import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  source:any = {};

  ngOnInit(): void {
    if(history.state.data.length > 0){
      this.source=history.state.data[0];
      console.log("#####");

      console.log(this.source);

      console.log("#####");

    }

    console.log("---------------");

    console.log(this.source);

    console.log("------------------");
  }

}
