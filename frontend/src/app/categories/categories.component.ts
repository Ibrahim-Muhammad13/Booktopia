import { Component } from '@angular/core';
import { Category } from '../models/category';
import { BookService } from '../services/book.service';
import { CategoriesService } from '../services/categories.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
categories!:Category[];

  constructor(private Categories:CategoriesService) { }

  ngOnInit() {
    this.Categories.getCategories()
      .subscribe((res: any) => {
        this.categories = res.categories;
      });
  }




}
