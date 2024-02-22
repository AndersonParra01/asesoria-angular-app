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

  //TODO
  //Obtener por Id
  //Crear
  //Ediar por Id
  //Eliminar por Id
}
