import {HttpClient} from '@angular/common/http';
import {ChildCareEvent} from '../model/childCareEvent';
import {Location} from '../model/location';

export class ChildCareEventService {
  private url = 'http://localhost:8080/event';

  constructor(public httpClient: HttpClient) {
  }
  newLocation: Location = {
    street: '',
    postalCode: '',
    city: ''
  };

  newEvent: ChildCareEvent = {
    name: '',
    startTime: '',
    endTime: '',
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

  createLocation(): void {
    this.httpClient.post<Location>('http://localhost:8080/location', this.newLocation)
      .subscribe();
  }
}
