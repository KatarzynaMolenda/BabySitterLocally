import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Babysitter} from '../model/babysitter';
import {BabysitterService} from '../services/babysitter.service';

@Component({
  selector: 'app-need-help',
  templateUrl: './offer-help.component.html',
  styleUrls: ['./offer-help.component.css']
})
export class OfferHelpComponent implements OnInit {
  babySitter: Babysitter = {id: 0, firstName: '', lastName: '', postalCode: ''};
  babysitterId = this.activatedRoute.snapshot.params.babysitterId;
  newEvent: any;

  constructor(private activatedRoute: ActivatedRoute,
              private babysitterService: BabysitterService) {
  }

  ngOnInit(): void {
    this.babysitterService.getBabysitter(this.babySitter, this.babysitterId);
  }

  createEvent() {

  }
}
