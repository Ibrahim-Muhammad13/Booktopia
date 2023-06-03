import { Component , Input } from '@angular/core';
import { Book} from '../models/book';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-author-book-details',
  templateUrl: './author-book-details.component.html',
  styleUrls: ['./author-book-details.component.css']
})
export class AuthorBookDetailsComponent {
  @Input() oneOfBook!: Book;
  selectedOption: string = "";
  showAlert: boolean = false;
  alertMessage: string = "";

  constructor(private auth: AuthService) {}

  showAlertMessage() {
    if (this.auth.isAuth()) {
      if (this.selectedOption) {
        const selectedOptionName = this.getOptionName(this.selectedOption);
        this.alertMessage = "Option selected: " + selectedOptionName;
      } else {
        this.alertMessage = "Please select an option.";
      }
      this.showAlert = true;
    } else {
      this.alertMessage = "Please log in before selecting an option.";
      this.showAlert = true;
    }
  }
getOptionName(optionValue: string): string {
  if (optionValue === "option1") {
      return "Option 1";
  } else if (optionValue === "option2") {
      return "Option 2";
  } else if (optionValue === "option3") {
      return "Option 3";
  } else {
      return ""; 
  }
}
hideAlert() {
    this.showAlert = false;
    this.alertMessage = "";
}


}
