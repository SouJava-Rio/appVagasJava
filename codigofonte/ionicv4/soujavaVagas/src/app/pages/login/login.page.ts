import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserLogin } from '../../model/user.model';
import { LoginService } from '../../service/login.service';
import { AlertControllerService } from '../../service/alert-controller.service';
import { MenuService } from 'src/app/service/menu.service';

const url = 'https://github.com/login/oauth/authorize?client_id=11499da26142c0631e64';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {
  submitted = false;
  login: UserLogin = { username: '', password: '' };

  constructor(
    private loginService: LoginService,
    private router: Router,
    private alert: AlertControllerService,
    private menu: MenuService,
    private currentRouter: ActivatedRoute) { }

    ngOnInit() {

    }


  onLogin(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      window.location.href = url;
    }
  }

  getCode() {
    return window.location.href.match(/\?code=(.*)/)[1] = url;
  }

}
