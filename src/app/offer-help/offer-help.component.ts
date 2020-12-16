import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {ChildCareEventService} from '../services/ChildCareEvent.service';

@Component({
  selector: 'app-offer-help',
  templateUrl: './offer-help.component.html',
  styleUrls: ['./offer-help.component.css']
})

export class OfferHelpComponent extends ChildCareEventService implements OnInit {

  constructor(httpClient: HttpClient, private activatedRoute: ActivatedRoute) {
    super(httpClient);
  }

  ngOnInit(): void {

  }
}
