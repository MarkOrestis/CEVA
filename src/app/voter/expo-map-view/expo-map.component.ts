import {Component, OnInit, ElementRef, Input, SimpleChange, OnChanges, OnDestroy} from '@angular/core';
import {D3Service, D3, D3DragEvent, D3ZoomEvent, Selection} from 'd3-ng2-service';
import {phyllotaxis, PhyllotaxisPoint, ProjectPoint} from '../../admin/create-expo-map/phyllotaxis';

@Component({
  selector: 'app-expo-map',
  templateUrl: './expo-map.component.html',
  styleUrls: ['./expo-map.component.scss']
})
export class ExpoMapComponent implements OnInit, OnDestroy {

 xValue = 0;
 yValue = 0;


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

  constructor(element: ElementRef, d3Service: D3Service) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
  }

  ngOnDestroy() {
    if (this.d3Svg.empty && !this.d3Svg.empty()) {
      this.d3Svg.selectAll('*').remove();
    }
  }

  ngOnInit() {
    let d3 = this.d3;
    let d3ParentElement: Selection<HTMLElement, any, null, undefined>;
    let d3G: Selection<SVGGElement, any, null, undefined>;
    let xValue = this.xValue;
    let yValue = this.yValue;


    this.location = JSON.parse(localStorage.getItem('mapPoints'));

    function clicked(d: ProjectPoint) {
      console.log('project title ' + d.project.description);
    }

    if (this.parentNativeElement !== null) {


      d3ParentElement = d3.select(this.parentNativeElement);

      this.d3Svg = d3ParentElement.select<SVGSVGElement>('svg');

      this.d3Svg.attr('width', this.width);
      this.d3Svg.attr('height', this.height);


      d3G = this.d3G = this.d3Svg.append<SVGGElement>('g');

      this.d3G.selectAll<SVGCircleElement, any>('circle')
        .data(this.location)
        .enter().append<SVGCircleElement>('circle')
        .attr('fill-opacity', .25)
        .attr('cx', function (d) { return d.x; })
        .attr('cy', function (d) { return d.y; })
        .attr('r', this.pointRadius)
        .on('click', clicked);
    }


  }

  getLocationPoints() {
  }
}
