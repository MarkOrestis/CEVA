import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expo-map',
  templateUrl: './expo-map.component.html',
  styleUrls: ['./expo-map.component.scss']
})
export class ExpoMapComponent implements OnInit {


  selected = 1;

  constructor() { }

  ngOnInit() {
  }

  clickedRect(select) {
    if (this.selected === select) {
      this.selected = -1;
    } else {
      this.selected = select;
    }
  }

}
