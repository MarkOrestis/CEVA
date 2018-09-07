import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../app/projects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CEVA';
  tabIndex = 0;

  constructor(public projectsService: ProjectsService) {

  }

  ngOnInit() {
    console.log('app on in it');
    this.projectsService.loadProjects();
  }
  setTabIndex(index) {
    this.tabIndex = index;
  }
}
