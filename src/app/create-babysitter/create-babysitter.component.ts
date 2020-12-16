import {Component, OnInit} from '@angular/core';
import {Babysitter} from '../model/babysitter';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-babysitter',
  templateUrl: './create-babysitter.component.html',
  styleUrls: ['./create-babysitter.component.css']
})
export class CreateBabysitterComponent implements OnInit {
  private url = 'http://localhost:8080/babysitter';
  babysitters: Babysitter[] = [];
  newBabysitter: Babysitter = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  };

  constructor(public httpClient: HttpClient) {
  }

  ngOnInit(): void {
    // this.getFromServer();
  }

  createBabysitter(): void {
    this.httpClient.post<Babysitter>(this.url, this.newBabysitter)
      .subscribe(() => this.getBabysitters());
  }

  getBabysitters(): void {
    this.httpClient.get<Babysitter[]>(this.url)
      .subscribe(babysitters => this.babysitters = babysitters);
  }
}
