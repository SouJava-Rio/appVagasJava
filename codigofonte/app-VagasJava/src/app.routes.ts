import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ConsultaComponent } from './app/vagasJava/consulta/consulta.component';

import {CadastroComponent} from './app/vagasJava/cadastro/cadastro.component';

import { HomeComponent } from './app/home/home.component';

const appRoutes: Routes = [
    { path: 'home',                    component: HomeComponent },
    { path: '',                        component: HomeComponent },
    { path: 'consulta-vagas',         component: ConsultaComponent },
    { path: 'cadastro-vaga',         component: CadastroComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
