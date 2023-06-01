import { Component } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
books!:any[];
word!:string
  constructor(private book:BookService) { }

  searchBooks(searchTerm: string){
    this.books = [];
    console.log(searchTerm);
    this.book.searchBooks(searchTerm).subscribe((books: any) => {
      this.books = books;
    });
  }
}
