import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../../services/user-service.service';
import { AlertComponent } from '../../alert/alert.component';
import { AlertService } from '../../../services/alert/alert.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, AlertComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  alertService = inject(AlertService);
  loginForm: FormGroup;
  submitted = false;
  userService = inject(UserService);
  isRegisterMode = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      userId: [0],
      emailId: ['', Validators.required],
      fullName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.isRegisterMode) {

      if (this.loginForm.invalid) {
        this.loginForm.markAllAsTouched();
      }

      this.userService.registerUser(this.loginForm.value);
      this.isRegisterMode = false;
      this.loginForm.reset();

      this.alertService.showAlert(
        'success',
        'Registro de usuario correcto'
      );
    } else {
      let user: any = this.userService.getCurrentUser();
      console.log(user);
      if (this.loginForm.invalid) {
        this.loginForm.markAllAsTouched();
      }
      if (this.loginForm.get('emailId')?.value == user?.emailId
        && this.loginForm.get('password')?.value == user?.password) {
        this.router.navigate(['/cartApp']);
      } else {
        this.alertService.showAlert(
          'warning',
          'Valida los datos o crea una cuenta'
        );
      }
    }
  }

  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;
  }
}
