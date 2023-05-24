import { Component } from '@angular/core';
import { Author } from '../interfaces/author';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
Authors : Author[] =[
  {
    "id": 1,
    "name": "Frederick Douglass",
"image": "../../assets/images/author.jpg",
    "description": "Engraving From 1868 Featuring The American Writer And Former Slave, Frederick Douglass. Douglass Lived From 1818 Until 1895.",
  },
  {
    "id": 2,
    "name": "Frederick Douglass",
    "image": "../../assets/images/author.jpg",
    "description": "Engraving From 1868 Featuring The American Writer And Former Slave, Frederick Douglass. Douglass Lived From 1818 Until 1895.",
  },
  {
    "id": 3,
    "name": "Frederick Douglass",
    "image": "../../assets/images/author.jpg",
    "description": "Engraving From 1868 Featuring The American Writer And Former Slave, Frederick Douglass. Douglass Lived From 1818 Until 1895.",
  },
  {
    "id": 4,
    "name": "Frederick Douglass",
    "image": "../../assets/images/author.jpg",
    "description": "Engraving From 1868 Featuring The American Writer And Former Slave, Frederick Douglass. Douglass Lived From 1818 Until 1895.",
  },
  {
    "id": 5,
    "name": "Frederick Douglass",
    "image": "../../assets/images/author.jpg",
    "description": "Engraving From 1868 Featuring The American Writer And Former Slave, Frederick Douglass. Douglass Lived From 1818 Until 1895.",
  },
  {
    "id": 6,
    "name": "Frederick Douglass",
    "image": "../../assets/images/author.jpg",
    "description": "Engraving From 1868 Featuring The American Writer And Former Slave, Frederick Douglass. Douglass Lived From 1818 Until 1895.",
  },
]
}
