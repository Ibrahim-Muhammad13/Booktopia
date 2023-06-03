import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators,  ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  rigester:FormGroup
  result: any
  showAlert: boolean = false;
  alertMessage: string = "";
  emailDuplicateMessage: string = "";
  // submitlogin( ){
  //  const respone= this.auth.register(this.rigester.value)
  //  console.log(respone)

  // }
  submitLogin(rigester: any) {
    this.auth.register(rigester).subscribe({
      next: (res: any) => {
        this.result = res;
        // Registration successful
        this.showAlert = true;
        this.alertMessage = "Registration successful!";
        this.emailDuplicateMessage = "";
  
        // Redirect to the login page 
        this.router.navigate(['/login']);
      },
      error: (error: any) => {
        // Registration failed
        this.showAlert = true;
        this.alertMessage = "Registration failed!";
  
        // Check if the error is due to duplicate email
        if (error.error && error.error.message === "Duplicate email") {
          this.emailDuplicateMessage = "Email already exists!";
        } else {
          this.emailDuplicateMessage = "";
        }
      }
    });
  }
  
  
  
  hideAlert() {
    this.showAlert = false;
    this.alertMessage = "";
  } 
  logingithub(){
    console.log("done google")
  }
  loginfacebook(){
    console.log("done google")
  }
  loginGoogle(){
    console.log("done google")
    this.auth.google()
  }

 constructor(private fb:FormBuilder ,private auth:AuthService ,private router:Router){ 
  this.rigester=fb.group({
    fullname:[null,[Validators.required, Validators.minLength(4)]],
    email:[null,[Validators.email,Validators.required]],
    password:[null,[Validators.pattern(`(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+|,.<>/?]).{8,}`),Validators.required]],     
    confilmpassword:[null,[Validators.required, this.confirmpassword()]],       
  })
}
  get fullname(){  return this.rigester.get('fullname')}
  get email(){  return this.rigester.get('email')}
  get password(){  return this.rigester.get('password')}  
  get confilmpassword(){  return this.rigester.get('confilmpassword')}
      
  confirmpassword() :ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null=>{
    let password= this.rigester?.controls['password']?.value
      return control.value== this.rigester?.controls['password']?.value ?null:{'confirmassword': {'invaled': control.value}} ;
    }
  }
}















