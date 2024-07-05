import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { InicioComponent } from './paginas/inicio/inicio.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { MateriasComponent } from './paginas/materias/materias.component';
import { MateriasInfoComponent } from './paginas/materias-info/materias-info.component';
import { InstitucionalComponent } from './paginas/institucional/institucional.component';
import { InscripcionesComponent } from './paginas/inscripciones/inscripciones.component';
import { TiendaComponent } from './paginas/tienda/tienda.component';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    MateriasComponent,
    MateriasInfoComponent,
    InstitucionalComponent,
    InscripcionesComponent,
    TiendaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
