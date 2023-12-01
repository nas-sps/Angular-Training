import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'products',
  pure: true
})
export class ProductsPipe implements PipeTransform {

  transform(value: any[], search: string): any[] {
    const regex = new RegExp(search.toLowerCase(), 'i');;
    const filteredData = value.filter((e) => regex.test(e.name.toLowerCase()));
    
    return filteredData;
  }

}
