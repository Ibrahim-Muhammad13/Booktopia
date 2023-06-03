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

  email:string="";
  password:string="";

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

  // getdata(mail:string,pass:string){
  //   const data={email:mail,password:pass}
  //   this.auth.login(data).subscribe((res:any)=>this.auth.setToken(res.token));
  // }
  onSubmit() {
    const { email, password } = this.loginForm.value;
    const data = { email, password };
    this.auth.login(data).subscribe((res: any) => this.auth.setToken(res.token));
    setTimeout(() => {
      this.router.navigate(['/admin']);
    }, 200);
    
  }
}
