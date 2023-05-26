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

  getBooksBycategoryId(catId:number){
    return this.http.get('http://localhost:3000/books/cat/'+catId);
  }  
  addBook(bookName: string, authorId: string, categoryId: number, rate: number){
    const newBook = { name: bookName, authorId: authorId, categoryId: categoryId, rate: rate };
    return this.http.post('http://localhost:3000/books', newBook).subscribe((res: any)=>console.log(res));
  }

  updateBook(bookId: number, name: string): Observable<any> {
    const book = { name: name };
    return this.http.put<any>(`http://localhost:3000/books/${bookId}`, book);
  }
  

  deleteBook(bookId: number): Observable<Book[]> {
    return this.http.delete<Book[]>('http://localhost:3000/admin/books' + bookId);
  }

}
