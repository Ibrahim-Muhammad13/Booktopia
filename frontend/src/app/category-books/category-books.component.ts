import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-category-books',
  templateUrl: './category-books.component.html',
  styleUrls: ['./category-books.component.css']
})
export class CategoryBooksComponent {
books!:Book[]
constructor(private book:BookService, private router:ActivatedRoute){}

ngOnInit(){
 const id = this.router.snapshot.paramMap.get('id');
 this.getbooksByCategory(Number(id));
}
getbooksByCategory(catId: number) {
  this.book.getBooksBycategoryId(catId).subscribe((res:any)=>this.books=res)
}


}
