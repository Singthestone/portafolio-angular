import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Destinations } from '../interfaces/destinations.interface';
import { resolve } from '../../../node_modules/@types/q';



@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  loading = true;
  destinations: Destinations[] = [];
  travelSearch: Destinations[] = [];


  constructor(private http: HttpClient) {

    this.loadDestinations();
  }


  private loadDestinations() {

    // tslint:disable-next-line:no-shadowed-variable
    return new Promise( ( resolve, reject) => {


      this.http.get(' https://angular-html-6c575.firebaseio.com/destinations_idx.json ')
      .subscribe( (resp: Destinations[]) => {
        this.destinations = resp;
        setTimeout(() => {
          this.loading = false;
        }, 1000);
        resolve();
      });

    });
  }

  getDestination(id: string) {

    return this.http.get(`https://angular-html-6c575.firebaseio.com/destinations/${id}.json`);
  }

  Search(term: string) {

    if (this.destinations.length === 0) {

      this.loadDestinations().then(() => {

        this.filterDestinations(term);
      });

    } else {
      this.filterDestinations( term );

    }


  }
  private filterDestinations( term: string) {
    console.log(this.destinations);
    this.travelSearch = [];

    term = term.toLocaleLowerCase();

    this.destinations.forEach(dest => {

      const titleLower = dest.title.toLocaleLowerCase();

      if (dest.cod.indexOf(term) >= 0 || titleLower.indexOf(term) >= 0) {
        this.travelSearch.push(dest);
      }

    });

  }
}
