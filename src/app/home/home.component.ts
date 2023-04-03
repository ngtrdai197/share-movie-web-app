import { Component, OnInit } from '@angular/core';
import { throttleTime } from 'rxjs';
import { MovieService } from '../core/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private page = 1;
  private perPage = 3;
  private loading = false;

  public moviesResponse$ = this.movieService.listMovies$;
  constructor(private readonly movieService: MovieService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  public onScrollDown() {
    this.page++;
    this.loadDataThrottle();
  }

  private loadMovies() {
    this.loading = true;
    this.movieService
      .getListMovies({ page: this.page, perPage: this.perPage })
      .subscribe({
        complete: () => {
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        },
      });
  }

  loadDataThrottle(): void {
    this.loading = true;
    this.movieService
      .getListMovies({ page: this.page, perPage: this.perPage })
      .pipe(throttleTime(500))
      .subscribe({
        complete: () => {
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        },
      });
  }
}
