import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  result:any
  constructor(private auth:AuthService ,private router:Router)
{}
  submitlogin(login:any){


   this.auth.login(login).subscribe((res:any)=>{
    this.result=res
    if (this.result=="Invalid data"){
      alert("username or password incorrect")
    }
    else{
      alert("login seccessfully")
      this.auth.setToken(this.result.token)
      this.auth.setTokenID(this.result.user._id)
      this.router.navigate(['books'])
    // console.log(this.result.user._id)
    }
    // this.auth.setiduser(this.result.user._id)  
  })

 }
}
