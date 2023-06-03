import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Author } from 'src/app/models/author';
import { Category } from 'src/app/models/category';
import { AutherService } from 'src/app/services/auther.service';
import { BookService } from 'src/app/services/book.service';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  authers!:Author[]
  categories!:Category[]
  addbook: FormGroup
  constructor( private fb: FormBuilder,private http:HttpClient, private auther:AutherService, private book:BookService, private category:CategoriesService) {
// name  rate   authorId  categoryId   image   description
 
    this.addbook = fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      rate: [0, [Validators.required, Validators.min(0),Validators.max(5)]],
      Author: ["Choose Your Auther Name", [Validators.required]],
      Category: ["Choose Your category Name", [Validators.required]],
      description: [null, [Validators.required]],
      image: [null, [Validators.required]],
    })
 
  }
  get Name() { return this.addbook.get('name'); }
  get Rate() { return this.addbook.get('rate'); }
  get Author() { return this.addbook.get('Author'); }
  get Category() { return this.addbook.get('Category'); }
  get description() { return this.addbook.get('description') }
  get image() { return this.addbook.get('image') }
  ngOnInit(){
    this.auther.getAllauther(1,100).subscribe((res:any)=>{this.authers=res
    console.log(this.authers)
  });
  this.category.getCategories(1,100).subscribe((res:any)=>this.categories=res.categories);


  }
  getauthers(){
    this.auther.getAllauther(1,100).subscribe((res:any)=>this.authers=res);
  }
  getcategories(){
    this.category.getCategories(1,100).subscribe((res:any)=>this.categories=res.categories);
    }

  addBook(event: Event) {
    event.preventDefault();
    let fd = new FormData(event.target as HTMLFormElement);
    console.log(fd)
    console.log(this.addbook.value)
    this.book.addBook(fd)

    // const newBook: Book = {
    //   _id: 0,
    //   name: this.newBookName,
    //   rate: this.rate,
    //   authorId: this.autherId,
    //   categoryId: this.categoryId,
    //   image: this.image
    };

}
