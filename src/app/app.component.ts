import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CEVA';
  tabIndex = 0;

  setTabIndex(index) {
    this.tabIndex = index;
  }
}
