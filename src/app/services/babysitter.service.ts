import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Babysitter} from '../model/babysitter';


@Injectable({
  providedIn: 'root'
})

export class BabysitterService implements OnInit {
  constructor(public httpClient: HttpClient) {
  }

  newBabysitter: Babysitter = {
    id: 0,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: ''
  };

  babysitters: Babysitter[] = [];

  private url = 'http://localhost:8080/babysitter';

  // tslint:disable-next-line:contextual-lifecycle
  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.httpClient.get<Babysitter[]>(this.url)
      .subscribe(babysitters => this.babysitters = babysitters);
  }

  delete(id: number): void {
    this.httpClient.delete(this.url + '/' + id)
      .subscribe(() => this.loadData());
  }

  createBabysitter(): void {
    this.httpClient.post<Babysitter>(this.url, this.newBabysitter)
      .subscribe(babysitter => this.babysitters.push());

  }

  getBabysitter(babysitter: Babysitter, babysitterId: number): void {
    this.httpClient.get<Babysitter>(this.url + babysitterId)
      .subscribe(babySitterFromHttps => babysitter = babySitterFromHttps);
  }
}
