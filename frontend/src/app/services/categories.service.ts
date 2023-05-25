
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:3000/admin/category');
  }


  createCategory(cat: string): Observable<Category[]>{
    const category = { cat_Name: cat };
    console.log(category);
    return this.http.post<Category[]>('http://localhost:3000/admin/category', category);
  }

  deleteCategory(catId: number): Observable<Category[]> {
    return this.http.delete<Category[]>('http://localhost:3000/admin/category/' + catId);
  }

  updateCategory(catId: number, cat: string): Observable<Category[]>{
    const category = { cat_Name: cat };
    return this.http.put<Category[]>(`http://localhost:3000/admin/category/` + catId, category);
  }
}
