import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-auther-update',
  templateUrl: './auther-update.component.html',
  styleUrls: ['./auther-update.component.css']
})
export class AutherUpdateComponent {

  rigester:FormGroup
  submitlogin( ){
    // let usermodel:Formsinf=this.rigester.value as Formsinf
    // console.log(usermodel)
  
    console.log(this.rigester)
  }
    constructor(private fb:FormBuilder){ 
      this.rigester=fb.group({
        name:[null,[Validators.required]],
        email:[null,[Validators.email,Validators.required]],
        username:[null,[Validators.required,Validators.pattern("[^\s]+")]],
        password:[null,[Validators.pattern(`(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+|,.<>/?]).{8,}`),Validators.required]],
        phoneNo:fb.array([null,[Validators.required]]),
        address:fb.group({
              city :[null,[Validators.required]],
              postalcode :[null,[Validators.required]],
              street :[null,[Validators.required]],}
              ),
        confilmpassword:[null,[Validators.required, this.confirmpassword()]],
         
      })
      }
  get name(){  return this.rigester.get('name')}
  get email(){  return this.rigester.get('email')}
  get username(){ return this.rigester.get('username')}
  get password(){  return this.rigester.get('password')}
  get phoneNo(){  return this.rigester.get('phoneNo') as FormArray}
  get city(){  return this.rigester.get('city')}
  get postalcode(){  return this.rigester.get('postalcode')}
  get street(){  return this.rigester.get('street')}
  get confilmpassword(){  return this.rigester.get('confilmpassword')}
  
      
  confirmpassword() :ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null=>{
    let password= this.rigester?.controls['password']?.value
      return control.value== this.rigester?.controls['password']?.value ?null:{'confirmassword': {'invaled': control.value}} ;
    }
  }
  
  
  }
  









