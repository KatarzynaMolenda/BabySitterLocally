import {OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ChildCareEvent} from '../model/childCareEvent';

export class ChildCareEventService {
  private url = 'http://localhost:8080/event';

  constructor(public httpClient: HttpClient) {
  }

  newEvent: ChildCareEvent = {
    name: '',
    startDateTime: '',
    endDateTime: '',
    childrenList: [],
    location: null
  };

  events: ChildCareEvent[] = [];


  loadEvents(): void {
    this.httpClient.get<ChildCareEvent[]>(this.url)
      .subscribe(events => this.events = events);
  }

  createEvent(): void {
    this.httpClient.post<ChildCareEvent>(this.url, this.newEvent)
      .subscribe();
  }
}
