import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voter-view',
  templateUrl: './voter-view.component.html',
  styleUrls: ['./voter-view.component.scss']
})
export class VoterViewComponent implements OnInit {

  tabIndex = 0;

  constructor() { }

  ngOnInit() {
  }

  setTabIndex(index) {
    this.tabIndex = index;
  }
}
