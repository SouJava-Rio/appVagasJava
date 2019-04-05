import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {


  public appPages = new Set();

  constructor() {
  }


  public menuNaoLogado() {
    this.appPages = new Set(
      [
        {
          title: 'Home',
          url: '/home',
          icon: 'home'
        },
        {
          title: 'Vagas',
          url: '/vagas',
          icon: 'mail-unread'
        },
        {
          title: 'Login Github',
          url: '/login',
          icon: 'key'
        }
      ]
    );
  }

  public menuLogado() {

    this.appPages = new Set(
      [
        {
          title: 'Home',
          url: '/home',
          icon: 'home'
        },
        {
          title: 'Vagas',
          url: '/vagas',
          icon: 'mail-unread'
        },
       { title: 'Acesso anonimo',
        url: '/logout',
        icon: 'key'
      },
      {
        title: 'Cadastro de Vagas',
        url: '/cadastro-vaga',
        icon: 'contacts'
      }
      ]
    )

  }



}
