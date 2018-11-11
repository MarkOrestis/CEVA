import {Project} from '../../structs/Project';

export interface PhyllotaxisPoint {
  x: number;
  y: number;
}

export class ProjectPoint {

  constructor(x: number, y :number, project: Project) {
    this.x = x;
    this.y = y;
    this.project = project;
  }

  x: number;
  y: number;
  project: Project;
}

/**
 * A helper function to obtain a generator for a phyllotaxis layout of points
 */
export function phyllotaxis(width: number, height: number, radius: number): ((i: number) => PhyllotaxisPoint) {
  let theta = Math.PI * (3 - Math.sqrt(5));
  return function (i: number) {
    let r: number = radius * Math.sqrt(i), a = theta * i;
    return {
      x: width / 2 + r * Math.cos(a),
      y: height / 2 + r * Math.sin(a)
    };
  };
}
