import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent {
  categories:Category[]= [];
  newCategoryName: string = '';
  showForm = false;
  categoryForm!: FormGroup;

  // constructor(private category:CategoriesService) { }

  constructor(private fb : FormBuilder, private category:CategoriesService){
    this.categoryForm = this.fb.group({
      categoryName: [null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
        Validators.pattern(/^[^0-9].*/)
      ]]
      });
  }

  ngOnInit() {
    this.category.getCategories().subscribe((res:any)=>this.categories=res.categories);
  }


  saveCategory(){
      console.log(this.categories);
      const newCategory: Category = {
        cat_Name: this.categoryForm.controls['categoryName']?.value,
      };

      this.category.createCategory(this.categoryForm.controls['categoryName']?.value);
      this.category.createCategory(newCategory);
      this.categories.push(newCategory);  //push to ui whithout refresh
      this.categoryForm.controls['categoryName'].setValue(''); //empty the input field
      this.showForm = false; // to back again to table when save button clicked
    }

  deleteCategory(index: number) {
    this.categories.splice(index, 1);
  }


  items!: Category[];
  newItem: Category = {

    cat_Name: '',
  };

  addItem() {

    this.items.push(this.newItem);

    this.showForm = false;
  }

  cancelForm() {
    this.newCategoryName = '';
    this.showForm = false;
  }

}





