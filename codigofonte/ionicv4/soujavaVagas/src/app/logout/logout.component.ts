import { Component, OnInit } from '@angular/core';
import { Autorizacao } from '../helpers/autorizacao.helper';
import { MenuService } from '../service/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: ''
})
export class LogoutComponent implements OnInit {

  constructor(private autoriazacao: Autorizacao,
              private menu: MenuService,
              private router: Router) { }

  ngOnInit() {
    console.log('teste')
    this.menu.menuNaoLogado();
    this.autoriazacao.remove();
    this.router.navigate(['home']);
  }

}
