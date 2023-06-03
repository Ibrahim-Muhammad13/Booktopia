import { Component } from '@angular/core';
import { Author } from '../models/author';
import { AutherService } from '../services/auther.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
Authors! : Author[]; 

currentPage = 1;
totalPages = 3;
selectedItemsPerPage = 8;
  constructor(private auther: AutherService) { }
  ngOnInit(){
    this.getauther(this.currentPage,this.selectedItemsPerPage);
  }

getauther(page:number,limit:number){
  this.auther.getAllauther(page,limit).subscribe((res: any) =>{this.Authors = res.authors, this.totalPages = res.totalPages;});

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