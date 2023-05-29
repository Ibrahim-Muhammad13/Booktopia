import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Author } from 'src/app/models/author';
import { AutherService } from 'src/app/services/auther.service';
import { BookService } from 'src/app/services/book.service';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-admin-book',
  templateUrl: './admin-book.component.html',
  styleUrls: ['./admin-book.component.css']
})
export class AdminBookComponent {
  submitBookForm(form : any){}

  books!:Book[]
  authers!:Author[]
  categories!:Category[]
  //  bookName:string = '';
  rate!:number
  autherId!:number
  categoryId!:number
  image!:string


  showForm = false;
  selectedBook: Book | null = null;
  newBookName: string = '';
  isNewBook = false;
  subscription: Subscription | undefined;
  bookForm!: FormGroup;


constructor(private fb:FormBuilder, private http:HttpClient, private auther:AutherService, private book:BookService, private category:CategoriesService) { 
  this.bookForm = this.fb.group({
    bookName: null, 
  })
}

  ngOnInit(){
  this.getbooks();
  this.getauthers();
  this.getcategories();
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


  items!: Book[];
  newItem!: Book;


  addItem() {
    this.items.push(this.newItem);
    this.showForm = false;
  }


  addBook(event: Event) {
    event.preventDefault();
    let fd = new FormData(event.target as HTMLFormElement);
    console.log(fd)
    const newBook: Book = {
      _id: 0,
      name: this.newBookName,
      rate: this.rate,
      authorId: this.autherId,
      categoryId: this.categoryId,
      image: this.image
    };
    this.books.push(newBook);
    // this.book.addBook(fd)
    // this.cancelForm();
  }


  editBook(book: Book) {
    this.selectedBook = book;
    this.newBookName = book.name;
    this.showForm = true;
    this.isNewBook = false;
  }


  updateBook(bookId: number, bookName: string, rate: number, authorId: number, categoryId: number) {
    console.log('Book toti:', bookName);
    const updatedBook: Book = {
      _id: bookId,
      name: bookName,
      rate: this.rate,
      authorId: this.autherId,
      categoryId: categoryId,
      image: ''
    };

    this.book.updateBook(bookId, bookName, rate, authorId, categoryId).subscribe({
      // next: (res: any) => {
      //   console.log('Book updated successfully:', res);
      //   // Find the index of the updated book in the array
      //   const index = this.books.findIndex((book) => book._id === bookId);
      //   if (index !== -1) {
      //     // Update the book in the array
      //     this.books[index] = updatedBook;
      //   }
      // },
      // error: (err: any) => {
      //   console.error(err);
      // }
    });
  }


  deleteBookFromTable(index: number) {
    const bookId = this.books[index]._id;
    this.books.splice(index, 1);  // delete from table ui
    this.book.deleteBook(bookId).subscribe((res: any) => {
      console.log('Book deleted successfully:', res);
    });
  }

  deleteBook(bookId: number, index: number) {
    this.deleteBookFromTable(index);
  }


  cancelForm() {
    this.selectedBook = null;
    this.newBookName = '';
    this.showForm = false;
    this.isNewBook = false;
    this.rate = 0;
    this.autherId = 0;
    this.categoryId = 0;
  }

  ngOnDestroy() {
    if (this.subscription) {
    this.subscription.unsubscribe();
    }
    }
}
