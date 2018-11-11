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

  static ohmy: Number = 0;
  amprojects = [];
  amprojectsSubscription: Subscription;
  pmprojects = [];
  pmprojectsSubscription: Subscription;
  projects: any[];
  chartNames = [];
  chartData = [];
  chart: any = [];
  maxVotes: number;
  selVal: string;

  temp_votes: number;
  temp_teamName: string;

  constructor(private projectService: ProjectsService, private eventSvc: EventService) { }

  ngOnInit() {
    this.selVal = 'option1';
    this.amprojects = this.eventSvc.getamProjects();
    this.pmprojects = this.eventSvc.getpmProjects();
    if (this.eventSvc.getVoterViewingSession() === 'am') {
      this.projects = this.amprojects;
      console.log('0', this.projects);
    } else if (this.eventSvc.getVoterViewingSession() === 'pm') {
      console.log('pm');
      this.projects = this.pmprojects;
    }
    // happens only once when you first load the page
    this.amprojectsSubscription = this.eventSvc.amprojectsSubject.subscribe(() => {
      console.log('1', this.eventSvc.amprojects);
      // defaults to loading am results first
      this.loadResults(this.eventSvc.amprojects, 'AM');
    });
    this.pmprojectsSubscription = this.eventSvc.pmprojectsSubject.subscribe(projects => {
      this.pmprojects = [];
      for (const e of projects) {
        this.pmprojects.push(e);
      }
    });
    if (ViewResultsComponent.ohmy !== 0) {
      this.loadResults(this.eventSvc.amprojects, 'AM');
    }
    ViewResultsComponent.ohmy = +ViewResultsComponent.ohmy + 1;
  }


  public onChange(val: string) {
    this.chart.destroy();
    this.selVal = val;
    if (val === 'option1') {
      this.eventSvc.changeVoterViewingSession('am');
      this.loadResults(this.eventSvc.amprojects, 'AM');
    } else if (val === 'option2') {
      this.eventSvc.changeVoterViewingSession('pm');
      this.loadResults(this.eventSvc.pmprojects, 'PM');
    }
  }

  loadResults(projects: any, time: string) {
    this.chartNames = [];
    this.chartData = [];
    this.chartData = [8, 3, 2, 16, 8, 4, 5, 4, 5, 6, 7, 8, 9, 4, 3, 10, 12, 17, 15, 8, 4, 2, 1, 2, 3, 4, 5, 6, 3, 2];
    const chartColor = [];
    let maxVotes = -1;
    if (projects.length > 1) {
      this.projects = projects;

      this.projects.forEach((project, index) => {
        this.temp_votes = project.votes;
        this.temp_teamName = project.name;
        this.chartNames.push(this.temp_teamName);
        this.chartData.push(this.temp_votes);
        if (this.temp_votes >= maxVotes) {
          maxVotes = this.temp_votes;
        }

        if (index % 2 === 0) {
          chartColor.push('steelblue');
        } else {
          chartColor.push('coral');
        }
      });
    }
    maxVotes += 2;
    this.chart = new Chart('canvas', {
      type: 'horizontalBar',
      data: {
        labels: this.chartNames,
        datasets: [{
          label: '# of votes',
          data: this.chartData,
          backgroundColor: chartColor,
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: '# of Votes',
          fontSize: 18
        },
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            ticks: {
              fixedStepSize: 1,
              beginAtZero: true,
            }
          }],
          yAxes: [{
            ticks: {
              fontSize: 14
            },
            gridLines: {
              display: false
            }
          }]
        }
      }
    });
  }
}
