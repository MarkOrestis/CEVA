import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-toolbar',
  templateUrl: './admin-toolbar.component.html',
  styleUrls: ['./admin-toolbar.component.scss']
})
export class AdminToolbarComponent implements OnInit {
  selected = 'option2';
  cities = [];

  selectedCity: any;
  selectedCityIds: string[];
  selectedCityName = 'Vilnius';
  selectedCityId: number;
  selectedUserIds: number[];

  config = {
    displayKey: 'description',
    search: true,
    height: 'auto',
    placeholder: 'Select',
    customComparator: () => {},
    limitTo: this.cities.length
  };

  constructor() { }

  ngOnInit() {
    this.cities.push('city1');
    this.cities.push('city2');
  }

}
