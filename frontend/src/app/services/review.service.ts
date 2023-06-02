import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { 
    
  }


addReview(review:any){
  return this.http.post('http://localhost:3000/review',review).subscribe((res:any)=>console.log(res))
}

getReview(id:any){
  return this.http.get('http://localhost:3000/review/'+id)
}

deletReview(id:string){//for delete by user  for by same user
  return this.http.delete('http://localhost:3000/review/'+id)
}

deletReviews(id:string){//for delete by admin for   book   
  return this.http.delete('http://localhost:3000/review/'+id)
}

}
