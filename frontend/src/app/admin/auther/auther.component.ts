import { Component } from '@angular/core';
import { AutherService } from 'src/app/services/auther.service';

@Component({
  selector: 'app-auther',
  templateUrl: './auther.component.html',
  styleUrls: ['./auther.component.css']
})
export class AutherComponent {
  Auther!:any
  constructor(private auther:AutherService) { }

  ngOnInit() {
  this.auther.getAllauther().subscribe(

res=>{
      console.log(res)
      this.Auther=res
      // this.Auther=this.Auther[0]
      // this.Auther=this.Auther[1]
      // console.log(this.x.length)
      console.log(typeof( this.Auther))


 })


  }

  delete(id: string) {
    this.auther.deletauther(id).subscribe(() => {
      this.Auther = this.Auther.filter((author: any) => author._id !== id);
    });
  }
  

  // console.log(x)

}