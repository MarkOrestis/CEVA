import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';
import { Chart } from 'chart.js';
import { Subscription } from 'rxjs/Subscription';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-view-results',
  templateUrl: './view-results.component.html',
  styleUrls: ['./view-results.component.scss']
})
export class ViewResultsComponent implements OnInit {

  amprojects = [];
  amprojectsSubscription: Subscription;
  pmprojects = [];
  pmprojectsSubscription: Subscription;
  projects: any[];
  chartNames = [];
  chartData = [];
  chart: any = [];
  maxVotes: number;
  public selectedVal: string;

  temp_votes: number;
  temp_teamName: string;

  constructor(private projectService: ProjectsService, private eventSvc: EventService) {}

  ngOnInit() {
    this.selectedVal = 'option1';
    this.amprojects = this.eventSvc.getamProjects();
    this.pmprojects = this.eventSvc.getpmProjects();
    // if (this.eventSvc.getVoterViewingSession() === 'am') {
    //   console.log('am');
    //   this.projects = this.amprojects;
    //   console.log(this.projects)
    // } else if (this.eventSvc.getVoterViewingSession() === 'pm') {
    //   console.log('pm');
    //   this.projects = this.pmprojects;
    // }


    this.amprojectsSubscription = this.eventSvc.amprojectsSubject.subscribe(projects => {
      console.log(this.eventSvc.amprojectsSubject);
      this.loadAMResults(this.eventSvc.amprojects);
    });
    this.pmprojectsSubscription = this.eventSvc.pmprojectsSubject.subscribe(projects => {
      this.pmprojects = [];
      for ( const e of projects) {
        this.pmprojects.push(e);
      }
    });
    // if (this.selectedVal)
    this.loadAMResults(this.eventSvc.amprojects);
  }


  // public onValChange(val: string) {
  //   this.selectedVal = val;
  //   if (val === 'option1') {
  //     this.eventSvc.changeVoterViewingSession('am');
  //   } else if (val === 'option2') {
  //     this.eventSvc.changeVoterViewingSession('pm');
  //     this.loadResults()
  //   }
  // }

  loadAMResults(projects: any) {
    this.chartNames = [];
    this.chartData = [];
    // this.chartData = [8,3,2,16,8,4,5,4,5,6,7,8,9,4,3,10,12,17,15,8,4,2,1,2,3,4,5,6,3,2];
    let maxVotes = -1;
    if (projects.length > 1) {
      this.projects = projects;

      this.projects.forEach(project => {
        this.temp_votes = project.votes;
        this.temp_teamName = project.name;
        this.chartNames.push(this.temp_teamName);
        this.chartData.push(this.temp_votes);
        if (this.temp_votes >= maxVotes) {
          maxVotes = this.temp_votes;
        }
      });

    }
    maxVotes += 2;
    this.chart = new Chart('canvas', {
      type: 'horizontalBar',
      data: {
        labels: this.chartNames,
        datasets: [{
            label: 'number of votes',
            data: this.chartData,
            backgroundColor: 'steelblue',
            borderWidth: 1
        }]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
              ticks: {
                  fixedStepSize: 1,
                  beginAtZero: true
                }
            }],
            yAxes: [{
              gridLines: {
                display: false
              }
            }]
        }
      }
    });
  }
}
