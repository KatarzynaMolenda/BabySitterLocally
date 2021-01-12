import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']

})
export class MainViewComponent {

  constructor(public httpClient: HttpClient) {
  }

  onButtonClick(): void {
    console.log('Kliknięto przycisk');
  }

}
