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
 book : Book | undefined;
// book : Book[] =[
//   { '_id':1,
//   'name': 'mohamed',
//   'rate': 2.3,
//   'authorId': 'ahmed',
//   'categoryId':5,
//   'image': 'string',}
 
//]


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
      this.bookService.getBookById(this.authorId).subscribe((res: any) => {this.book = res;});
    }
  }
}