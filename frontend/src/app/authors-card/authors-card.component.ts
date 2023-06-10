import { Component, Input } from '@angular/core';
import { Author } from '../models/author';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authors-card',
  templateUrl: './authors-card.component.html',
  styleUrls: ['./authors-card.component.css']
})
export class AuthorsCardComponent {
  @Input() oneOfAuthors!: Author;

  constructor(private router: Router) {}

  goToAuthorDetails(authorId: string) {
    this.router.navigate(['/author-details', authorId]);
  }
}
