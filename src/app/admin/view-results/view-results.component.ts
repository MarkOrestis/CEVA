import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';
import { Project } from '../../structs/Project';
import { Chart } from 'chart.js';
import { Subscription } from 'rxjs/Subscription';
import { EventService } from 'src/app/event.service';
import * as d3 from 'd3';


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

  temp_votes: number;
  temp_teamName: string;

  constructor(private projectService: ProjectsService, private eventSvc: EventService) {

    this.amprojectsSubscription = this.eventSvc.amprojectsSubject.subscribe(projects => {
      this.amprojects = [];
      for ( const e of projects) {
        this.amprojects.push(e);
      }
      // console.log(this.amprojects);
      // this.loadAMResults(this.amprojects);

      this.d3TestGraph(this.amprojects);
    });
    this.pmprojectsSubscription = this.eventSvc.pmprojectsSubject.subscribe(projects => {
      this.pmprojects = [];
      for ( const e of projects) {
        this.pmprojects.push(e);
      }
    });

    this.amprojects = this.eventSvc.amprojects;
  }

  d3TestGraph(amProjects: any) {
    const svg = d3.select('svg');
    const w = svg.attr('width');
    const h = svg.attr('height');

    const chart = svg.append('g')
    .attr('transform', 'translate(60, 60)');

    const amProjectsNames = d3.nest()
      .key(d => d.name)
      .rollup(v => v[0].votes)
      .entries(amProjects);

    const yScale = d3.scaleLinear()
      .domain([0, 10]).range([500, 0]);

    // const xScale = d3.scaleLinear()
      // .domain([1, 60]).range([0, 800]);

    const xScale = d3.scaleBand()
      .range([0, w - 100])
      .domain(amProjectsNames.map((s) => s.key))
      .padding(0.2);


    // console.log(this.testArrayNames);
    const yAxis = d3.axisLeft(yScale)
      .ticks(10);

    const xAxis = d3.axisBottom(xScale)
      .ticks(30);
    // const xAxis = d3.axisBottom(xScale)
    //   .ticks(amProjectsNames.length)
    //   .tickFormat((d, i) => this.testArrayNames[i]);

    chart.append('g')
      .call(yAxis);
    chart.append('g')
      .attr('transform', 'translate(0, 500)')
      .call(xAxis)
      .selectAll('text')
        .attr('transform', 'rotate(90)')
        .attr('y', 0)
        .attr('x', 9)
        .attr('dy', '.35em')
        .style('text-anchor', 'start');

    chart.selectAll()
      .data(amProjectsNames)
      .enter()
      .append('g')
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (s) => xScale(s.key))
      .attr('y', (s) => yScale(s.value + 2))
      .attr('height', (s) => h - yScale(s.value + 2) - 250)    // +2 to have a better graph for testing
      .attr('width', xScale.bandwidth())
      .style('fill', '80cbc4');

    svg.append('text')
      .attr('x', -(h / 2) + 60)
      .attr('y', 60 / 2.4)
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .text('Votes');

    svg.append('text')
      .attr('x', w / 2)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text('Capstone Exposition Results');


    // chart.append('g')
    //   .attr('class', 'grid')
    //   .attr('transform', 'translate(0, 750)')
    //   .call(d3.axisBottom()
    //       .scale(xScale)
    //       .tickSize(-h, 0, 0)
    //       .tickFormat(''));

    chart.append('g')
      .attr('class', 'grid')
      .call(d3.axisLeft()
          .scale(yScale)
          .tickSize(-w + 100, 0, 0)
          .tickFormat(''));


    // console.log(amProjectsNames[0].value);
    // console.log(amProjectsNames.length);

  }

  loadAMResults(projects: any) {
    this.chartNames = [];
    this.chartData = [];
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

  ngOnInit() {
    // this.loadAMResults(this.amprojects);

    this.d3TestGraph(this.amprojects);
  }

}
