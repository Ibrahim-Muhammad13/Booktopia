import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private router:Router) { }
  
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

  getAllauther(){
    return this.http.get('http://localhost:3000/auther')
  }
  getAllautherbyid(id:any){
    return this.http.get('http://localhost:3000/auther/'+id)
  }
  

  setToken(token:string){
    console.log(token)
    if(token!=null){
      localStorage.setItem('token',token)
    }
    // this.router.navigate(['admin'])
  }
  getToken(){
    return localStorage.getItem('token')
  }
  logout(){
    localStorage.removeItem('token')
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
