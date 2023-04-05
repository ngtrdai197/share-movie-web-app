import { HttpClient, HttpParams, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BehaviorSubject, catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DEFAULT_PER_PAGE } from '../constants';
import {
  ICreateMovie,
  IGetMoviesRequest,
  IGetMoviesResponse,
  IMovie
} from '../interfaces/movie.interface';

import uniqBy from 'lodash.uniqby';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public listMovies$ = new BehaviorSubject<IGetMoviesResponse | null>(null);
  constructor(
    private readonly httpClient: HttpClient,
    private readonly notification: NzNotificationService
  ) { }

  public getListMovies(request: IGetMoviesRequest) {
    const params = new HttpParams()
      .set('page', request.page)
      .set('perPage', request.perPage);

    return this.httpClient
      .get<IGetMoviesResponse>(`${environment.apiUrl}/movie`, { params })
      .pipe(
        map((response) => {
          const currentValue = this.listMovies$.getValue();
          let state: IGetMoviesResponse;
          if (!currentValue) {
            state = response;
            this.listMovies$.next(state);
          } else {
            state = {
              data: uniqBy([...currentValue.data, ...response.data], (o) => o.id),
              paginate: response.paginate,
            };
            this.listMovies$.next(state);
          }
        }),
        catchError((e) => {
          if (e?.error?.statusCode !== HttpStatusCode.Unauthorized) {
            this.notification.error(
              'Movie',
              e?.error?.message || 'Fetch movies occurs errors'
            );
          }
          throw e;
        })
      );
  }

  public addMovie(movie: ICreateMovie) {
    return this.httpClient
      .post<IMovie>(`${environment.apiUrl}/movie`, movie)
      .pipe(
        map((response) => {
          const currentValue = this.listMovies$.getValue();
          let state: IGetMoviesResponse;
          if (!currentValue) {
            state = {
              data: [response],
              paginate: {
                page: 1,
                perPage: DEFAULT_PER_PAGE,
                total: 1,
              },
            };
          } else {
            state = {
              data: uniqBy([...currentValue.data, response], (o) => o.id),
              paginate: {
                ...currentValue.paginate,
                total: currentValue.paginate.total + 1,
              },
            };
          }
          this.listMovies$.next(state);
        }),
        catchError((e) => {
          if (e?.error?.statusCode !== HttpStatusCode.Unauthorized) {
            this.notification.error(
              'Movie',
              e?.error?.message || 'Fetch movies occurs errors'
            );
          }
          throw e;
        })
      );
  }
}
