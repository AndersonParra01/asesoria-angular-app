import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environments';
import { Rol } from '@model/rol.model';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  private apiUrl = `${environment.api}/roles`
  constructor(
    private http: HttpClient
  ) { }

  getAllRoles() {
    return this.http.get<Rol[]>(this.apiUrl);
  }
  //Obtener por Id
  getAllRolById(id: number) {
    return this.http.get<Rol>(`${this.apiUrl}/${id}`)
  }

  //Crear

  createRole(rol: Rol) {
    return this.http.post<Rol>(`${this.apiUrl}/create`, rol)
  }
  //Ediar por Id

  editRoleById(id: number, newRole: Rol) {
    return this.http.put<Rol>(`${this.apiUrl}/${id}`, newRole)
  }
  //Eliminar por Id

  deleteRoleById(id: number) {
    return this.http.delete<Rol>(`${this.apiUrl}`)
  }
}
