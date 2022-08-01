import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foo',
  standalone: true
})
export class FooPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + ' Piped';
  }

}
