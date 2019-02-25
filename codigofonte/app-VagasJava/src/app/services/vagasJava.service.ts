
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import {VagasJava} from '../services/vagasJava';
import {ConfigService} from './config.service';

@Injectable()
export class VagasJavaService {

    private baseUrlService: string = '';
    private headers: Headers;
    private options: RequestOptions;

    constructor(private http: Http,
                private configService: ConfigService) {

        /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
        this.baseUrlService = configService.getUrlService();
    }

    /**CONSULTA TODAS AS Vagas CADASTRADAS */
    getVagas() {
        return this.http.get(this.baseUrlService + 'soujava/vagas-java/issues').map(res => res.json());
    }

    /**ADICIONA UMA NOVA Vaga */
    addVaga(vagasJava: VagasJava) {
        this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        this.headers.append('Authorization', 'Basic ' + btoa(vagasJava.username + ':' + vagasJava.password));
        this.options = new RequestOptions({ headers: this.headers });
        return this.http.post(this.baseUrlService + 'soujava/vagas-java/issues', JSON.stringify(vagasJava), this.options)
        .map(res => res.json());
    }
}
