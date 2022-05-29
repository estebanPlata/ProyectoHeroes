import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Array<any>, heroeSearch: string) {
    if (items && items.length) {
      return items.filter(item => {
        if (heroeSearch && item.name.toString().toLowerCase().indexOf(heroeSearch.toLowerCase()) === -1 ) {
            if (heroeSearch && item.city.toString().toLowerCase().indexOf(heroeSearch.toLowerCase()) === -1) {
            return false;
          }
          return true;
        }
        return true;
      });
    } else {
      return items;
    }
  }

}

