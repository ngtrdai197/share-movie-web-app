import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzNotificationModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
})
export class CoreModule {}
