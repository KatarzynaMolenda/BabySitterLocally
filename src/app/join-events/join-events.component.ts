import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {ChildCareEventService} from '../services/ChildCareEvent.service';

@Component({
  selector: 'app-join-events',
  templateUrl: './join-events.component.html'
})
export class JoinEventsComponent extends ChildCareEventService implements OnInit {
  constructor(httpClient: HttpClient, private activeRoute: ActivatedRoute) {
    super(httpClient);
  }
  ngOnInit(): void {
    this.loadData();
  }

  join(id: number): void {
    console.log('joined event with id: ' + id);
  }
}
