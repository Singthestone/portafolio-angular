import { Component, OnInit } from '@angular/core';
import { DestinationsService } from '../../services/destinations.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor( public destinationsService: DestinationsService ) { }

  ngOnInit() {
  }

}
