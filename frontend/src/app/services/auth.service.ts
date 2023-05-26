import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  getAllauther(){
    return this.http.get('http://localhost:3000/auther')
  }
  getAllautherbyid(id:any){
    return this.http.get('http://localhost:3000/auther/'+id)
  }
  
  register(data:any){
    return this.http.post('http://localhost:3000/auth/register',data).subscribe((res:any)=>console.log(res))
  
  }


  login(data:any){
    // console.log(data)
    return this.http.post('http://localhost:3000/auth/login',data).subscribe((res:any)=>{console.log( res)})
    // return this.http.post('http://localhost:3000/auth/login',data).subscribe((res:any)=>{return res})

  }
  
  deletauther(id:string){
    return this.http.delete('http://localhost:3000/auther/'+id)
  }
  
  updateauther(auther:any,id:any){
    // return this.http.put('http://localhost:3000/auther')
  
    console.log(auther)
    return this.http.put('http://localhost:3000/auther/'+id,auther).subscribe((res:any)=>console.log(res))
  
    
}


}
