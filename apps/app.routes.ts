import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { MateriasComponent } from './paginas/materias/materias.component';
import { MateriasInfoComponent } from './paginas/materias-info/materias-info.component';
import { InstitucionalComponent } from './paginas/institucional/institucional.component';
import { InscripcionesComponent } from './paginas/inscripciones/inscripciones.component';
import { TiendaComponent } from "./paginas/tienda/tienda.component";

export const routes: Routes = [
    { path:'', component: InicioComponent },
    { path:'inscripciones', component: InscripcionesComponent },
    { path:'institucional', component: InstitucionalComponent },
    { path:'contacto', component: ContactoComponent },
    { path:'materias', component: MateriasComponent },
    { path:'materias/:id', component: MateriasInfoComponent },
    { path: 'tienda', component:TiendaComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' },
];