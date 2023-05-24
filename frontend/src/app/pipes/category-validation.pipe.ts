import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'categoryValidation'
})
export class CategoryValidationPipe implements PipeTransform {
  transform(name: string, categories: string[], newCategoryName: string): boolean {
    if (newCategoryName === '') {
      return false;
    }
    if (categories.includes(name)) {
      return false;
    }
    if (/^\d/.test(name)) {
      return false;
    }
    return true;
  }
}
// transform(value: string, categories: Category[]): boolean {
//   if (!value || value.length < 4 || value.length > 20 || /^\d/.test(value)|| categories.some((c: Category) => c.cat_Name.toLowerCase() === value.toLowerCase()))
//   {
//     return false;
//   }
//   return true;
// }
  // transform(value: string, categories: Category[], currentCategory: string): boolean {
  //   return categories.some((c: Category) => c.cat_Name.toLowerCase() === value.toLowerCase() && c.cat_Name !== currentCategory);
  // }


