import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Babysitter} from '../model/babysitter';


@Injectable({
  providedIn: 'root'
})

export class BabysitterService implements OnInit {
  constructor(private httpClient: HttpClient) {
  }

  newBabysitter: Babysitter = {
    id: 0,
    firstName: '',
    lastName: '',
    postalCode: '',

  };

  babysitters: Babysitter[] = [{
    firstName: 'Kasia',
    lastName: 'Molenda',
    postalCode: '03-138'
  },
    {
      firstName: 'Marcin',
      lastName: 'Nowak',
      postalCode: '03-252'
    }];

  private url = 'http://localhost:8080/babysitter';

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
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
