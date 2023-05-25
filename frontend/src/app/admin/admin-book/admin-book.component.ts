import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Author } from 'src/app/models/author';
import { AutherService } from 'src/app/services/auther.service';
import { BookService } from 'src/app/services/book.service';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-book',
  templateUrl: './admin-book.component.html',
  styleUrls: ['./admin-book.component.css']
})
export class AdminBookComponent {
  books!:Book[]
  authers!:Author[]
  categories!:Category[]
  bookName!:string
  autherId!:string
  categoryId!:number
  rate!:number
  showForm = false;
  selectedCategory: Category | null = null;
  newCategoryName: string = '';
  isNewCategory = false;
  subscription: Subscription | undefined;
  categoryForm!: FormGroup;


constructor(private http:HttpClient, private auther:AutherService, private book:BookService, private category:CategoriesService) { }

  ngOnInit(){
  this.getbooks();
  this.getauthers();
  this.getcategories();
  this.fetchCategories();
  }
  getauthers(){
    this.auther.getAllauther().subscribe((res:any)=>this.authers=res)
  }
  getbooks(){
  this.book.getBooks().subscribe((res:any)=>this.books=res)
  }
  getcategories(){
  this.category.getCategories().subscribe((res:any)=>this.categories=res.categories)
  }

  addBook(){
    // console.log(this.autherId)
    this.book.addBook(this.bookName,this.autherId,this.categoryId,this.rate)
    this.getbooks();
    this.bookName = '';
    this.autherId = '';
    this.categoryId = 0;
    this.rate = 0;
    this.cancelForm();
  }

  editCategory(category: Category) {
    this.selectedCategory = category;
    this.newCategoryName = category.cat_Name;
    this.showForm = true;
    this.isNewCategory = false;
  }

  updateBook(catId: number) {
    const newCategoryName = this.categoryForm.controls['categoryName'].value;
    console.log(newCategoryName);

    
  }

  fetchCategories() {
    this.subscription = this.category.getCategories().subscribe((res: any) => {
      this.categories = res.categories;
    });
  }

  deleteCategoryFromTabel(index: number) {
    const categoryId = this.categories[index]._id;
    this.categories.splice(index, 1); // delete from table ui
    this.category.deleteCategory(categoryId).subscribe((res: any) => {
      this.fetchCategories();
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

}


