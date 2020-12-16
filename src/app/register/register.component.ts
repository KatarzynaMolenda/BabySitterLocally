import {Component} from '@angular/core';
import {CreateBabysitterComponent} from '../create-babysitter/create-babysitter.component';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent extends CreateBabysitterComponent{

  constructor(public httpClient: HttpClient, private activeRoute: ActivatedRoute) {
    super(httpClient);
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
