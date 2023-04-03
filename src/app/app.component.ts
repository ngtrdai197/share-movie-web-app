import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app-share-movies';
  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {
    console.log('AppComponent');
    this.authService.getProfile().subscribe();
  }
}
