import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '@service/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = this.addToken(request)
    return next.handle(request);
  }

  //INYECTAR EN DENTRO DE TODAS LAS PETICIONES EN LOS HEADERS EL BEARER TOKEN
  private addToken(request: HttpRequest<unknown>) {
    const token = this.tokenService.getToken();
    if (token) {
      console.log('INTERCETOR', token);
      const authRequest = request.clone({
        headers: request.headers.set(`Authorization`, `Bearer ${token}`)
      })
      return authRequest;
    }
    return request;
  }

  //DEVOLVER ESTO UN TRUE O FALSE
}
