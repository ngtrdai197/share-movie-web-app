import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  template: ` <router-outlet></router-outlet>`,
  styles: [
    `
      :host {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
})
export class AuthComponent {}
