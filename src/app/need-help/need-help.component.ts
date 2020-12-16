import {Component, OnInit} from '@angular/core';
import {BabysitterService} from '../services/babysitter.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-need-help',
  templateUrl: './need-help.component.html',
  styleUrls: ['./need-help.component.css']
})
export class NeedHelpComponent extends BabysitterService implements OnInit {
  constructor(public httpClient: HttpClient, private activeRoute: ActivatedRoute) {
    super(httpClient);
  }
  ngOnInit(): void {
    this.loadData();
  }
}
