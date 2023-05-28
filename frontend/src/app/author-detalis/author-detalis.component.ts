import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from '../models/author';
import { Book} from '../models/book';
import { AutherService } from '../services/auther.service';
import {  BookService } from '../services/book.service';

@Component({
  selector: 'app-author-detalis',
  templateUrl: './author-detalis.component.html',
  styleUrls: ['./author-detalis.component.css']
})
export class AuthorDetailsComponent implements OnInit {
  author: Author | undefined;
  authorId: string | undefined;
 books: Book[] =[
  { '_id':1,
  'name': 'mohamed',
  'rate': 2.3,
  'authorId': 5,
  'categoryId':5,
  'image': '../../assets/images/book2.png'
},

  { 
    '_id':2,
  'name': 'mohamed',
  'rate': 4.1,
  'authorId': 5,
  'categoryId':5,
  'image': '../../assets/images/book2.png'
},

  { 
    '_id':3,
  'name': 'mohamed',
  'rate': 5,
  'authorId': 5,
  'categoryId':5,
  'image': '../../assets/images/book2.png'
},
{ '_id':1,
'name': 'mohamed',
'rate': 3,
'authorId': 5,
'categoryId':5,
'image': '../../assets/images/book2.png'
},

{ 
  '_id':2,
'name': 'mohamed',
'rate': 3.3,
'authorId': 5,
'categoryId':5,
'image': '../../assets/images/book2.png'
},

{ 
  '_id':3,
'name': 'mohamed',
'rate': 2.3,
'authorId': 5,
'categoryId':5,
'image': '../../assets/images/book2.png'
},
{ '_id':1,
  'name': 'mohamed',
  'rate': 1.3,
  'authorId': 5,
  'categoryId':5,
  'image': '../../assets/images/book2.png'
},

  { 
    '_id':2,
  'name': 'mohamed',
  'rate': 4.3,
  'authorId': 5,
  'categoryId':5,
  'image': '../../assets/images/book2.png'
},

  { 
    '_id':3,
  'name': 'mohamed',
  'rate': 3.5,
  'authorId': 5,
  'categoryId':5,
  'image': '../../assets/images/book2.png'
}
 
 ];


  constructor(private route: ActivatedRoute,private authorService: AutherService, private bookService:  BookService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.authorId = params['id'];
      this.getAuthorDetails();
    });
  }

  getAuthorDetails() {
    if (this.authorId) {
      this.authorService.getAllautherbyid(this.authorId).subscribe((res: any) => {this.author = res;});
    }
  }
}