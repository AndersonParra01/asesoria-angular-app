
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '@service/token.service';

export const isTokenGuard: CanActivateFn = (route, state) => {
  // GUARDIAN VA A VERIFICAR SI UN TOKEN EXISTE SI EXISTE LE DEJAMOS INGRESAR DE LO 
  // CONTRARIO LO VAMOS A REDIRECCIONAR AL LOGIN 

  const tokenService = inject(TokenService)
  const router = inject(Router);
  const token = tokenService.getToken();

  if (!token) {
    console.log('No tienes acceso por falta de token');
    router.navigate(['/administrator/login']);
    return false;
  }
  // retornar un booleano
  return true;
};
