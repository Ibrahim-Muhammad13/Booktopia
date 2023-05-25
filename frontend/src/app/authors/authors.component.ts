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

  constructor(private auther: AutherService) { }
  ngOnInit(){
    this.auther.getAllauther().subscribe((res: any) =>this.Authors = res)
  }

}

