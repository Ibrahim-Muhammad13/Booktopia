import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AutherService } from 'src/app/services/auther.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auther-add',
  templateUrl: './auther-add.component.html',
  styleUrls: ['./auther-add.component.css']
})
export class AutherAddComponent {
  Auther!: any




  rigester: FormGroup

  constructor(private fb: FormBuilder, private auther: AutherService, private activeRouter: ActivatedRoute, private router: Router) {
    this.rigester = fb.group({
      firstName: [null, [Validators.required, Validators.minLength(4)]],
      LastName: [null, [Validators.required, Validators.minLength(4)]],
      birthDate: [null, [Validators.required]],
      image: [null, [Validators.required]],
    })
  }

  get firstName() { return this.rigester.get('firstName'); }
  get lastName() { return this.rigester.get('LastName') }
  get biarth_date() { return this.rigester.get('birthDate') }
  get image() { return this.rigester.get('image') }
  ngOnInit() {
    // let id :number=this.activeRouter.snapshot.params['id']
    //     this.auther.getAllautherbyid(id).subscribe(
    // res=>{
    //   console.log(res)
    // this.Auther=res
    // // console.log(typeof( this.Auther))
    //   this.rigester.patchValue({
    //   firstName:this.Auther.firstName ,
    //   lastName: this.Auther.LastName,
    //   biarth_date:this.Auther.birthDate,

    //         })

    //    })
  }



  submitlogin(event: Event) {
    event.preventDefault();
    let fd = new FormData(event.target as HTMLFormElement);
    this.auther.Newauther(fd);
    // console.log(fd)
    // this.router.navigate(['admin/auther']);
  }

}














