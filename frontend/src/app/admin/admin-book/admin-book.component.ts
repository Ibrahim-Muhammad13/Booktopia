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
  newItem!: Book
  addItem() {
    this.items.push(this.newItem);
    this.showForm = false;
  }
  // addBook(){
  //   this.book.addBook(this.bookName,this.autherId,this.categoryId,this.rate)
  //   this.getbooks();
  //   this.bookName = '';
  //   this.rate = 0;
  //   this.autherId = '';
  //   this.categoryId = 0;
  //   this.cancelForm();
  // }
  // addBook() {
  //   this.book.addBook(this.bookName, this.autherId, this.categoryId, this.rate)
  //     .subscribe((res: any) => {
  //       console.log('Book added successfully');
  //       const newBook: Book = {
  //         _id: res.book._id,
  //         name: this.bookName,
  //         rate: this.rate,
  //         authorId: this.autherId,
  //         categoryId: this.categoryId,
  //         image: '',
  //       };
  //       this.books.push(newBook); // add the new book to the array
  //       this.bookName = ''; // reset the form fields
  //       this.rate = 0;
  //       this.autherId = '';
  //       this.categoryId = 0;
  //       this.showForm = false; // show the table again
  //       this.fetchBooks();
  //       this.cancelForm();
  //     }, (err: any) => {
  //       console.error(err); // handle error
  //     });
  // }

  addBook() {
    console.log('Book name:', this.bookName);
    console.log('Author ID:', this.autherId);
    console.log('Category ID:', this.categoryId);
    console.log('Rate:', this.rate);
    this.book.addBook(this.bookName, this.autherId, this.categoryId, this.rate)  
  }

  // addBook(name:string,autherId:string,categoryId:number,rate:number){
  //   const newBook: Book = {
  //     _id:0,
  //     name: this.bookForm.controls['bookName']?.value,
  //     rate: this.bookForm.controls['rate']?.value,
  //     authorId: this.bookForm.controls['autherId']?.value,
  //     categoryId:this.bookForm.controls['categoryId']?.value,
  //     image: this.bookForm.controls['image']?.value,
  //   };
  //   this.book.addBook(name,autherId,categoryId,rate);
  // //   .subscribe((res: any) => {
  // //   this.fetchBooks();
  // //   this.cancelForm();
  // // });
  //   this.books.push(newBook);  //push to ui whithout refresh
  //   this.bookForm.controls['categoryName'].setValue(''); //empty the input field
  //   this.showForm = false; // to back again to table when save button clicked
  // }


  editBook(book: Book) {
    this.selectedBook = book;
    this.newBookName = book.name;
    this.showForm = true;
    this.isNewBook = false;
  }

  updateBook(bookId: number, book: string) {
    const newBookName = this.bookForm.controls['bookName'].value;
    console.log(newBookName);
    this.book.updateBook(bookId, newBookName)
  }



  deleteBookFromTabel(index: number) {
    const bookId = this.books[index]._id;
    this.books.splice(index, 1); // delete from table ui
    this.book.deleteBook(bookId).subscribe((res: any) => {
    this.getbooks();
    });
  }


  deleteBook(bookId: number, index: number) {
    this.deleteBookFromTabel(index);
    console.log(bookId);
    console.log('Book deleted successfully');
    this.category.deleteCategory(bookId).subscribe((res: any) => {
      this.getbooks();
    },(err: any) => {
          console.error(err);
    });
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


