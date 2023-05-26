import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AutherService } from 'src/app/services/auther.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auther-update',
  templateUrl: './auther-update.component.html',
  styleUrls: ['./auther-update.component.css']
})
export class AutherUpdateComponent {
  Auther: any;
  rigester: FormGroup;

  constructor(private fb: FormBuilder, private auther: AutherService, private activeRouter: ActivatedRoute, private router: Router) {
    this.rigester = fb.group({
      firstName: [null, [Validators.required, Validators.minLength(4)]],
      LastName: [null, [Validators.required, Validators.minLength(4)]],
      birthDate: [null, [Validators.required]],
      image: [null, [Validators.required]],
    });
  }

  get firstName() {
    return this.rigester.get('firstName');
  }

  get lastName() {
    return this.rigester.get('LastName');
  }

  get biarth_date() {
    return this.rigester.get('birthDate');
  }

  get image() {
    return this.rigester.get('image');
  }

  ngOnInit() {
    let id: number = this.activeRouter.snapshot.params['id'];
    this.auther.getAllautherbyid(id).subscribe((res) => {
      console.log(res);
      this.Auther = res;
      this.rigester.patchValue({
        firstName: this.Auther.firstName,
        LastName: this.Auther.LastName,
        birthDate: this.Auther.birthDate,
      });
    });
  }
  
  submitlogin(event: Event) {
    event.preventDefault();
    let fd = new FormData(event.target as HTMLFormElement);
    if (this.rigester.value.image == null) {
      this.rigester.value.image = this.Auther.image;
    }
    let id: number = this.activeRouter.snapshot.params['id'];
    this.auther.updateauther(fd, id).subscribe((res: any) => {
      this.Auther = res; // Update the Auther object with the updated data
      this.rigester.patchValue({
        firstName: this.Auther.firstName,
        LastName: this.Auther.LastName,
        birthDate: this.Auther.birthDate,
      });
      this.router.navigate(['admin/auther']); // Navigate to a different route after successful update
    });
  }
}

  // firstName: 'gerges victor',
  // LastName: 'gerges@gmail.com',
  // birthDate




