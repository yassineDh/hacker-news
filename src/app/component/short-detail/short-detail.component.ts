import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-short-detail',
  templateUrl: './short-detail.component.html',
  styleUrls: ['./short-detail.component.scss']
})
export class ShortDetailComponent implements OnInit {

  obj ={
    points:20,
    publisher:"Tester",
    time:35
  }

  constructor() { }

  ngOnInit(): void {
  }

}
