import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';
import { Project } from '../../structs/Project';

@Component({
  selector: 'app-chart-data',
  templateUrl: './chart-data.component.html',
  styleUrls: ['./chart-data.component.scss']
})
export class ChartDataComponent implements OnInit {

  constructor(private ProjectService: ProjectsService) { }

  projects: Project[];
  labels: string[];
  ngOnInit() {
    const p = this.ProjectService.getProjects();
    if (p.length > 1) {
      this.projects = p;
    }
    console.log(this.projects);
  }

}
