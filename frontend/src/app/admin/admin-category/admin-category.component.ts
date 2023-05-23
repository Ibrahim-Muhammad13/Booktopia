import { Component } from '@angular/core';
// import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';
import { Categories} from 'src/app/admin/interfaces/categories'

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent {
  categories:Categories[]= [];
  newCategoryName: string = '';

  constructor(private category:CategoriesService) { }

  ngOnInit() {
    this.category.getCategories().subscribe((res:any)=>this.categories=res.categories)
  }

  saveCategory(cat:string){
      const newCategory: Categories = {
        name: this.newCategoryName,
      };
      this.categories.push(newCategory);
      this.newCategoryName = '';
      this.showForm = false;
      this.category.createCategory(cat);
  }
  
  deleteCategory(index: number) {
    this.categories.splice(index, 1);
  }

  items!: Categories[];
  newItem: Categories = {
    id: 0,
    name: '',
  };
  showForm = false;

  addItem() {
    this.newItem.id = this.items.length + 1;
    this.items.push(this.newItem);
    this.newItem = { id: 0, name: '' };
    this.showForm = false;
  }

  cancelForm() {
    this.newCategoryName = '';
    this.showForm = false;
  }

}





