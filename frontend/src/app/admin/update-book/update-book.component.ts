import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Author } from 'src/app/models/author';
import { Category } from 'src/app/models/category';
import { AutherService } from 'src/app/services/auther.service';
import { BookService } from 'src/app/services/book.service';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {


  authers!:Author[]
  categories!:Category[]
  addbook: FormGroup
  olddata:any

  constructor( private fb: FormBuilder,private http:HttpClient, private auther:AutherService, private book:BookService, private category:CategoriesService,private activeRouter: ActivatedRoute) {
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
    this.auther.getAllauther().subscribe((res:any)=>{this.authers=res
  });
  this.category.getCategories().subscribe((res:any)=>this.categories=res.categories);

  let id: number = this.activeRouter.snapshot.params['id'];
  this.book.getBookByID(id).subscribe((res) => {
    this.olddata = res[0];
    console.log(this.olddata.name);
    this.addbook.patchValue({
      name: this.olddata.name,
      rate: this.olddata.rate,
      Author: this.olddata.authorId,
      Category:this.olddata.categoryId,
      description:this.olddata.description
    });
  });

  }
 
  addBook(event: Event) {
    event.preventDefault();
    let fd = new FormData(event.target as HTMLFormElement);
    // console.log(fd)
    // console.log(this.addbook.value)
    // this.book.addBook(fd) 
    this.book.UpdateBook(fd,this.olddata._id).subscribe((res:any)=>console.log(res));

  }  
  updateBook(event: Event) {
    event.preventDefault();
    let fd = new FormData(event.target as HTMLFormElement);
        this.book.UpdateBook(this.olddata._id,fd).subscribe((res:any)=>console.log(res));
    // console.log(fd)
    // console.log(this.addbook.value)
    };

}
