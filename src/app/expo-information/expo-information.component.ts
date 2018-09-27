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
  expoJsonSubscription: Subscription;
  currentExpoJson = {};
  description: String = '';
  location: String = '';

  constructor(private projectService: ProjectsService) {
    this.projectService.loadCurrentExpoInfo();
    this.currentExpoJson = this.projectService.getCurrentExpoJson();
    this.expoNameSubscription = this.projectService.currentExpoTag.subscribe(expoName => {
      this.expoName = expoName;
    });
    this.expoJsonSubscription = this.projectService.currentExpoJsonSubject.subscribe(expoJson => {
      this.currentExpoJson = expoJson;
      this.description = this.currentExpoJson['description'];
      this.location = this.currentExpoJson['location'];
    });
  }

  ngOnInit() {
    this.expoName = this.projectService.getCurrentExpositionTag();
  }



}
