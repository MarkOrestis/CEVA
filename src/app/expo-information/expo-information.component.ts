import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-expo-information',
  templateUrl: './expo-information.component.html',
  styleUrls: ['./expo-information.component.scss']
})
export class ExpoInformationComponent implements OnInit {


  expoNameSubscription: Subscription;
  expoJsonSubscription: Subscription;
  currentExpoJson = {};
  description: String = '';
  location: String = '';
  expoTitle: String = '';

  constructor(private projectService: ProjectsService) {
    // this.projectService.loadCurrentExpoInfo();
    // this.currentExpoJson = this.projectService.getCurrentExpoJson();
    // this.expoJsonSubscription = this.projectService.currentExpoJsonSubject.subscribe(expoJson => {
    //   this.currentExpoJson = expoJson;
    //   this.description = this.currentExpoJson['description'];
    //   this.location = this.currentExpoJson['location'];
    //   this.expoTitle = this.currentExpoJson['name'];
    // });
  }

  ngOnInit() {
  }



}
