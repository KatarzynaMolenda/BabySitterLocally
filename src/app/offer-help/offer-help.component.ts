import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {BabysitterService} from '../services/babysitter.service';
import {Babysitter} from '../model/babysitter';

@Component({
  selector: 'app-offer-help',
  templateUrl: './offer-help.component.html',
  styleUrls: ['./offer-help.component.css']
})

export class OfferHelpComponent implements OnInit {
  babySitter: Babysitter = {id: 0, firstName: '', lastName: '', phoneNumber: '', email: ''};

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute, private babysitterService: BabysitterService) {
  }

  ngOnInit(): void {

  }
}
