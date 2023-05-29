import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PreviewProfileComponent } from './pages/preview-profile/preview-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProyectoComponent,
    PerfilComponent,
    NavbarComponent,
    PreviewProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
