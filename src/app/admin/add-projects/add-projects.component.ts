import { Component, OnInit } from '@angular/core';
import { Project } from '../../structs/Project';
import { ProjectsService } from '../../projects.service';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.scss']
})


export class AddProjectsComponent implements OnInit {


  afuConfig = {
    uploadAPI: {
      url: 'https://example-file-upload-api'
    }
  };

  projectsSubscription: Subscription;

  projects: Project[] = [];
  projectColumns: string[] = ['number', 'name'];

  constructor(private projectService: ProjectsService) {
    this.projectsSubscription = this.projectService.currentProjects.subscribe(projects => {
      this.projects = [];
      for ( const e of projects) {
        this.projects.push(e);
      }
      console.log(this.projects);
    });
   }

  ngOnInit() {
    this.projects = this.projectService.projects;
  }

}
