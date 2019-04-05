import {Vaga} from './../../model/vaga.model';
import {Component, OnInit} from '@angular/core';
import {VagaService} from 'src/app/service/vaga.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.page.html',
  styleUrls: ['./vagas.page.scss']
})
export class VagasPage implements OnInit {
  constructor(private vagaService: VagaService, private router: Router) {}

  vagas: Vaga[] = [];
  vagasFilter: Vaga[] = [];

  pesquisa = '';

  ngOnInit() {
    this.vagaService.getAllVagas().subscribe(result => {
      this.vagasFilter = result;
      this.vagas = this.vagasFilter;
    });
  }

  openVaga(vaga) {
    this.router.navigate([`/cadastro-vaga/${vaga.number}`]);
  }

  buscar() {
    this.vagas = this.vagasFilter.filter(a => a.title.includes(this.pesquisa));
  }

  cancelar() {
    this.vagas = this.vagasFilter;
  }

  limpar() {
    this.pesquisa = '';
  }

  openNewVaga() {
    this.router.navigate(['/cadastro-vaga']);
  }
}
