import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IconDefinition } from '@ant-design/icons-angular';
import { LockFill, UserOutline } from '@ant-design/icons-angular/icons';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
];

const icons: IconDefinition[] = [LockFill, UserOutline];

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule.forChild(icons),
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
