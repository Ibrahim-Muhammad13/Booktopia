import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnDestroy } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnDestroy {
  categories: Category[] = [];
  newCategoryName: string = '';
  showForm = false;
  categoryForm!: FormGroup;
  selectedCategory: Category | null = null;
  subscription: Subscription | undefined;

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
    this.fetchCategories();

  }

  fetchCategories() {
    this.subscription = this.category.getCategories().subscribe((res: any) => {
      this.categories = res.categories;
    });
  }


  saveCategory(book:string){
      const newCategory: Category = {
        _id:0,
        cat_Name: this.categoryForm.controls['categoryName']?.value,
      };
      this.category.createCategory(book).subscribe((res: any) => {
      this.fetchCategories();
      this.cancelForm();
    });
      this.categories.push(newCategory);  //push to ui whithout refresh
      this.categoryForm.controls['categoryName'].setValue(''); //empty the input field
      this.showForm = false; // to back again to table when save button clicked
    }

    deleteCategoryFromTabel(index: number) {
      const categoryId = this.categories[index]._id;
      this.categories.splice(index, 1); // delete from table ui
      this.category.deleteCategory(categoryId).subscribe((res: any) => {
        this.fetchCategories();
      });
    }

  items!: Category[];
  newItem: Category = {
    _id: 0,
    cat_Name: '',
  };

  addItem() {
    this.items.push(this.newItem);
    this.showForm = false;
  }

  editCategory(category: Category) {
    this.selectedCategory = category;
    this.newCategoryName = category.cat_Name;
    this.showForm = true;
    this.isNewCategory = false;
  }

  updateCategory(catId: number, cat: string) {
    const newCategoryName = this.categoryForm.controls['categoryName'].value;
    this.category.updateCategory(catId, newCategoryName).subscribe((res: any) => {
    this.fetchCategories();
    this.cancelForm();
    });
  }

  deleteCategory(catId: number, i: number) {
    this.deleteCategoryFromTabel(i);
    console.log(catId);
    this.category.deleteCategory(catId).subscribe((res: any) => {
      this.fetchCategories();
    });

  }

  cancelForm() {
    this.selectedCategory = null;
    this.newCategoryName = '';
    this.showForm = false;
    this.isNewCategory = false;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


  isNewCategory = false;
}

