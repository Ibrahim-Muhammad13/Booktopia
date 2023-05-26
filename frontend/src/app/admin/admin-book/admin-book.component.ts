import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Author } from 'src/app/models/author';
import { AutherService } from 'src/app/services/auther.service';
import { BookService } from 'src/app/services/book.service';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-admin-book',
  templateUrl: './admin-book.component.html',
  styleUrls: ['./admin-book.component.css']
})
export class AdminBookComponent {

constructor(private http:HttpClient, private auther:AutherService, private book:BookService, private category:CategoriesService) { }
  books!:Book[]
  authers!:Author[]
  categories!:Category[]
  bookName!:string
  autherId!:string
  categoryId!:number
  rate!:number
  ngOnInit(){
  this.getbooks();
  this.getauthers()
  this.getcategories()
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
  }
  
}


