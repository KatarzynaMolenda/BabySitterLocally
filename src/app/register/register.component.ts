import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Babysitter} from '../model/babysitter';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent{

  private url = 'http://localhost:8080/babysitter';
  newBabysitter: Babysitter = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  };

  createBabysitter(): void {
    this.httpClient.post<Babysitter>(this.url, this.newBabysitter)
      .subscribe();
    this.router.navigateByUrl('/');
  }

  constructor(public httpClient: HttpClient, private activeRoute: ActivatedRoute, private router: Router) {
  }

}
