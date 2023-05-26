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
  constructor(private auth:AuthService )
{}
  submitlogin(login:any){
    console.log(typeof( login))
  //  const result = this.auth.login(login)
   this.auth.login(login)
  //  console.log(result)
 }
}
