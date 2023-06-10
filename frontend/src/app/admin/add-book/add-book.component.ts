import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Author } from 'src/app/models/author';
import { Category } from 'src/app/models/category';
import { AutherService } from 'src/app/services/auther.service';
import { BookService } from 'src/app/services/book.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  authers!:Author[]
  categories!:Category[]
  addbook: FormGroup
  constructor( private fb: FormBuilder,private http:HttpClient, private auther:AutherService, private book:BookService, private category:CategoriesService,private router: Router) {
// name  rate   authorId  categoryId   image   description
 
    this.addbook = fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      rate: [null, [Validators.required, Validators.min(0),Validators.max(5)]],
      Author: [null, [Validators.required]],
      Category: [null, [Validators.required]],
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
    this.auther.getAllauther(1, 100).subscribe((res: any) => {
      this.authers = res.authors;
      // console.log(this.authers);
    });
    
  this.category.getCategories(1,100).subscribe((res:any)=>this.categories=res.categories);


  }
  getAllauther(){
    this.auther.getAllauther(1,100).subscribe((res:any)=>this.authers=res.authors);
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
this.router.navigate(['/admin/books']);
    // .subscribe(() => {
    //   // Navigation to the table page after saving
    //   this.router.navigate(['/table']);
    // });
}
    // const newBook: Book = {
    //   _id: 0,
    //   name: this.newBookName,
    //   rate: this.rate,
    //   authorId: this.autherId,
    //   categoryId: this.categoryId,
    //   image: this.image
    };


