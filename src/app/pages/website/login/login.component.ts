import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  userForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  onSubmit() {
    if (this.userForm.valid) {
      //Ejecutar una funcion que seria login
      console.log('Login executed');
      this.login();
    } else {
      this.userForm.markAllAsTouched
      console.log('Error tienes tu cursor colocado');
    }
  }

  login() {
    const values = this.userForm.value;
    console.log(values);
    this.authService.login(values).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.log(error);
      }
    })

  }


}
