import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@model/user.model';
import { AuthService } from '@service/auth.service';
import { TokenService } from '@service/token.service';
import { UserService } from '@service/user.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: this.fb.control('', { validators: [Validators.required,], nonNullable: true }),
    password: this.fb.control('', { validators: [Validators.required], nonNullable: true }),
  });
  user: User | undefined;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router,
    private messageService: MessageService,
    private tokenService: TokenService,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.login();
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  login() {
    this.loading = true;
    const valuesForm = this.loginForm.value;
    console.log(valuesForm);

    this.authService.login(this.loginForm.value).subscribe(
      {
        next: (data) => {
          console.log('USER' + data);
          this.route.navigate(['/home']);
          console.log('EJECUTANDO', data);
          this.loading = false;
        },
        error: (error: any) => {
          this.loading = false;
          console.log(error);
          this.messageService.add({
            severity: 'error',
            summary: 'Usuario sin autorizacion',
            detail: error.status,
          })
        }
      }
    );
  }

  isRequired(field: AbstractControl): boolean {
    return field.hasValidator(Validators.required);
  }

  get usernameField() {
    return this.loginForm.controls['username'];
  }

  get passwordField() {
    return this.loginForm.controls['password'];
  }

}
