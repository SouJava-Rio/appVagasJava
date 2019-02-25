import { MenuComponent } from './menu/menu.component';
import { VagasJavaService } from './services/vagasJava.service';
import { ConfigService } from './services/config.service';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ChipsModule, ButtonModule, TabViewModule, CodeHighlighterModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {routing} from './../app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './vagasJava/cadastro/cadastro.component';
import { ConsultaComponent } from './vagasJava/consulta/consulta.component';
import { HttpClientModule } from '@angular/common/http';
import {DataListModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    ConsultaComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    ChipsModule,
    ButtonModule,
    TabViewModule,
    CodeHighlighterModule,
    BrowserAnimationsModule,
    DataListModule,
    HttpClientModule
  ],
  providers: [ConfigService, VagasJavaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
