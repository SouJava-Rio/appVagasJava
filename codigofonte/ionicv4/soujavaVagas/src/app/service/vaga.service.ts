import {Vaga} from './../model/vaga.model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BASE_URL_REPOS} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VagaService {
  constructor(private http: HttpClient) {}

  getAllVagas(): Observable<Vaga[]> {
    return this.http.get<Vaga[]>(`${BASE_URL_REPOS}/soujava/vagas-java/issues`);
  }
  getVagaById(id: number): Observable<Vaga> {
    return this.http.get<Vaga>(
      `${BASE_URL_REPOS}/soujava/vagas-java/issues/${id}`
    );
  }
}
