// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user = new BehaviorSubject<string|null>(null);

  get user() {
    return this._user.asObservable();
  }

  login(username: string, password: string) {
    // Aquí es donde normalmente harías una solicitud HTTP para autenticar al usuario.
    // Por ahora, sólo vamos a simularlo.
    if (username === 'usuario' && password === 'contraseña') {
      this._user.next(username);
    }
  }

  logout() {
    this._user.next(null);
  }
}
