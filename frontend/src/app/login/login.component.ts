import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  result:any
  constructor(private auth:AuthService )
{}
  submitlogin(login:any){


   this.auth.login(login).subscribe((res:any)=>{
    this.result=res
    // console.log(this.result.user._id)
    this.auth.setiduser(this.result.user._id)  
  })

 }
}
