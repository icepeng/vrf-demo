import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientModule } from './client/client.module';
import { ServerModule } from './server/server.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    ClientModule,
    ServerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
