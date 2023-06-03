import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BookService } from 'src/app/services/book.service';
import { ReviewService } from 'src/app/services/review.service';
import { UserInfoService } from 'src/app/services/user-info.service';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  constructor(private activeRouter:ActivatedRoute,private router:Router,private Review:ReviewService,private books:BookService,private auth:AuthService,private user_book:UserInfoService ){}
book:any;
id_book:any
id_user:any
reviews:any
booksralated:any
ngOnInit(){
  this.id_book =this.activeRouter.snapshot.params['id']
  this.books.getBookById(this.id_book).subscribe((res:any)=>{this.book=res[0]
  this.books.getBooksBycategoryId(this.book.categoryId._id).subscribe((res:any)=>{this.booksralated=res
  })
})
this.Review.getReview(this.id_book).subscribe((res:any)=>{this.reviews=res;})
  }
  addToProfile(){
    const login=this.auth.isAuth()
    if(login){
     this.id_user=this.auth.getTokenID()
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
    this.Review.addReview(review)
    this.Review.getReview(this.id_book).subscribe((res:any)=>{this.reviews=res;
    }) 
  }
    else{
      alert("Please login first to add review")
    }
  }
  goToBook(index:number){
    this.router.navigate(['/book/'+this.booksralated[index]?._id]);
    this.books.getBookById(this.booksralated[index]?._id).subscribe((res:any)=>{this.book=res[0]
      this.books.getBooksBycategoryId(this.book.categoryId._id).subscribe((res:any)=>{this.booksralated=res
      })
    })
      this.Review.getReview(this.id_book).subscribe((res:any)=>{this.reviews=res;
        })
      
  }
}
