import { Component , Input } from '@angular/core';
import { Book} from '../models/book';


@Component({
  selector: 'app-author-book-details',
  templateUrl: './author-book-details.component.html',
  styleUrls: ['./author-book-details.component.css']
})
export class AuthorBookDetailsComponent {
  @Input() oneOfBook!: Book;
  
}
