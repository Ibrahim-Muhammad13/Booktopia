import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutherService {

  constructor(private http:HttpClient) { }

getAllauther(){
  return this.http.get('http://localhost:3000/auther')
}
getAllautherbyid(id:any){
  return this.http.get('http://localhost:3000/auther/'+id)
}

Newauther(auther:any){
  console.log(auther)
  return this.http.post('http://localhost:3000/auther',auther).subscribe((res:any)=>console.log(res))

}

deletauther(id:string){
  return this.http.delete('http://localhost:3000/auther/'+id)
}
updateauther(auther: any, id: any) {
  console.log(auther);
  return this.http.put('http://localhost:3000/auther/' + id, auther);
}


}
