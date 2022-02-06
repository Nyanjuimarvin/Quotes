import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timesince'
})
export class TimesincePipe implements PipeTransform {

  transform(value: any): any {
    return moment(value).fromNow();
  }
}
