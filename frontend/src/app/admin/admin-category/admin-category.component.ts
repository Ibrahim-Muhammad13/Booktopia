import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent {
  categories:Category[]= [];
  newCategoryName: string = '';

  constructor(private category:CategoriesService) { }

  ngOnInit() {
    this.category.getCategories().subscribe((res:any)=>this.categories=res.categories);

  }


  saveCategory(cat:string){
      const newCategory: Category = {
        cat_Name: this.newCategoryName,
      };
      this.categories.push(newCategory);
      this.newCategoryName = '';
      console.log(cat);
      this.category.createCategory(cat);
      this.showForm = false;  // to back again to table when save button clicked
  }

  deleteCategory(index: number) {
    this.categories.splice(index, 1);
  }

  items!: Category[];
  newItem: Category = {

    cat_Name: '',
  };
  showForm = false;

  addItem() {

    this.items.push(this.newItem);

    this.showForm = false;
  }

  cancelForm() {
    this.newCategoryName = '';
    this.showForm = false;
  }

}





