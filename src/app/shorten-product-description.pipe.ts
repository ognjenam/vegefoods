import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenProductDescription'
})
export class ShortenProductDescriptionPipe implements PipeTransform {

  transform(value: any){

    if(value.length > 30)
    {
      return value.substr(0, 30) + "..."
    }

    return value;
  }

}
