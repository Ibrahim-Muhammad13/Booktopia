import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  constructor(private http:HttpClient) { }
  addBook(bookdetails:any){
    return this.http.post('http://localhost:3000/add', bookdetails).subscribe((res: any)=>console.log(res));
  }

  getallbooks(user_id:string){
    return this.http.get('http://localhost:3000/profile/'+user_id, );
  }


  getbooks(user_id:string,status:string){
    return this.http.get('http://localhost:3000/profile/'+user_id+"?books="+status);
  }
  
  getAllRating(book_id:string){
    return this.http.get('http://localhost:3000/profile/rate/'+book_id);
  }
  update(book_id:string,NewStatus:any){
    // console.log(NewStatus);
    return this.http.put('http://localhost:3000/profile/'+book_id,NewStatus);
  }

}





