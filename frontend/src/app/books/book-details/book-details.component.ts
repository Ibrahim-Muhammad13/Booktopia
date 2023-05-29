import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BookService } from 'src/app/services/book.service';
import { UserInfoService } from 'src/app/services/user-info.service';
// import * as popper from 'popper.js';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  constructor(private activeRouter:ActivatedRoute,private books:BookService,private auth:AuthService,private user_book:UserInfoService ){}
book:any;
id_book:any
id_user!:string


  ngOnInit(){
    this.id_book =this.activeRouter.snapshot.params['id']
    this.books.getBookById(this.id_book).subscribe((res:any)=>this.book=res)

  }

  addToProfile(){
// console.log(this.book)
this.auth.getidUser().subscribe((res)=>{this.id_user= res})
console.log(this.id_book,this.id_user)
// bookid status UserId

 const add_book={
  bookid:this.id_book,
  status:"reedy",
  UserId:this.id_user

}
this.user_book.addBook(add_book)

  }
}
