import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AutherService } from 'src/app/services/auther.service';

@Component({
  selector: 'app-auther-update',
  templateUrl: './auther-update.component.html',
  styleUrls: ['./auther-update.component.css']
})
export class AutherUpdateComponent {
  Auther!:any

  


  rigester:FormGroup

  constructor(private fb:FormBuilder ,private auther:AutherService ,private activeRouter:ActivatedRoute){ 
    this.rigester=fb.group({
      firstName:[null,[Validators.required,Validators.minLength(4)]],       
      LastName:[null,[Validators.required, Validators.minLength(4)]],
      birthDate:[null,[Validators.required]],
      image:[null,[Validators.required]],
    })
    }
  
get firstName(){  return this.rigester.get('firstName'); }
get lastName(){  return this.rigester.get('LastName')}
get biarth_date(){  return this.rigester.get('birthDate')}
get image(){  return this.rigester.get('image')}
ngOnInit() {
  let id :number=this.activeRouter.snapshot.params['id']
      this.auther.getAllautherbyid(id).subscribe(
  res=>{
    console.log(res)
  this.Auther=res
  // console.log(typeof( this.Auther))
    this.rigester.patchValue({
    firstName:this.Auther.firstName ,
    LastName: this.Auther.LastName,
    birthDate:this.Auther.birthDate,
          
          })
    
     })}


     submitlogin(e:any){
      let fd =new FormData(e.target)
      if (this.rigester.value.image==null){
        this.rigester.value.image=this.Auther.image
      }
  let id :number=this.activeRouter.snapshot.params['id']
      this.auther.updateauther(fd,id)
      // this.auther.updateauther(this.rigester.value,id)
    }


  }
  




  // firstName: 'gerges victor',
  // LastName: 'gerges@gmail.com',
  // birthDate




