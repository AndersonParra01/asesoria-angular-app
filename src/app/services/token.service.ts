import { Injectable } from '@angular/core';
import { getCookie, removeCookie, setCookie } from 'typescript-cookie'
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  //Crear
  //Creando una cookie y guardando a la vez el token de la ccokie
  saveToken(token: string) {
    setCookie('token', token, {
      expires: 365
    })
  }

  //Obtener
  //Obtiene con el nombde de la cookie el valor, y el valor es el token
  getToken() {
    const token = getCookie('token');
    return token;
  }

  //Remover
  //Eliminar la cookie con el token 
  removeToken() {
    removeCookie('token');
  }


}
