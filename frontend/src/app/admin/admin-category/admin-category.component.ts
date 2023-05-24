// import { Categories } from './../interfaces/categories';
import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';
// import { Categories} from 'src/app/admin/interfaces/categories'

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
    console.log(cat);
    this.category.createCategory(cat);
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


  deleteCategory(category: Category) {
    const catId: string | undefined = category._id;
    if (catId !== undefined) {
      this.category.deleteCategory(catId).subscribe((res: any) => {
        // Update the categories array after successful deletion
        if (res.success) {
          const index = this.categories.indexOf(category);
          if (index !== -1) {
            this.categories.splice(index, 1);
          }}});} }

  updateCategory(category: Category) {
    const catId: string | undefined = category._id;
    const updatedCatName: string | undefined = category.cat_Name;
    if (catId !== undefined && updatedCatName !== undefined) {
      this.category.updateCategory(catId, updatedCatName)
    }}
}





