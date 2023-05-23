import { Component ,Input} from '@angular/core';
import { Author } from '../interfaces/author';
@Component({
  selector: 'app-authors-card',
  templateUrl: './authors-card.component.html',
  styleUrls: ['./authors-card.component.css']
})
export class AuthorsCardComponent {
  @Input() oneOfAuthors !: Author 
}
