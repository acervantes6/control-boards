import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarInitComponent } from './shared/sidebar/sidebar-init.component';
import { GraficasModule } from './graficas/graficas.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarInitComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GraficasModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
