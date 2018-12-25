import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DataTableComponent } from './data-table/data-table.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { DataDetailsComponent } from './data-details/data-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DataTableComponent,
    StatusBarComponent,
    DataDetailsComponent,
    ContactDetailsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
