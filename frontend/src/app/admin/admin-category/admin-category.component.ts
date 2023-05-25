
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
  selectedCategory: Category | null = null;
  subscription: Subscription | undefined;

  constructor(private category: CategoriesService) {}

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.subscription = this.category.getCategories().subscribe((res: any) => {
      this.categories = res.categories;
    });
  }

  saveCategory(cat: string) {
    console.log(cat);
    this.category.createCategory(cat).subscribe((res: any) => {
      this.fetchCategories();
      this.cancelForm();
    });
  }

  editCategory(category: Category) {
    this.selectedCategory = category;
    this.newCategoryName = category.cat_Name;
    this.showForm = true;
    this.isNewCategory = false;
  }

  updateCategory(catId: number, cat: string) {
    this.category.updateCategory(catId, cat).subscribe((res: any) => {
      this.fetchCategories();
      this.cancelForm();
    });
  }

  deleteCategory(catId: number) {
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

  showForm = false;
  isNewCategory = false;
}
