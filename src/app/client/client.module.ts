import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './containers/client.component';
import { ClarityModule } from '@clr/angular';



@NgModule({
  declarations: [ClientComponent],
  exports: [ClientComponent],
  imports: [
    CommonModule,
    ClarityModule,
  ]
})
export class ClientModule { }
