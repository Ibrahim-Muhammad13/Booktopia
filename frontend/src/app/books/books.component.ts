import { Component, Input } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
books!:any[]

  constructor(private book:BookService) { }

  ngOnInit(){
  
  this.getbooks();
  }

  getbooks(){
  this.book.getBooks().subscribe((res:any)=>this.books=res)
  }

  // filterBooksByCategory(catId: number) {
  //   this.books.filter((book: Book) => book.categoryId === catId);
  // }
}