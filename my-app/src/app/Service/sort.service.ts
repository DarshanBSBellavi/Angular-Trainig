import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: true
})
export class SortPipe implements PipeTransform {

  transform(value: any[], propertyName: string): any[] {
    if (propertyName)
      return value.sort((a: any, b: any) => a[propertyName].localeCompare(b[propertyName]));
    else
      return value;
  }

}
