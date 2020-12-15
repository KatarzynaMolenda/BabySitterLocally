import {Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

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
