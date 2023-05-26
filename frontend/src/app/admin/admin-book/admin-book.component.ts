import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Author } from 'src/app/models/author';
import { AutherService } from 'src/app/services/auther.service';
import { BookService } from 'src/app/services/book.service';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';
import { Subscription ,Observer } from 'rxjs';
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
  selectedBook: Book | null = null;
  newBookName: string = '';
  isNewBook = false;
  subscription: Subscription | undefined;
  bookForm!: FormGroup;


constructor(private http:HttpClient, private auther:AutherService, private book:BookService, private category:CategoriesService) { }

  ngOnInit(){
  this.getbooks();
  this.getauthers();
  this.getcategories();


  }
  saveBook() {
    const newBook: Book = {
      _id: 0,
      name: this.bookName,
      rate: this.rate,
      authorId: this.autherId,
      categoryId: this.categoryId,
      image: ''
    };
    this.books.push(newBook);
    this.cancelForm();
    this.book.addBook(this.bookName, this.autherId, this.categoryId, this.rate)
  }

  getauthers(){
    this.auther.getAllauther().subscribe((res:any)=>this.authers=res);
  }

  getbooks(){
  this.book.getBooks().subscribe((res:any)=>this.books=res);
  }

  getcategories(){
  this.category.getCategories().subscribe((res:any)=>this.categories=res.categories);
  }

  editBook(book: Book) {
    this.selectedBook = book;
    this.newBookName = book.name;
    this.showForm = true;
    this.isNewBook = false;
  }


  updateBook(bookId: number, bookName: string) {
    const updatedBook: Book = {
      _id: bookId,
      name: bookName,
      rate: this.rate,
      authorId: this.autherId,
      categoryId: this.categoryId,
      image: ''
    };

    this.book.updateBook(bookId, bookName).subscribe({
      next: (res: any) => {
        console.log('Book updated successfully:', res);
        // Find the index of the updated book in the array
        const index = this.books.findIndex((book) => book._id === bookId);
        if (index !== -1) {
          // Update the book in the array
          this.books[index] = updatedBook;
        }
        this.cancelForm();
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }





  deleteBook(bookId: number, index: number) {
    this.deleteBookFromTable(index);
    this.book.deleteBook(bookId)
  }

  deleteBookFromTable(index: number) {
    this.books.splice(index, 1);
  }

  cancelForm() {
    this.selectedBook = null;
    this.newBookName = '';
    this.showForm = false;
    this.isNewBook = false;
  }

  ngOnDestroy() {
    if (this.subscription) {
    this.subscription.unsubscribe();
    }
    }
}
