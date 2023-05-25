import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getBooks(){
    return this.http.get('http://localhost:3000/books');
  }

  addBook(name:string,autherId:string,categoryId:number,rate:number){
    const book={name:name,authorId:autherId,categoryId:categoryId,rate:rate}
    console.log(book)

    return this.http.post('http://localhost:3000/books',book).subscribe((res:any)=>console.log(res));
  }
  updateBook(bookId: number, name: string): Observable<Book[]>{
    const book = { name: name };
    return this.http.put<Book[]>(`http://localhost:3000/admin/books/` + bookId, book);
  }
}
