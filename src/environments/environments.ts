import { HttpHeaders } from "@angular/common/http";
//  const HOST = 'http://localhost:8080'; //Backend
const HOST_PRODUCTION = 'https://springboot-user-api-production.up.railway.app'

//  const HOST_PRODUCTION = 'http://localhost:8080'; //Backend
export const environment = {
  production: false,
  HOST_PRODUCTION,
  api: HOST_PRODUCTION + '/api/v1',
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8'
  })
};