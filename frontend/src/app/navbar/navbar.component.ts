import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  loggin!:any
constructor(private auth:AuthService, private router:Router){}
ngOnInit(){
this.loggin=this.auth.isUser()
}

  logaut(){
  this.auth.logout();
  }

}
