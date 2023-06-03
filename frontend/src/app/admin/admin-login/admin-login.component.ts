import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  loginForm: FormGroup;
  result: any
  email:string="";
  password:string="";
  showAlert: boolean = false;
  alertMessage: string = "";
  emailDuplicateMessage: string = "";

constructor(private auth:AuthService, private router:Router,private fb: FormBuilder) {
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
 }

ngOnInit(){
if(this.auth.isAuth()){
  this.router.navigate(['admin'])
}
}

hideAlert() {
  this.showAlert = false;
  this.alertMessage = "";
  this.emailDuplicateMessage = "";
}

  // getdata(mail:string,pass:string){
  //   const data={email:mail,password:pass}
  //   this.auth.login(data).subscribe((res:any)=>this.auth.setToken(res.token));
  // }
  onSubmit() {
    const { email, password } = this.loginForm.value;
    const data = { email, password };
    this.auth.login(data).subscribe((res: any) => {
      this.result = res;
      if (this.result === "Invalid data") {
        this.showAlert = true;
        this.alertMessage = "Username or password incorrect.";
      } else if (this.result === "Email already exists") {
        this.emailDuplicateMessage = "The email is already duplicated.";
      } else {
        this.showAlert = true;
        this.alertMessage = "Login successful.";
        this.auth.setToken(this.result.token);
        this.auth.setTokenID(this.result.user._id);
        this.router.navigate(['admin/welcome']);
      }
    });
  }
}
