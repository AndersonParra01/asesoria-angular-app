import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Token } from '@model/token.model';
import { User } from '@model/user.model';
import { AuthService } from '@service/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  loading: boolean = false;
  profile: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    public messageService: MessageService,

  ) {

  }
  formLogin = this.fb.group({
    username: this.fb.control('', { validators: [Validators.required], nonNullable: true }),
    password: this.fb.control('', { validators: [Validators.required], nonNullable: true }),
  });


  login() {
    this.loading = true;
    const userValue = this.formLogin.value;
    this.authService.login(userValue).subscribe({
      next: (user: Token) => {
        if (user) {
          console.log('EJECUTANDO', user);
          switch (user.role) {
            case 'administrator':
              this.router.navigate(['/administrator/home']);
              break;
            default:
              this.router.navigate(['/administrator/not-found']);
          }
          this.loading = false;
        }
      },
      error: (error) => {
        console.log(error)
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Usuario inautorizado',
          detail: `${error.status}`
        })
      },
    });
  }

  onSubmit() {
    if (this.formLogin.valid) {
      this.login();
      console.log('login true');
    } else {
      this.formLogin.markAllAsTouched();
      console.log('error');
    }
  }

  isRequired(field: AbstractControl): boolean {
    return field.hasValidator(Validators.required);
  }

  //Getters
  get usernameField() {
    return this.formLogin.controls['username'];
  }

  get passwordField() {
    return this.formLogin.controls['password'];
  }
}
