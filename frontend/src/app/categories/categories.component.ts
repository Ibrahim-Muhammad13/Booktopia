import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CategoriesService } from '../services/categories.service';
// import { Categories} from '../admin/interfaces/categories'

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
        console.log(this.categories); // Add this line to check the content of categories
      });
  }
  }
