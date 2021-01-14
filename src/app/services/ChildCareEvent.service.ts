import {HttpClient} from '@angular/common/http';
import {ChildCareEvent} from '../model/childCareEvent';
import {Location} from '../model/location';
import {EventDTO} from '../model/eventDTO';


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
    children: [],
    location: null
  };

  newEventDTO: EventDTO = {
    name: '',
    startTime: '',
    endTime: '',
    children: [],
    city: '',
    postalCode: '',
    street: ''
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

  createDTO(): void {
    this.httpClient.post<EventDTO>('http://localhost:8080/event/dto', this.newEventDTO)
      .subscribe();
  }
}
