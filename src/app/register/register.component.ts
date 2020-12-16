import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
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
  }


  constructor(public httpClient: HttpClient, private activeRoute: ActivatedRoute) {
  }

  onButtonClick(): void {
    console.log('Kliknięto przycisk');
  }

  onFormSubmit(): void {
    console.log('Zatwierdzono formularz');
  }

  onTextInputChange(): void {
    console.log('Zmieniono wartość pola tekstowego');
  }
}
