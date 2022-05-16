import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

<<<<<<< HEAD
  transform(items: Array<any>, pokemonSearch: string) {
    if (items && items.length) {
      return items.filter(item => {
        if (pokemonSearch && item.name.toString().toLowerCase().indexOf(pokemonSearch.toLowerCase()) === -1) {
          if (pokemonSearch && item.city.toString().toLowerCase().indexOf(pokemonSearch.toLowerCase()) === -1) {
=======
  transform(items: Array<any>, heroeSearch: string) {
    if (items && items.length) {
      return items.filter(item => {
        if (heroeSearch && item.name.toString().toLowerCase().indexOf(heroeSearch.toLowerCase()) === -1) {
          if (heroeSearch && item.city.toString().toLowerCase().indexOf(heroeSearch.toLowerCase()) === -1) {
>>>>>>> angular
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

