import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environments';
import { Access } from '@model/auth.model';
import { Token } from '@model/token.model';
import { tap } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  private apiUrl = `${environment.api}/auth`

  login(access: any) {
    return this.http.post<Token>(`${this.apiUrl}/login`, access).pipe(
      tap((response) => {
        console.log(response);
        this.tokenService.saveToken(response.token);
      })
    )
  }
}
