import { Component } from '@angular/core';
import { Category } from '../models/category';
import { BookService } from '../services/book.service';
import { CategoriesService } from '../services/categories.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
categories!:Category[];

  constructor(private Categories:CategoriesService) { }
  currentPage = 1;
  totalPages = 3;
  selectedItemsPerPage = 9;
  ngOnInit() {
    this.getCategories(this.currentPage,this.selectedItemsPerPage);
  }


 getCategories(page:number,limit:number){
  this.Categories.getCategories(page,limit).subscribe((res:any)=>{this.categories=res.categories,this.totalPages=res.totalPages});
  }

  nextPage() {
    this.currentPage++;
   console.log(this.currentPage)
    this.getCategories(this.currentPage,this.selectedItemsPerPage);
  }

  prevPage() {
    this.currentPage--;
    this.getCategories(this.currentPage,this.selectedItemsPerPage);
  }
  onItemsPerPageChange(){
    this.getCategories(this.currentPage,this.selectedItemsPerPage);
  }

}