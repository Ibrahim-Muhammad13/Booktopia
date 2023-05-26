import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
