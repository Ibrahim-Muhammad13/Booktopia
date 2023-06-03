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

  title: string = 'all';
  activeButton: string = 'all';

  setTitle(title: string) {
    this.title = title;
  }
  filterBooks(activeButton: string) {
    this.activeButton = activeButton;
  }





  constructor(private activeRouter:ActivatedRoute,private book:BookService,private auth:AuthService,private user_book:UserInfoService ,private auther:AutherService){}
rating:number=1
  books:any;
  id_user!:any
  Auther!:[{}]
  selectedOption: string = "";
  showAlert: boolean = false;
  alertMessage: string = "";
  index!:any

  ngOnInit(){
    this.id_user=this.auth.getTokenID()
    // this.auth.getidUser().subscribe((res)=>{this.id_user= res})
    this.user_book.getallbooks(this.id_user).subscribe((res:any)=>{
      this.books=res;


        // console.log(this.books[0].bookid.authorId.firstName+" "+this.books[0].bookid.authorId.LastName) 
        console.log(this.books[0].rate) 

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

    
    showAlertMessage() {
      if (this.auth.isAuth()) {
        if (this.selectedOption) {
          const selectedOptionName = this.getOptionName(this.selectedOption);
          this.alertMessage = "Option selected: " + selectedOptionName;
        } else {
          this.alertMessage = "Please select an option.";
        }
        this.showAlert = true;
      } else {
        this.alertMessage = "Please log in before selecting an option.";
        this.showAlert = true;
      }
    }
  getOptionName(optionValue: string): string {
    if (optionValue === "read") {
        return "read";
    } else if (optionValue === "currently") {
        return "currently";
    } else if (optionValue === "wanttoread") {
        return "want to read";
    } else {
        return ""; 
    }
  }
  
    changestates(index: any, newStatus: string) {
      const newData = {
        "bookid":this.books[index].bookid._id,
           "status":newStatus,
           "UserId":this.books[index].UserId,
           "rate":this.books[index].bookid.rate
      };
    
      this.user_book.update(this.books[index]._id, newData).subscribe((res: any) => {
        console.log(res);
      });
    
    }
     
hideAlert() {
  this.showAlert = false;
  this.alertMessage = "";
}

 changerating(rate:number,index:any){
this.rating=rate
const newdata={
  "bookid":this.books[index].bookid._id,
   "status":this.books[index].Status,
   "UserId":this.books[index].UserId,
   "rate":this.rating
}
this.books[index].rate=this.rating
this.user_book.update(this.books[index]._id,newdata).subscribe((res:any)=>{
  this.user_book.getAllRating(this.books[index].bookid._id).subscribe((res:any)=>{
    console.log(res)
    let sum=0
for (let index = 0; index < res.length; index++) {
  if(res[index]?.rate) sum=sum+res[index]?.rate
}
this.books[index].bookid.rate=(sum/res.length)
   })
  })

 }   


}

