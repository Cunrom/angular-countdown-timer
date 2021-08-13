import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twodigit'
})
export class TwodigitPipe implements PipeTransform {

  transform(value: number): number | string {
    if (value < 10) {
      return "0" + value;
    } else {
      return value;
    }
  }

}
