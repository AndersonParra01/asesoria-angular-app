import { Component, OnInit } from '@angular/core';
import { User } from '@model/user.model';
import { AuthService } from '@service/auth.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
})
export class AdministratorComponent implements OnInit {
  constructor(private authService: AuthService) { }

  user: User | null = null;

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    this.user = storedUser ? JSON.parse(storedUser) : null;
    console.log(this.user);
    // this.authService.user$.subscribe({
    //   next: (user: any) => {
    //     if (user !== null) {
    //       console.log('USER', user);
    //       localStorage.setItem('user', JSON.stringify(user));
    //       this.user = user;
    //     }
    //   },
    //   error: (error) => {
    //     console.log('Error obteniendo el usuario', error);
    //   }
    // });
  }

  isCollapsed = false;

  getCurrentYear() {
    return new Date().getFullYear();
  }

  toggleSidebar(toggle: any) {
    this.isCollapsed = toggle;
  }
}
