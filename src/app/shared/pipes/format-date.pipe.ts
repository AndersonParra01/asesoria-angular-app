import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
  transform(value: Date) {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(value, 'dd/MM/yyyy HH:mm:ss');
  }
}
