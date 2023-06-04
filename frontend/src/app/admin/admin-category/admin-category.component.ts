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

  public hasChanges = false;

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
    this.fetchCategories(this.currentPage,this.selectedItemsPerPage);

  }

  fetchCategories(page:number,limit:number) {
    this.subscription = this.category.getCategories(page,limit).subscribe((res: any) => {
      this.categories = res.categories,
      this.totalPages = res.totalPages
      this.currentPage = res.currentPage
    });
  }


  saveCategory(book:string){
      const newCategory: Category = {
        _id:0,
        cat_Name: this.categoryForm.controls['categoryName']?.value,
      };
      this.category.createCategory(book).subscribe((res: any) => {
      this.fetchCategories(this.currentPage,this.selectedItemsPerPage);
      this.cancelForm();
    });
      this.categories.push(newCategory);  //push to ui whithout refresh
      this.categoryForm.controls['categoryName'].setValue(''); //empty the input field
      this.showForm = false; // to back again to table when save button clicked
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
    this.fetchCategories(this.currentPage,this.selectedItemsPerPage);
    this.cancelForm();
    });
  }


  deleteCategoryFromTabel(index: number) {
    const categoryId = this.categories[index]._id;
    this.categories.splice(index, 1); // delete from table ui
    this.category.deleteCategory(categoryId).subscribe((res: any) => {
      this.fetchCategories(this.currentPage,this.selectedItemsPerPage);
    });
  }


  deleteCategory(catId: number, i: number) {
    this.deleteCategoryFromTabel(i);
    console.log(catId);
    this.category.deleteCategory(catId).subscribe((res: any) => {
      this.fetchCategories(this.currentPage,this.selectedItemsPerPage);
    });
  }

  cancelForm() {
    this.selectedCategory = null;
    this.newCategoryName = '';
    this.showForm = false;
    this.isNewCategory = false;
    // if (this.hasChanges) {
    //   const confirmDiscardChanges = confirm('Are you sure you want to discard your changes?');
    //   if (!confirmDiscardChanges) {
    //     return;
    //   }
    // }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


  isNewCategory = false;


  currentPage = 1;
  totalPages = 3;
  selectedItemsPerPage = 4;
 

  nextPage() {
    this.currentPage++;
   console.log(this.currentPage)
    this.fetchCategories(this.currentPage,this.selectedItemsPerPage);
  }

  prevPage() {
    this.currentPage--;
    this.fetchCategories(this.currentPage,this.selectedItemsPerPage);
  }
  onItemsPerPageChange(){
    this.fetchCategories(this.currentPage,this.selectedItemsPerPage);
  }
}

