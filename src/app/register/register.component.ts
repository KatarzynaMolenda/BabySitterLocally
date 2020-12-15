import {Component} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

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
