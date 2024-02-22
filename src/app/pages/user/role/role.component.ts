import { Component, OnInit } from '@angular/core';
import { Rol } from '@model/rol.model';
import { RolService } from '@service/rol.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.sass']
})
export class RoleComponent implements OnInit {
  constructor(private rolesService: RolService) { }
  roles: Rol[] = [];
  isVisible: boolean = false;
  ngOnInit(): void {
    this.getAllRoles();
  }
  getAllRoles() {
    this.rolesService.getAllRoles().subscribe({
      next: (roles) => {
        console.log(roles);
        this.roles = roles
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  showDialog() {
    this.isVisible = true;
  }

  closeModal(state: boolean) {
    this.isVisible = state
  }
}
