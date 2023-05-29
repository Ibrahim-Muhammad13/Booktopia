import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  email:string="";
  password:string="";

constructor(private auth:AuthService, private router:Router) { }

ngOnInit(){
if(this.auth.isAuth()){
  this.router.navigate(['admin'])
}
}

  getdata(mail:string,pass:string){
    const data={email:mail,password:pass}
    this.auth.login(data).subscribe((res:any)=>this.auth.setToken(res.token));
  }

}
