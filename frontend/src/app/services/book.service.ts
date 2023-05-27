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

  addBook(bookName: string,  rate: number,authorId: number, categoryId: number){
    const newBook = { name: bookName, rate: rate, authorId: authorId, categoryId: categoryId };
    // console.log(newBook);
    return this.http.post('http://localhost:3000/books', newBook).subscribe((res: any)=>console.log(res));
  }

  updateBook(bookId: number, name: string, rate: number, authorId: number, categoryId: number) {
    const book = { name: name, rate: rate, authorId: authorId, categoryId: categoryId };
    return this.http.put(`http://localhost:3000/books/${bookId}`, book);
  }

  deleteBook(bookId: number): Observable<Book[]> {
    return this.http.delete<Book[]>('http://localhost:3000/books/' + bookId);
  }

}
