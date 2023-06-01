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
id_user:any


  ngOnInit(){
    this.id_book =this.activeRouter.snapshot.params['id']
    this.books.getBookById(this.id_book).subscribe((res:any)=>{this.book=res[0];console.log(this.book
      ) })
  }

  addToProfile(){
    const login=this.auth.isAuth()
    if(login){
     this.id_user=this.auth.getTokenID()
    // console.log(this.id_book,this.id_user)
    const add_book={
      bookid:this.id_book,
      status:"reedy",
      UserId:this.id_user
    }
    this.user_book.addBook(add_book)
    alert("this book is  find in your profile  or add secessing")

    }
    // if login 
    if (login!=true){
      alert("Please login first")
    }
  }

  submit(review_value :any){
    console.log(review_value)
    const login=this.auth.isAuth()
    if(login){
     this.id_user=this.auth.getTokenID()
    const review={
      bookid:this.id_book,
      review:review_value.reviewdata,
      UserId:this.id_user
    }
    console.log(review)

    // add to data base
  }
    else{
      alert("Please login first to add review")
    }
  }
}
