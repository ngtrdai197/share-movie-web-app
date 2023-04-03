import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import {
  BehaviorSubject,
  catchError,
  concatMap,
  map,
  of,
  take,
  tap,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { ACCESS_TOKEN_KEY } from '../constants';
import { ILoginRequest, ILoginResponse } from '../interfaces/login.interface';
import {
  IRegisterRequest,
  IRegisterResponse,
} from '../interfaces/register.interface';
import { ICurrentUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public currentUser$ = new BehaviorSubject<ICurrentUser | null>(null);

  constructor(
    private readonly httpClient: HttpClient,
    private readonly notification: NzNotificationService,
    private readonly router: Router
  ) {}

  public login(login: ILoginRequest) {
    return this.httpClient
      .post<ILoginResponse>(`${environment.apiUrl}/auth/login`, login)
      .pipe(
        concatMap((response) => {
          localStorage.setItem(ACCESS_TOKEN_KEY, response.accessToken);
          return this.getProfile();
        }),
        tap(() => {
          this.notification.success('Authenticated', 'Successful login');
          this.router.navigate(['/']);
        }),
        take(1),
        catchError((e) => {
          const title =
            e.error.statusCode === 401 ? 'Unauthenticated' : 'Login';
          const content =
            e.error.statusCode === 401
              ? e.error.message
              : 'Something went wrong';
          this.notification.error(title, content);
          return of();
        })
      );
  }

  public register(register: IRegisterRequest) {
    return this.httpClient
      .post<IRegisterResponse>(`${environment.apiUrl}/auth/register`, register)
      .pipe(
        tap((response) => {
          this.notification.success(
            'Registration',
            'Successful registration information'
          );
          this.router.navigate(['/auth/login']);
          return response;
        }),
        take(1),
        catchError((e) => {
          this.notification.error(
            'Registration',
            e.error.message || 'Something went wrong'
          );
          return of();
        })
      );
  }

  public getProfile() {
    return this.httpClient
      .get<ICurrentUser>(`${environment.apiUrl}/auth/profile`)
      .pipe(
        map((profile) => {
          this.currentUser$.next(profile);
        }),
        catchError((e) => {
          localStorage.removeItem(ACCESS_TOKEN_KEY);
          this.router.navigate(['/']);

          throw e;
        })
      );
  }
}
