import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = `${environment.api}/users`

  constructor(
    private http: HttpClient
  ) { }


  //En listar todos los usuarios
  getAllUsers() {
    return this.http.get<User[]>(this.url);
  }

  //Buscar un usuario por Id
  getUserById(id: number) {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  //Crear un usuario
  createUser(user: User) {
    return this.http.post<User>(`${this.url}/create`, user)
  }

  //Editar un usuario por Id
  editUserById(id: number, newUser: User) {
    return this.http.put<User>(`${this.url}/${id}`, newUser)
  }

  //Borrar un usuario por Id
  deleteUserById(id: number | null | undefined) {
    return this.http.delete<User>(`${this.url}/${id}`)
  }

}
