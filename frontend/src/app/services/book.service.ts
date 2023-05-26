import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>('http://localhost:3000/books');
  }

  // addBook(bookName: string, authorId: string, categoryId: number, rate: number): Observable<any>  {
  //   const newBook = { name: bookName, authorId: authorId, categoryId: categoryId, rate: rate };
  //   return this.http.post('http://localhost:3000/books', newBook);
  //     // handle success
  //     console.log('Book added successfully');
  //   }, (err: any) => {
  //     // handle error
  //     console.error(err);
  //   });
  // }
  addBook(bookName: string, authorId: string, categoryId: number, rate: number): Observable<any> {
    const newBook = { name: bookName, authorId: authorId, categoryId: categoryId, rate: rate };
    return this.http.post<Book[]>('http://localhost:3000/books', newBook);
  }

  updateBook(bookId: number, name: string): Observable<Book[]>{
    const book = { name: name };
    return this.http.put<Book[]>(`http://localhost:3000/admin/books` + bookId, book);
  }

  deleteBook(bookId: number): Observable<Book[]> {
    return this.http.delete<Book[]>('http://localhost:3000/admin/books' + bookId);
  }

}
