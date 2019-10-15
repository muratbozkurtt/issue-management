import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { FooterComponent } from './pages/_layout/footer/footer.component';
import { HeaderComponent } from '../_layout/header/header.component';
import { SidebarComponent } from '../_layout/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
