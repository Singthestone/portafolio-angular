import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinationsService } from '../../services/destinations.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              public destinationsService: DestinationsService) { }

  ngOnInit() {

    this.route.params
      .subscribe(params => {
        // tslint:disable-next-line:no-string-literal
        this.destinationsService.Search( params['term'] );
      });
  }

}
