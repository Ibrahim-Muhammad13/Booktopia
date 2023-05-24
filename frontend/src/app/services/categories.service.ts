
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get('http://localhost:3000/admin/category');
  }

  createCategory(cat: string): Observable<any> {
    const category = { cat_Name: cat };
    return this.http.post('http://localhost:3000/admin/category', category);
  }

  deleteCategory(catId: number): Observable<any> {
    return this.http.delete('http://localhost:3000/admin/category/' + catId);
  }

  updateCategory(catId: number, cat: string): Observable<any> {
    const category = { cat_Name: cat };
    return this.http.put(`http://localhost:3000/admin/category/` + catId, category);
  }
}
