import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'threedigit'
})
export class ThreedigitPipe implements PipeTransform {

  transform(value: number): number | string {
    if (value < 100) {
      return "0" + value;
    } else if (value < 10) {
      return "00" + value;
    } else {
      return value;
    }
  }

}
