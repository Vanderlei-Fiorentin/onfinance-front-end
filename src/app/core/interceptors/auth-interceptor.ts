import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const token = this.authService.getAuthorizationToken() ?? '';
    let request: HttpRequest<any> = req;

    request = req.clone({
      headers: req.headers.set('Authorization', token)
    });

    return next.handle(request);
     
  }

}
