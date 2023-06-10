import { Component } from '@angular/core';
import { AutherService } from 'src/app/services/auther.service';

@Component({
  selector: 'app-auther',
  templateUrl: './auther.component.html',
  styleUrls: ['./auther.component.css']
})
export class AutherComponent {
  Auther!:any[]
  constructor(private auther:AutherService) { }

  currentPage = 1;
  totalPages = 3;
  selectedItemsPerPage = 2;


  ngOnInit() {
    this.getauther(this.currentPage,this.selectedItemsPerPage);
  }
getauther(page:number,limit:number){
  this.auther.getAllauther(page,limit).subscribe((res : any)=>{this.Auther=res.authors,this.totalPages=res.totalPages}); 

}
  delete(id: string) {
    this.auther.deletauther(id).subscribe(() => {
      this.Auther = this.Auther.filter((author: any) => author._id !== id);
    });
  }
  
  nextPage() {
    this.currentPage++;
   console.log(this.currentPage)
    this.getauther(this.currentPage,this.selectedItemsPerPage);
  }

  prevPage() {
    this.currentPage--;
    this.getauther(this.currentPage,this.selectedItemsPerPage);
  }
  onItemsPerPageChange(){
    this.getauther(this.currentPage,this.selectedItemsPerPage);
  }

}