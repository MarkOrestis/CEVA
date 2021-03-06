import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    // console.log('sup');
    // if (!items) {
    //   return [];
    // }
    // console.log('supper');
    // console.table(items);
    // const items = someData.filter(x => x.title);
    // console.log(items[0]);
    // console.log(items[1]);
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    // console.log('Filter Pipe Testing');
searchText = searchText.toLowerCase();
return items.filter( it => {
      return it.name.toString().toLowerCase().includes(searchText); // Searches specifically for title of project.
    });
   }
}
