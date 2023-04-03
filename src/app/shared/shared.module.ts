import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { HeaderComponent } from './header/header.component';
import { SafePipe } from './pipes/sanitizer.pipe';

@NgModule({
  declarations: [HeaderComponent, DefaultLayoutComponent, SafePipe],
  imports: [
    CommonModule,
    NzButtonModule,
    RouterModule,
    NzIconModule,
    NzModalModule,
  ],
  exports: [HeaderComponent, DefaultLayoutComponent, SafePipe],
})
export class SharedModule {}
