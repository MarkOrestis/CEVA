import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-nav-bar',
  templateUrl: './bottom-nav-bar.component.html',
  styleUrls: ['./bottom-nav-bar.component.scss']
})
export class BottomNavBarComponent implements OnInit {


  currentlySelectedTab: String = 'vote';

  constructor() { }



  ngOnInit() {
  }


  clickedNavButton(event) {
    this.currentlySelectedTab = event;
  }

  currentlyVote() {
    return this.currentlySelectedTab === 'vote';
  }

  currentlyMap() {
    return this.currentlySelectedTab === 'map';
  }

  currentlyHome() {
    return this.currentlySelectedTab === 'home';
  }
}
