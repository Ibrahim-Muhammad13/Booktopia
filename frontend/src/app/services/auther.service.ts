import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutherService {

  constructor(private http:HttpClient) { }

getAllauther(){
  return this.http.get('http://localhost:3000/auther')
}
getAllautherbyid(){
  return this.http.get('http://localhost:3000/auther')
}

insertNewauther(auther:any){
  // const category = {cat_Name:cat}
  // return this.http.post('http://localhost:3000/admin/category',category).subscribe((res:any)=>console.log(res))
}

deleteautherby(){
  return this.http.get('http://localhost:3000/auther')
}

updateauther(){
  
}

}
