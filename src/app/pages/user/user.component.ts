import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  /*
  inicia el aplicativo
  cuando cambia el aplicativo
  esuchar el aplicativo
  para destruir un componente
  desuscribirme de un servicio
  */

  constructor(private router: Router, private userService: UserService) { }
  users: User[] = [];


  ngOnInit(): void {
    this.getAllUsers();
  }

  createUser() {
    this.router.navigate(['/administrator/users/create'])
    console.log('create user');
  }


  getAllUsers() {
    this.userService.getAllUsers().subscribe({
      next: (users) => {
        this.users = users;
        console.log(users);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  editUser(user: User) {
    this.router.navigate([`/administrator/users/edit/${user.id}`])
  }

  deleteUser(user: User) {
    this.userService.deleteUserById(user.id).subscribe({
      next: () => {
        console.log('user deleted success');
        this.getAllUsers();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
