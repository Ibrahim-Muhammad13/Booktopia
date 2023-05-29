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

        console.log(this.books[4].bookid.authorId.firstName+" "+this.books[4].bookid.authorId.LastName) 
    });

  }

  all(){}
  read(){}
  currently(){}
  wanttoread(){}



}
