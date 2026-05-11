import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../../services/user-service.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  userService = inject(UserService);
  isRegisterMode = false;

  constructor(private fb: FormBuilder, private router: Router){
    this.loginForm = this.fb.group({
      userId:[0],
      emailId:['', Validators.required],
      fullName:['', Validators.required],
      password:['', Validators.required]
    })
  }

  get f(){
    return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    // if(this.loginForm.invalid){
    //   this.loginForm.markAllAsTouched();
    //   return;
    // }
    if(this.isRegisterMode){
    // this.router.navigate(['/cartApp'])
    this.userService.registerUser(this.loginForm.value);
    this.isRegisterMode = false;
    this.loginForm.reset();
    }else {
      let user:any = this.userService.getCurrentUser();
      if(this.loginForm.get('emailId')?.value == user.emailId
      && this.loginForm.get('password')?.value == user.password){
        this.router.navigate(['/cartApp']);
      }
    }
  }

  toggleMode() {
  this.isRegisterMode = !this.isRegisterMode;
  }
}
