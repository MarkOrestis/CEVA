import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';
import { Project } from '../../structs/Project';

@Component({
  selector: 'app-chart-data',
  templateUrl: './chart-data.component.html',
  styleUrls: ['./chart-data.component.scss']
})
export class ChartDataComponent implements OnInit {

  constructor(private projectService: ProjectsService) { }

  projects: Project[];

  ngOnInit() {
    const p = this.projectService.getProjects();
    if (p.length > 1) {
      this.projects = p;
      this.projects.forEach(project => {
        // this.labels.push(project.title);
        console.log(project.title);
        // console.log(this.labels);
      });
    }
    // console.log(this.labels);
    // console.log(this.votes);
  }

}
