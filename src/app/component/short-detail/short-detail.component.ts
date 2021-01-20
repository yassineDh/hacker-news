import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-short-detail',
  templateUrl: './short-detail.component.html',
  styleUrls: ['./short-detail.component.scss'],
})
export class ShortDetailComponent implements OnInit {
  @Input() news: any;
  @Input() indexElt: any;

  constructor() {}

  ngOnInit(): void {}

  testLog(): void {
    console.log('useeeeer');
  }

  testLogOut(urlOut: any): void {
    console.log('out');
    window.open(urlOut, '_blank');
  }
}
