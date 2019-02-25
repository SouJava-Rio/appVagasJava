import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import {VagasJavaService} from '../../services/vagasJava.service';

import {VagasJava} from '../../services/vagasJava';

import swal from 'sweetalert2';

@Component({
   selector: 'app-consulta-pessoa',
   templateUrl: './consulta.component.html',
   styleUrls: ['./consulta.component.css']
 })
 export class ConsultaComponent implements OnInit {

  vagasJava: VagasJava[] = new Array();
   titulo: string;

   constructor(private vagasJavaService: VagasJavaService,
               private router: Router) {}

   ngOnInit() {

     /*SETA O TÍTULO */
     this.titulo = 'Vagas Cadastradas';

     /*CHAMA O SERVIÇO E RETORNA TODAS AS Vagas CADASTRADAS */
     this.vagasJavaService.getVagas().subscribe(res => this.vagasJava = res);
   }
 }
