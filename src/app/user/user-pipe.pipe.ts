import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userPipe'
})
export class UserPipePipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
