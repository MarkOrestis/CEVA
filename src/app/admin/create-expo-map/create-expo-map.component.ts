import {Component, OnInit, ElementRef, Input, SimpleChange, OnChanges, OnDestroy} from '@angular/core';

import {D3Service, D3, D3DragEvent, D3ZoomEvent, Selection} from 'd3-ng2-service';
import {phyllotaxis, PhyllotaxisPoint, ProjectPoint} from './phyllotaxis';
import {EventService} from '../../event.service';
import {Subscription} from 'rxjs/Subscription';
import {Project} from '../../structs/Project';

const key = 'mapPoints';

@Component({
  selector: 'app-create-expo-map',
  templateUrl: './create-expo-map.component.html',
  styleUrls: ['./create-expo-map.component.scss']
})
export class CreateExpoMapComponent implements OnInit, OnChanges, OnDestroy {

  amprojects = [];
  amprojectsSubscription: Subscription;
  pmprojects = [];
  pmprojectsSubscription: Subscription;

  selectedEvent;
  selectedEventSubscription: Subscription;

  projects = [];

  projectSelected: Project;

  @Input() width: number = 400;
  @Input() height: number = 400;
  @Input() phylloRadius: number = 7;
  @Input() pointRadius: number = 15;



  private d3: D3;
  private parentNativeElement: any;
  private d3Svg: Selection<SVGSVGElement, any, null, undefined>;
  private d3G: Selection<SVGGElement, any, null, undefined>;
  private points: PhyllotaxisPoint[];
  private location: ProjectPoint[];

  constructor(element: ElementRef, d3Service: D3Service, private eventSvc: EventService) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;

    this.amprojectsSubscription = this.eventSvc.amprojectsSubject.subscribe(projects => {
      this.amprojects = [];
      for ( const e of projects) {
        this.amprojects.push(e);
      }
    });
    this.pmprojectsSubscription = this.eventSvc.pmprojectsSubject.subscribe(projects => {
      this.pmprojects = [];
      for ( const e of projects) {
        this.pmprojects.push(e);
      }
    });
    this.selectedEventSubscription = this.eventSvc.selectedEventSubject.subscribe(event => {
      this.selectedEvent = event;
    });
    this.amprojects = this.eventSvc.amprojects;
    this.pmprojects = this.eventSvc.pmprojects;
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (
      (changes['width'] && !changes['width'].isFirstChange()) ||
      (changes['height'] && !changes['height'].isFirstChange()) ||
      (changes['phylloRadius'] && !changes['phylloRadius'].isFirstChange()) ||
      (changes['pointRadius'] && !changes['pointRadius'].isFirstChange())
    ) {
      if (this.d3Svg.empty && !this.d3Svg.empty()) {
        this.changeLayout();
      }
    }

  }

  ngOnDestroy() {
    if (this.d3Svg.empty && !this.d3Svg.empty()) {
      this.d3Svg.selectAll('*').remove();
    }
  }

  ngOnInit() {

    this.amprojects = this.eventSvc.amprojects;
    this.pmprojects = this.eventSvc.pmprojects;
    let d3 = this.d3;
    let d3ParentElement: Selection<HTMLElement, any, null, undefined>;
    let d3G: Selection<SVGGElement, any, null, undefined>;

    this.location = [];

    function zoomed(this: SVGSVGElement) {
      let e: D3ZoomEvent<SVGSVGElement, any> = d3.event;
      d3G.attr('transform', e.transform.toString());
    }

    function dragged(this: SVGCircleElement, d: PhyllotaxisPoint) {
      let e: D3DragEvent<SVGCircleElement, PhyllotaxisPoint, PhyllotaxisPoint> = d3.event;
      d3.select(this).attr('cx', d.x = e.x).attr('cy', d.y = e.y);
    }

    if (this.parentNativeElement !== null) {


      d3ParentElement = d3.select(this.parentNativeElement);

      this.d3Svg = d3ParentElement.select<SVGSVGElement>('svg');

      this.d3Svg.attr('width', this.width);
      this.d3Svg.attr('height', this.height);

      this.points = d3.range(1).map(phyllotaxis(this.width, this.height, this.phylloRadius));

      d3G = this.d3G = this.d3Svg.append<SVGGElement>('g');

      this.d3G.selectAll<SVGCircleElement, any>('circle')
        .data(this.location)
        .enter().append<SVGCircleElement>('circle')
        .attr('cx', function (d) { return d.x; })
        .attr('cy', function (d) { return d.y; })
        .attr('fill-opacity', .25)
        .attr('r', this.pointRadius)
        .call(d3.drag<SVGCircleElement, PhyllotaxisPoint>().on('drag', dragged));

      this.d3Svg.call(d3.zoom<SVGSVGElement, any>()
        .scaleExtent([1 / 2, 8])
        .on('zoom', zoomed));
    }

  }

  private changeLayout() {
    this.d3Svg
      .attr('width', this.width)
      .attr('height', this.height);
    this.points = this.d3.range(2000).map(phyllotaxis(this.width, this.height, this.phylloRadius));

    this.d3G.selectAll<SVGCircleElement, PhyllotaxisPoint>('circle')
      .data(this.points)
      .attr('cx', function (d) { return d.x; })
      .attr('cy', function (d) { return d.y; })
      .attr('fill-opacity', .25)
      .attr('r', this.pointRadius);
  }

  addPoint() {


    let d3 = this.d3;
    let d3ParentElement: Selection<HTMLElement, any, null, undefined>;
    let d3G: Selection<SVGGElement, any, null, undefined>;

    this.location.push(new ProjectPoint(13, 15, this.projectSelected));

    this.d3Svg.selectAll('*').remove();

    function zoomed(this: SVGSVGElement) {
      let e: D3ZoomEvent<SVGSVGElement, any> = d3.event;
      d3G.attr('transform', e.transform.toString());
    }

    function dragged(this: SVGCircleElement, d: ProjectPoint) {
      let e: D3DragEvent<SVGCircleElement, ProjectPoint, ProjectPoint> = d3.event;
      d3.select(this).attr('cx', d.x = e.x).attr('cy', d.y = e.y);
    }

    if (this.parentNativeElement !== null) {


      d3ParentElement = d3.select(this.parentNativeElement);

      this.d3Svg = d3ParentElement.select<SVGSVGElement>('svg');

      this.d3Svg.attr('width', this.width);
      this.d3Svg.attr('height', this.height);

      this.points = d3.range(1).map(phyllotaxis(this.width, this.height, this.phylloRadius));

      let e = this.projectSelected;

      d3G = this.d3G = this.d3Svg.append<SVGGElement>('g');

      this.d3G.selectAll<SVGCircleElement, any>('circle')
        .data(this.location)
        .enter().append<SVGCircleElement>('circle')
        .attr('fill-opacity', .25)
        .attr('cx', function (d) { return d.x; })
        .attr('cy', function (d) { return d.y; })
        .attr('r', this.pointRadius)
        .call(d3.drag<SVGCircleElement, ProjectPoint>().on('drag', dragged));

      this.d3G.selectAll<SVGCircleElement, any>('circle')
        .data(this.location)
        .enter()
        .append<SVGTextElement>('text')
        .text(function(d){return e.teamNumber});


      this.d3Svg.call(d3.zoom<SVGSVGElement, any>()
        .scaleExtent([1 / 2, 8])
        .on('zoom', zoomed));
    }
  }

  saveData() {
   localStorage.setItem(key, JSON.stringify(this.location));
  }
}
