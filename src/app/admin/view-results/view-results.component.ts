import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';
import { Project } from '../../structs/Project';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-view-results',
  templateUrl: './view-results.component.html',
  styleUrls: ['./view-results.component.scss']
})
export class ViewResultsComponent implements OnInit {

  constructor(private projectService: ProjectsService) { }

  projects: Project[];
  chartNames = [];
  chartData = [];
  chart: any = [];
  maxVotes: number;
  temp_votes: number;
  temp_teamName: string;

  ngOnInit() {
    const p = this.projectService.getProjects();
    let maxVotes = -1;
    if (p.length > 1) {
      this.projects = p;

      this.projects.forEach(project => {
        this.temp_votes = project.votes;
        this.temp_teamName = project.title;
        this.chartNames.push(this.temp_teamName);
        this.chartData.push(this.temp_votes);
        if (this.temp_votes >= maxVotes) {
          maxVotes = this.temp_votes;
        }
      });

    }
    console.log(this.chartData);
    maxVotes += 2;
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.chartNames,
        datasets: [{
            label: 'number of votes',
            data: this.chartData,
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            borderColor: 'rgba(255, 0, 0, 1)',
            borderWidth: 1
        }]
      },
      options: {
        scales: {
            yAxes: [{
              ticks: {
                  fixedStepSize: 1,
                  max: maxVotes
              }
            }]
        }
      }
    });
  }

}
