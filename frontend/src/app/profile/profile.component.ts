import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { BookService } from '../services/book.service';
import { UserInfoService } from '../services/user-info.service';
import { AutherService } from '../services/auther.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private activeRouter:ActivatedRoute,private book:BookService,private auth:AuthService,private user_book:UserInfoService ,private auther:AutherService){}

  books:any;
  id_user!:string
  Auther!:[{}]


  ngOnInit(){
    this.auth.getidUser().subscribe((res)=>{this.id_user= res})
    this.user_book.getallbooks(this.id_user).subscribe((res:any)=>{
      this.books=res;

        console.log(this.books[0].bookid.authorId.firstName+" "+this.books[0].bookid.authorId.LastName) 
        console.log(this.books) 
    });

  }





  all(){
    this.user_book.getallbooks(this.id_user).subscribe((res:any)=>{
      this.books=res;
    });
  }
  read(){
    this.user_book.getbooks(this.id_user,"reedy").subscribe((res:any)=>{
    this.books=res;
    });

  }
  currently(){this.user_book.getbooks(this.id_user,"currently").subscribe((res:any)=>{
    this.books=res;
    });}



  wanttoread(){this.user_book.getbooks(this.id_user,"wanttoread").subscribe((res:any)=>{
    this.books=res;
    });}

changestates(index:any,newStutes:string){
const newdata={
  "bookid":this.books[index].bookid._id,
   "status":newStutes,
   "UserId":this.books[index].UserId,
   "rate":this.books[index].bookid.rate
}
this.user_book.update(this.books[index]._id,newdata).subscribe((res:any)=>{
  console.log(res);
  })
  
    }

}

