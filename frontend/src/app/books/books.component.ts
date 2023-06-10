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


  currentPage = 1;
  totalPages = 3;
  selectedItemsPerPage = 8;
  ngOnInit(){

  this.getbooks(this.currentPage,this.selectedItemsPerPage);
  }

  getbooks(page:number,limit:number){
  this.book.getBooks(page,limit).subscribe((res:any)=>{this.books=res.books,this.totalPages=res.totalPages});
  }

  nextPage() {
    this.currentPage++;
   console.log(this.currentPage)
    this.getbooks(this.currentPage,this.selectedItemsPerPage);
  }

  prevPage() {
    this.currentPage--;
    this.getbooks(this.currentPage,this.selectedItemsPerPage);
  }
  onItemsPerPageChange(){
    this.getbooks(this.currentPage,this.selectedItemsPerPage);
  }
  
}
