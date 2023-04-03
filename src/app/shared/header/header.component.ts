import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ACCESS_TOKEN_KEY } from 'src/app/core/constants';
import { AuthService } from 'src/app/core/services/auth.service';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public currentUser$ = this.authService.currentUser$;
  isVisible = false;
  isConfirmLoading = false;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly movieService: MovieService
  ) {}

  ngOnInit(): void {}

  onLogout() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    this.authService.currentUser$.next(null);
    this.router.navigate(['/']);
  }

  handleCancel() {
    this.isVisible = false;
  }
  onShareVideo() {
    this.isVisible = true;
  }

  public submit(title: string, description: string, url: string) {
    this.isConfirmLoading = true;
    this.movieService
      .addMovie({
        title,
        description,
        videoUrl: url,
      })
      .subscribe({
        complete: () => {
          this.isConfirmLoading = false;
          this.isVisible = false;
        },
        error: () => {
          this.isConfirmLoading = false;
        },
      });
  }
}
