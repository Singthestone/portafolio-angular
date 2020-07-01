import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  loaded = false;
  
  equipo: any[] = []

  constructor( private http: HttpClient) {
    console.log('InfoPage Service');

    this.loadInfo();
    this.loadEquipo();


  }
  private loadInfo() {
    this.http.get('assets/data/data-page.json')
    .subscribe((resp: InfoPage) => {
      this.loaded = true;
      this.info = resp;
    });
  }

  private loadEquipo() {
    this.http.get('https://angular-html-6c575.firebaseio.com/equipo.json')
    .subscribe( (resp: any []) => {
      this.equipo = resp;
      console.log(resp);
    });
  }
}
