import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AgregarRegistrosComponent } from './agregar-registros/agregar-registros.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarRegistrosComponent } from './editar-registros/editar-registros.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AgregarRegistrosComponent,
    EditarRegistrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
