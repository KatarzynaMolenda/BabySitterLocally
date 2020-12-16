import {Component, OnInit} from '@angular/core';
import {Babysitter} from '../model/babysitter';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-babysitter',
  templateUrl: './create-babysitter.component.html',
  styleUrls: ['./create-babysitter.component.css']
})
export class CreateBabysitterComponent implements OnInit {
  babysitters: Babysitter[] = [];
  newBabysitter: Babysitter = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  };

  constructor(public httpClient: HttpClient) {
  }

  getFromServer(): void {
    this.httpClient.get<Babysitter[]>('http://localhost:8080/babysitter')
      .subscribe(babysitters => this.babysitters = babysitters);
  }
  ngOnInit(): void {
    this.getFromServer();
  }
  createBabysitter(): void {
    this.httpClient.post<Babysitter>('http://localhost:8080/babysitter', this.newBabysitter)
      .subscribe(() => this.getFromServer());
  }
}
