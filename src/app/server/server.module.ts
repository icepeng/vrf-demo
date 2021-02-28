import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerComponent } from './containers/server.component';



@NgModule({
  declarations: [ServerComponent],
  exports: [ServerComponent],
  imports: [
    CommonModule
  ]
})
export class ServerModule { }
