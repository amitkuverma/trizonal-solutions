import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {
  private readonly cookieName = 'NewAuthorization';

  constructor() {
  }

}
