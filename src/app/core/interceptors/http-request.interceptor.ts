import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ACCESS_TOKEN_KEY } from '../constants';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  private readonly AUTHORIZATION = 'Authorization';

  constructor(private readonly router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

    const cloneRequest = request.clone({
      headers: request.headers.set(this.AUTHORIZATION, `Bearer ${accessToken}`),
    });

    return next.handle(cloneRequest);
  }
}
