import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-expo-information',
  templateUrl: './expo-information.component.html',
  styleUrls: ['./expo-information.component.scss']
})
export class ExpoInformationComponent implements OnInit {


  expoName: String = '';

  expoNameSubscription: Subscription;

  constructor(private projectService: ProjectsService) {
    this.expoNameSubscription = this.projectService.currentExpoTag.subscribe(expoName => {
      this.expoName = expoName;
    });
  }

  ngOnInit() {
    this.expoName = this.projectService.getCurrentExpositionTag();
  }



}
