import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinationsService } from '../../services/destinations.service';
import { DestinationsDesc } from '../../interfaces/destinations-desc.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  destinations: DestinationsDesc;
  id: string;

  constructor(private route: ActivatedRoute,
              public destinationsService: DestinationsService ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {



        this.destinationsService.getDestination(params.id)
          .subscribe((destinations: DestinationsDesc) => {
            this.id = params.id;
            this.destinations = destinations;
          });
      });
  }

}
