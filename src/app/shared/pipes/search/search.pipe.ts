import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe example of Angular 2 which searchs and filter arrays by a query string.
 * You could see how it used on home features template for example.
 */
@Pipe({
  name: 'searchPipe',
  pure: false
})
export class SearchPipe implements PipeTransform {
  transform(data: any[], searchText: string, key: string): any[] {
    if (!data || searchText === ''){
      return data;
    }

    searchText = searchText.toLowerCase();
    return data.filter(item => {
      if (!item[key]){
        return;
      }
      return item[key].toLowerCase().indexOf(searchText) !== -1;
    });
  }
}
