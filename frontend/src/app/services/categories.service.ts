import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories} from '../admin/interfaces/categories'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }

getCategories(){
  return this.http.get('http://localhost:3000/admin/category')
}

createCategory(cat:string){
  const category = {cat_Name:cat}
  return this.http.post('http://localhost:3000/admin/category',category).subscribe((res:any)=>console.log(res))
}
}
