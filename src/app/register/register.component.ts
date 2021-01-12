import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Babysitter} from '../model/babysitter';
import {BabysitterValidationErrors} from '../model/babysitterValidationErrors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  private url = 'http://localhost:8080/babysitter';
  newBabysitter: Babysitter = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  };

  validationErrors: BabysitterValidationErrors = {};
  submitted = false;

  constructor(public httpClient: HttpClient, private activeRoute: ActivatedRoute, private router: Router) {
  }

  createBabysitter(): void {
    this.httpClient.post<Babysitter>(this.url, this.newBabysitter)
      .subscribe(() => this.router.navigateByUrl('/'),
        errorResponse => {
          this.submitted = true;
          this.validationErrors = errorResponse.error;
        }
      );
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
