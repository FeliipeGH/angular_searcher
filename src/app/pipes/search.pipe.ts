import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: any[] | null, filter: string | null): any[] {
    if (!list) {
      return [];
    }
    if (!filter) {
      return list;
    }
    return list.filter((user: any) => user.name.toUpperCase().includes(filter.toLocaleUpperCase()));
  }
}
