import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@service/auth.service';
import { TokenService } from '@service/token.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.sass'],
})
export class TopbarComponent implements OnInit {
  @Output() toggleSidebar = new EventEmitter<boolean>();

  isCollapsed = false;
  user: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService
  ) { }
  ngOnInit(): void {
    this.getProfile();
  }
  getProfile() {
    // this.authService.getProfile().subscribe((data: any) => {
    //   this.user = data[0];
    // });
  }
  onlogout(): void {
    setTimeout(() => {
      // this.authService.logout();
      this.tokenService.removeToken();
      localStorage.removeItem('user');
      this.router.navigate(['/administrator/login']);
    }, 200);
  }

  toggle() {
    this.isCollapsed = !this.isCollapsed;
    this.toggleSidebar.emit(this.isCollapsed);
  }
}
