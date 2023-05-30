import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private router:Router) { }





  private id =new  BehaviorSubject("646bc4d33344a39071390ca4")
  getidUser() { 
  return this.id.asObservable();
  }
  setiduser(newVal:any){
  this.id.next(newVal);
  }
  













  
  isLoggedin=false;
  isAuth(){
    if(localStorage.getItem('token')){
      console.log("there is tok")
      this.isLoggedin=true;
    }
    else{
      this.isLoggedin=false;
    }
    return this.isLoggedin;
  }




  setToken(token:string){
    console.log(token)
    if(token!=null){
      localStorage.setItem('token',token)
    }
    // this.router.navigate(['admin'])
  }


  setTokenID(token:string){
    console.log(token)
    if(token!=null){
      localStorage.setItem('id_user',token)
    }
    // this.router.navigate(['admin'])
  }
  getToken(){
    return localStorage.getItem('token')
  }
  getTokenID(){
    return localStorage.getItem('id_user')
  }
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('id_user')
    this.isLoggedin=false;
    this.router.navigate([''])

  }
  register(data:any){
    return this.http.post('http://localhost:3000/auth/register',data).subscribe((res:any)=>console.log(res))
  }
  login(data:any){
    // console.log(data)
    return this.http.post('http://localhost:3000/auth/login',data)
    // return this.http.post('http://localhost:3000/auth/login',data).subscribe((res:any)=>{return res})
  }
  
  google(){
    return this.http.get('http://localhost:3000/auth/facebook').subscribe((res:any)=>{console.log( res)})
  }
  
  github(auther:any,id:any){
    // return this.http.put('http://localhost:3000/auther')
  
    console.log(auther)
    return this.http.put('http://localhost:3000/auther/'+id,auther).subscribe((res:any)=>console.log(res))
  
    
}


}
