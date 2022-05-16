import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Array<any>, pokemonSearch: string) {
    if (items && items.length) {
      return items.filter(item => {
        if (pokemonSearch && item.name.toString().toLowerCase().indexOf(pokemonSearch.toLowerCase()) === -1) {
          if (pokemonSearch && item.city.toString().toLowerCase().indexOf(pokemonSearch.toLowerCase()) === -1) {
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

