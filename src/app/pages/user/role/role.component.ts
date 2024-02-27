import { Component, OnInit } from '@angular/core';
import { Rol } from '@model/rol.model';
import { RolService } from '@service/rol.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.sass'],
})
export class RoleComponent implements OnInit {
  constructor(
    private rolesService: RolService,
    private message: MessageService
  ) { }
  roles: Rol[] = [];
  isVisible: boolean = false;
  selectedRole!: Rol | null;
  ngOnInit(): void {
    this.getAllRoles();
  }
  getAllRoles() {
    this.rolesService.getAllRoles().subscribe({
      next: (roles) => {
        console.log(roles);
        this.roles = roles;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  showDialog() {
    this.isVisible = true;
    this.selectedRole = null;
  }

  closeModal(state: boolean) {
    this.isVisible = state;
  }

  editRole(role: Rol) {
    //TODO
    this.isVisible = true;
    this.selectedRole = role;
  }

  deleteRole(role: Rol) {
    const confirmation = confirm(
      `Estas seguro de eliminar el rol: ` + role.name
    );
    if (confirmation) {
    } else {
      this.message.add({
        severity: 'info',
        summary: 'Cancelado',
        detail: 'Eliminación cancelada',
      });
    }
  }
}
