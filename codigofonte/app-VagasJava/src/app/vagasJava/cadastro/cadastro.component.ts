import { VagasJavaService } from './../../services/vagasJava.service';
import { error } from 'util';
import { VagasJava } from './../../services/vagasJava';
import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import swal from 'sweetalert2';

@Component({
   selector: 'app-cadastro-pessoa',
   templateUrl: './cadastro.component.html',
   styleUrls: ['./cadastro.component.css']
 })
 export class CadastroComponent implements OnInit {

    titulo: string;
    acao: string;
    botao: string;
    vagasJava: VagasJava = new VagasJava();

   constructor(private vagasjavaService: VagasJavaService,
               private router: Router,
               private activatedRoute: ActivatedRoute) {}

   /*CARREGADO NA INICIALIZAÇÃO DO COMPONENTE */
   ngOnInit() {

     this.activatedRoute.params.subscribe(() => {

         this.titulo = 'Novo Cadastro de Vaga';
         this.acao = 'Salvar';
         this.botao = 'btn btn-primary btn-block';

     });
   }

   salvar(): void {

       /*CHAMA O SERVIÇO PARA ADICIONAR UMA NOVA Vaga */
       this.vagasjavaService.addVaga(this.vagasJava).subscribe(() => {

           swal(
            this.vagasJava.username + ' , vaga cadastrada com sucesso.',
            '',
            'success'
          ) ;

           this.vagasJava = new VagasJava();
           this.router.navigate(['/consulta-vagas']);
        });
   }
 }
