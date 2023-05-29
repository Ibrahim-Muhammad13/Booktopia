import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starRating'
})
export class StarRatingPipe implements PipeTransform {

  transform(rate: number): string {
    const starCount = rate;
    const stars = '⭐'.repeat(starCount);
    return `${stars} (${starCount.toFixed(1)})`;
  }
  
}
